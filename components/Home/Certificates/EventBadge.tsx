import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { CalendarDays, CheckCircle2, ZoomIn } from "lucide-react";

const badge = {
  src: "/badges/hackerrank-orchestrate-december-2026.gif",
  alt: "HackerRank Orchestrate December 2026 participant badge",
  width: 1680,
  height: 1254,
};

export default function EventBadge() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-6 pt-6">
      {/* // ? Sub heading */}
      <div className="flex w-full max-w-5xl items-center gap-4">
        <div className="h-[0.2px] flex-1 bg-gray-600"></div>
        <span className="font-mono text-xs sm:text-sm tracking-widest text-AAsecondary uppercase">Events &amp; Badges</span>
        <div className="h-[0.2px] flex-1 bg-gray-600"></div>
      </div>

      {/* // ? Badge card */}
      <div
        className="group/card relative w-full max-w-5xl overflow-hidden rounded-2xl border border-AAsecondary/20
        bg-gradient-to-br from-AAtertiary via-AAprimary to-AAtertiary
        shadow-[0_25px_70px_-20px_rgba(100,255,218,0.18)] transition-colors duration-500 hover:border-AAsecondary/40"
      >
        {/* soft glows */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-AAsecondary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
          {/* // ? Animated badge */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Zoom HackerRank Orchestrate participant badge"
            className="group relative lg:col-span-3 self-center block overflow-hidden rounded-xl ring-1 ring-white/10
            focus:outline-none focus-visible:ring-2 focus-visible:ring-AAsecondary"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="w-full h-auto select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span
              className="absolute inset-0 flex items-center justify-center bg-AAprimary/0 opacity-0
              group-hover:opacity-100 group-hover:bg-AAprimary/40 transition-all duration-300"
            >
              <span className="flex items-center gap-2 rounded-full border border-AAsecondary bg-AAprimary/90 px-4 py-2 font-mono text-sm text-AAsecondary">
                <ZoomIn className="h-4 w-4" /> Click to zoom
              </span>
            </span>
          </button>

          {/* // ? Details */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-AAsecondary/30 bg-AAprimary/60 px-3 py-1 font-mono text-xs text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60 motion-reduce:hidden"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              </span>
              HackerRank &middot; Participant
            </span>

            <div className="space-y-2">
              <h3 className="font-About italic text-3xl sm:text-4xl text-gray-100">Orchestrate</h3>
              <p className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.25em] lg:tracking-[0.15em] xl:tracking-[0.25em] text-amber-300/90 uppercase">
                <span className="whitespace-nowrap">December Edition &middot; 2026</span>
                <span className="h-px w-10 flex-none bg-amber-300/50"></span>
              </p>
            </div>

            <p className="font-Header text-sm sm:text-base leading-relaxed text-gray-400">
              Registered and taking part in{" "}
              <span className="text-AAsecondary">HackerRank Orchestrate</span>, December 2026 edition &ndash;
              and I&apos;ve got the participant badge to prove it.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs sm:text-sm">
              <span className="inline-flex items-center gap-2 text-gray-200">
                <CheckCircle2 className="h-4 w-4 text-green-400" /> I&apos;m attending
              </span>
              <span className="inline-flex items-center gap-2 text-gray-400">
                <CalendarDays className="h-4 w-4 text-AAsecondary" /> Dec 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom, Captions]}
        slides={[{ ...badge, title: "HackerRank Orchestrate — December 2026 participant" }]}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
        carousel={{ finite: true }}
        zoom={{ maxZoomPixelRatio: 2, scrollToZoom: true }}
        styles={{ container: { backgroundColor: "rgba(2, 12, 27, 0.94)" } }}
      />
    </div>
  );
}
