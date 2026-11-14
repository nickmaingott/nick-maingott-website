import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AfterQuery() {
  const tasks = [
    {
      text: "Contributing as a domain expert on the AfterQuery platform, helping build high-quality human data used to train and evaluate frontier AI models.",
      keywords: ["domain expert", "AfterQuery platform", "frontier AI models"],
    },
    {
      text: "Currently working on Project Cipher — writing original, hard questions designed to challenge AI models and expose gaps in their reasoning.",
      keywords: ["Project Cipher", "challenge AI models", "reasoning"],
    },
    {
      text: "Crafting problems that draw on real-world software engineering and AI experience, with clear reference answers so model responses can be checked reliably.",
      keywords: ["software engineering", "reference answers"],
    },
    {
      text: "Continuing an ongoing collaboration with AfterQuery alongside my engineering work, keeping a close eye on how today's AI systems succeed and fail.",
      keywords: ["ongoing collaboration", "AI systems"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            AI Expert Contributor{" "}
            <span className="text-AAsecondary">@ AfterQuery</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Oct 2026 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.afterquery.com/", "_blank")}
          >
            www.afterquery.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords,
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
