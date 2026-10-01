import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Webgate() {
  const tasks = [
    {
      text: "Built modern, responsive websites for technology and business clients, translating UI/UX requirements into production-ready interfaces.",
      keywords: ["responsive websites", "UI/UX requirements", "production-ready interfaces"],
    },
    {
      text: "Delivered responsive web experiences for SuperScale, a technology scale-up, with clean UI implementation, reusable frontend components and cross-browser compatibility.",
      keywords: ["SuperScale", "reusable frontend components", "cross-browser compatibility"],
    },
    {
      text: "Designed and developed Vacuumgroup.com, an interactive corporate site featuring a dynamic timeline and job-position filtering across multiple holding companies.",
      keywords: ["Vacuumgroup", "dynamic timeline", "job-position filtering"],
    },
    {
      text: "Worked with designers and developers to ship production-ready sites and refined existing frontend functionality as client requirements evolved.",
      keywords: ["designers and developers", "frontend functionality"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer{" "}
            <span className="text-AAsecondary">@ Webgate</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jun 2021 - Apr 2022
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://webgate.digital/", "_blank")}
          >
            webgate.digital
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
