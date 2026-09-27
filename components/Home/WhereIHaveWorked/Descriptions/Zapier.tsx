import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Zapier() {
  const tasks = [
    {
      text: "Worked on the core Zap workflow execution engine across 9,000+ integrations — event and trigger processing, asynchronous job queues, idempotent retries, rate-limit management and fault tolerance under sustained load.",
      keywords: ["workflow execution engine", "9,000", "asynchronous job queues", "idempotent retries", "fault tolerance"],
    },
    {
      text: "Extended the Zap Editor's Drafts and versioning model, which lets users edit a workflow without disabling the running production version, through immutable revisions, concurrent editing, schema validation and publish/rollback.",
      keywords: ["Zap Editor", "Drafts and versioning", "immutable revisions", "publish/rollback"],
    },
    {
      text: "Delivered the 2023 enterprise control plane (Version Rollback, Audit Logs, RBAC, Super Admin) for customers running mission-critical automations.",
      keywords: ["enterprise control plane", "Audit Logs", "RBAC", "mission-critical"],
    },
    {
      text: "Contributed to the AI Zap Builder, translating natural language into validated workflow schemas.",
      keywords: ["AI Zap Builder", "natural language", "validated workflow schemas"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer — Platform &amp; Automation{" "}
            <span className="text-AAsecondary">@ Zapier</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Nov 2022 - Oct 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://zapier.com/", "_blank")}
          >
            zapier.com
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
