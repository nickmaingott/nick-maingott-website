import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Freelancer() {
  const tasks = [
    {
      text: "Delivered end-to-end web applications and backend services for international clients.",
      keywords: ["end-to-end web applications", "backend services", "international clients"],
    },
    {
      text: "Owned each engagement solo, from requirements and database schema through build and deployment.",
      keywords: ["requirements", "database schema", "deployment"],
    },
    {
      text: "Handled client handover and production monitoring after launch.",
      keywords: ["handover", "production monitoring"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Freelance Software Engineer{" "}
            <span className="text-AAsecondary">@ Freelancer.com</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Mar 2020 - Sept 2020
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.freelancer.com/", "_blank")}
          >
            www.freelancer.com
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
