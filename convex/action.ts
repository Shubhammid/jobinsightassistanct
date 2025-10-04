"use node";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { processAndCleanJobDescription } from "@/lib/job-process";
import { genAI } from "@/lib/gemini-ai";
import { api } from "./_generated/api";
import { JobStatus } from "@/lib/contants";
import { getJobTitleDescPrompt } from "@/lib/prompt";

export const processJobWithAI = internalAction({
  args: {
    jobId: v.id("jobs"),
    userId: v.string(),
    jobDescription: v.string(),
  },
  handler: async (ctx, args) => {
    const processedDesc = await processAndCleanJobDescription(
      args.jobDescription
    );
    let title = "Untitled";
    let htmlDescription = "";
    try {
      const prompt = getJobTitleDescPrompt(processedDesc);
      const response = await genAI.models.generateContent({
        model: "gemini-flash-lite-latest",
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: {
          maxOutputTokens: 2000,
          temperature: 0.3,
          responseMimeType: "application/json",
        },
      });
      if (response.text) {
        const parsedResponse = JSON.parse(response.text);
        title = parsedResponse.title ?? title;
        htmlDescription = parsedResponse.htmlDescription ?? "";
      }
    } catch (error) {
      console.log("AI processing failed", error);
    }

    await ctx.runMutation(api.job.updateJob, {
      jobId: args.jobId,
      jobTitle: title,
      processedDescription: processedDesc,
      htmlFormatDescription: htmlDescription,
      status: JobStatus.READY,
    });
  }
})