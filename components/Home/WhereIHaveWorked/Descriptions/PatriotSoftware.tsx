import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function PatriotSoftware() {
  const tasks = [
    {
      text: "Built the backend services behind core accounting transactions — the Chart of Accounts and its subaccount hierarchy, transaction import and account mapping.",
      keywords: ["backend services", "Chart of Accounts", "transaction import"],
    },
    {
      text: "Implemented vendor and customer data processing, plus general-ledger and trial-balance functionality.",
      keywords: ["data processing", "general-ledger", "trial-balance"],
    },
    {
      text: "Designed and delivered the accounting migration and import system used to onboard customers from their existing books: CSV ingestion, account mapping, data validation, and bulk import of customers, vendors, contractors and trial balances.",
      keywords: ["migration and import system", "CSV ingestion", "data validation", "bulk import"],
    },
    {
      text: "Wired the import pipeline into automated onboarding workflows.",
      keywords: ["automated onboarding workflows"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Backend Engineer — Accounting Platform{" "}
            <span className="text-AAsecondary">@ Patriot Software</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Oct 2021 - Sept 2022
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.patriotsoftware.com/", "_blank")}
          >
            www.patriotsoftware.com
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
