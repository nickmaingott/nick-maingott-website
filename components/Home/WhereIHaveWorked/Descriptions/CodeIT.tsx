import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function CodeIT() {
  const tasks = [
    {
      text: "Built customer-facing interfaces, backend services, business logic and secure data flows for high-traffic enterprise e-commerce and telecom platforms.",
      keywords: ["customer-facing interfaces", "secure data flows", "e-commerce and telecom platforms"],
    },
    {
      text: "On MTEL, developed frontend functionality for an e-commerce and B2B portal covering telecom product and service purchases, bill payments and prepaid credit management.",
      keywords: ["MTEL", "B2B portal", "bill payments"],
    },
    {
      text: "Delivered responsive UI, user workflows and reliable integration with backend services across the MTEL portal.",
      keywords: ["responsive UI", "user workflows"],
    },
    {
      text: "On Fonly, a mobile-phone e-commerce platform, worked as backend developer on integrations with SAP, Oracle and DEX through the client's Enterprise Service Bus (ESB), supporting security and dependable data exchange.",
      keywords: ["Fonly", "SAP", "Oracle", "Enterprise Service Bus"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend &amp; Backend Developer{" "}
            <span className="text-AAsecondary">@ CodeIT</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            May 2022 - Jun 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.codeit.rs/", "_blank")}
          >
            www.codeit.rs
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
