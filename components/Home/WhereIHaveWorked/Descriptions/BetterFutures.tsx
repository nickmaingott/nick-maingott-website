import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function BetterFutures() {
  const tasks = [
    {
      text: "Developed AI-powered automation for engineering documentation on the EVA™ AI Platform, turning complex engineering information into structured, reliable documentation.",
      keywords: ["AI-powered automation", "EVA™ AI Platform", "engineering documentation"],
    },
    {
      text: "Designed and implemented solutions with Retrieval-Augmented Generation (RAG), large language models, vector databases and cloud infrastructure.",
      keywords: ["Retrieval-Augmented Generation", "large language models", "vector databases", "cloud infrastructure"],
    },
    {
      text: "Built AI workflows with traceable outputs, validation mechanisms and audit-ready results, and integrated AI capabilities into production-oriented software systems.",
      keywords: ["AI workflows", "traceable outputs", "audit-ready results", "production-oriented"],
    },
    {
      text: "Worked across engineering and software teams on maintainable AI solutions — spanning prompt engineering, vector search, document automation and API integration.",
      keywords: ["prompt engineering", "vector search", "document automation", "API integration"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            AI Developer{" "}
            <span className="text-AAsecondary">@ Better Futures</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Sep 2025 - Sep 2026
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.betterfutures.ai/", "_blank")}
          >
            www.betterfutures.ai
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
