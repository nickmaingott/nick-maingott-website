import React from "react";

import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Dataiku() {
  const tasks = [
    {
      text: "Built Dataiku Answers, the enterprise RAG assistant — ingestion and embedding pipelines, vector retrieval over Pinecone, prompt construction and grounded generation, with per-user access control applied to every answer.",
      keywords: ["Dataiku Answers", "RAG assistant", "Pinecone", "access control"],
    },
    {
      text: "Extended LLM Mesh, the multi-provider LLM gateway, to route a single API across OpenAI, Anthropic, AWS Bedrock, Azure, Google Vertex, Databricks, Mistral and NVIDIA, with token streaming, function calling and multimodal support.",
      keywords: ["LLM Mesh", "LLM gateway", "token streaming", "function calling", "multimodal"],
    },
    {
      text: "Delivered the tool-using GenAI agent framework — dynamic tool calling, corrective RAG, Python-defined logic and reusable plugins — plus the LLM Registry for model qualification, versioning, cost control and audit.",
      keywords: ["GenAI agent framework", "corrective RAG", "LLM Registry", "cost control"],
    },
    {
      text: "Built React/TypeScript interfaces for agent authoring and conversation review, and established the evaluation and observability that turned model quality into a measurable release gate.",
      keywords: ["React/TypeScript", "evaluation", "observability", "release gate"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full-Stack &amp; AI Engineer{" "}
            <span className="text-AAsecondary">@ Dataiku</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Feb 2024 - Jul 2026
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.dataiku.com/", "_blank")}
          >
            www.dataiku.com
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
