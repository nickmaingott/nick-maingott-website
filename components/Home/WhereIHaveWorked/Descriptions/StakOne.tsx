import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function StakOne() {
  const tasks = [
    {
      text: "Developed and maintained scalable backend services and REST APIs, designing and optimizing database structures, queries and data workflows.",
      keywords: ["scalable backend services", "REST APIs", "database structures"],
    },
    {
      text: "Implemented authentication, authorization, validation and core business logic, and integrated third-party services and external APIs.",
      keywords: ["authentication", "authorization", "third-party services"],
    },
    {
      text: "Troubleshot production issues and drove measurable improvements to system reliability.",
      keywords: ["production issues", "system reliability"],
    },
    {
      text: "Carried management responsibilities — reviewing code, coordinating development tasks across the team, planning and prioritizing technical work, and communicating project requirements.",
      keywords: ["management", "reviewing code", "coordinating development tasks"],
    },
    {
      text: "Supported software releases end to end through testing, deployment and ongoing maintenance, translating business requirements into technical solutions with management and stakeholders.",
      keywords: ["software releases", "testing", "deployment", "business requirements"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Backend Developer &amp; Management{" "}
            <span className="text-AAsecondary">@ StakOne</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Sept 2020 - Oct 2021
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://stakone.com.au/", "_blank")}
          >
            stakone.com.au
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
