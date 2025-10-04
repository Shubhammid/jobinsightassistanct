"use client";
import React, { useRef, useState } from "react";
import {
  AutosizeTextarea,
  AutosizeTextAreaRef,
} from "@/components/ui/autosize-textarea";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

const JobInfoForm = () => {
  const [jobDescription, setJobDescription] = useState("");
  const textareaRef = useRef<AutosizeTextAreaRef>(null);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="pt-3 mb-3 z-10 mx-auto w-full max-w-2xl">
      <div
        className="flex flex-col border-[0.5px]
          border-zine-300 mx-2 md:mx-0 items-stretch
          transition-all duration-200
          relative shadow-md
          rounded-2xl bg-white
          "
      >
        <div className="flex flex-col gap-3.5 m-3.5">
          <AutosizeTextarea
            ref={textareaRef}
            rows={3}
            maxHeight={180}
            minHeight={100}
            value={jobDescription}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                handleSubmit();
              }
            }}
            placeholder="Paste Job title & description"
            className="resize-none pr-12 text-base !border-0
                      font-normal !shadow-none !ring-0
                      focus-visible:!ring-offset-0
                      focus-visible:!ring-0
                      "
          />
        </div>
        <div className="flex w-full items-center justify-end px-5 py-2">
          <Button
            size="icon"
            onClick={handleSubmit}
            disabled={!jobDescription?.trim()}
          >
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobInfoForm;
