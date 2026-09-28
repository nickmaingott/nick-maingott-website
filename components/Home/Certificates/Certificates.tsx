import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { BadgeCheck, ChevronLeft, ChevronRight, ExternalLink, ZoomIn } from "lucide-react";

import ArrowIcon from "../../Icons/ArrowIcon";

const certificates = [
  {
    title: "Software Engineer",
    src: "/certificates/hackerrank_swe.png",
    verifyUrl: "https://www.hackerrank.com/certificates/ebf24d2faecd",
    width: 1048,
    height: 802,
  },
  {
    title: "Frontend Developer (React)",
    src: "/certificates/hackerrank_frontend_react.png",
    verifyUrl: "https://www.hackerrank.com/certificates/887fe940dd1b",
    width: 1052,
    height: 804,
  },
  {
    title: "SQL (Advanced)",
    src: "/certificates/hackerrank_sql.png",
    verifyUrl: "https://www.hackerrank.com/certificates/437e6c5b7444",
    width: 1106,
    height: 841,
  },
  {
    title: "Go (Intermediate)",
    src: "/certificates/hackerrank_golang.png",
    verifyUrl: "https://www.hackerrank.com/certificates/77bc5ab6f992",
    width: 1103,
    height: 840,
  },
  {
    title: "JavaScript (Intermediate)",
    src: "/certificates/hackerrank_javascript.png",
    verifyUrl: "https://www.hackerrank.com/certificates/f43c6fd7ef3f",
    width: 1105,
    height: 842,
  },
  {
    title: "Node.js (Intermediate)",
    src: "/certificates/hackerrank_nodejs.png",
    verifyUrl: "https://www.hackerrank.com/certificates/f004f89184eb",
    width: 1104,
    height: 843,
  },
  {
    title: "Rest API (Intermediate)",
    src: "/certificates/hackerrank_restapi.png",
    verifyUrl: "https://www.hackerrank.com/certificates/2bc16ebcd262",
    width: 1105,
    height: 843,
  },
  {
    title: "Java (Basic)",
    src: "/certificates/hackerrank_java.png",
    verifyUrl: "https://www.hackerrank.com/certificates/3eb705a0dab7",
    width: 1100,
    height: 840,
  },
  {
    title: "Python (Basic)",
    src: "/certificates/hackerrank_python.png",
    verifyUrl: "https://www.hackerrank.com/certificates/d2c90b92066b",
    width: 1049,
    height: 801,
  },
];

export default function Certificates() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    reducedMotion ? [] : [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // pause autoplay while the zoom modal is open
  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    if (lightboxIndex >= 0) autoplay.stop();
    else autoplay.play();
  }, [emblaApi, lightboxIndex]);

  const activeCert = selectedIndex;

  const onSlideClick = (index: number) => {
    if (!emblaApi) return;
    if (index === selectedIndex) setLightboxIndex(index);
    else emblaApi.scrollTo(index);
  };

  return (
    <div
      id="CertificatesSection"
      data-aos="fade-up"
      className="flex flex-col space-y-10 w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 px-4 pb-32"
    >
      {/* // ? Title */}
      <div className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl opacity-85 pl-1">
            Certificates
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2 ml-2"></div>
      </div>

      {/* // ? Carousel */}
      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="HackerRank certificates"
      >
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {certificates.map((cert, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={index}
                  className="flex-[0_0_88%] sm:flex-[0_0_72%] lg:flex-[0_0_58%] xl:flex-[0_0_50%] min-w-0 px-2 sm:px-4"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${certificates.length}`}
                >
                  <div
                    className={`transition-all duration-500 ease-out ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.88] opacity-40"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onSlideClick(index)}
                      aria-label={isActive ? `Zoom ${cert.title} certificate` : `Show ${cert.title} certificate`}
                      className={`group relative block w-full overflow-hidden rounded-xl border bg-AAtertiary p-2 sm:p-3
                        transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-AAsecondary
                        ${
                          isActive
                            ? "border-AAsecondary/40 shadow-[0_20px_60px_-15px_rgba(100,255,218,0.25)]"
                            : "border-gray-700/40"
                        }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cert.src}
                        alt={`HackerRank ${cert.title} certificate`}
                        width={cert.width}
                        height={cert.height}
                        loading="lazy"
                        draggable={false}
                        className="w-full h-auto rounded-lg select-none"
                      />
                      {isActive && (
                        <span
                          className="absolute inset-2 sm:inset-3 flex items-center justify-center rounded-lg bg-AAprimary/0
                          opacity-0 group-hover:opacity-100 group-hover:bg-AAprimary/50 transition-all duration-300"
                        >
                          <span className="flex items-center gap-2 rounded-full border border-AAsecondary bg-AAprimary/90 px-4 py-2 font-mono text-sm text-AAsecondary">
                            <ZoomIn className="h-4 w-4" /> Click to zoom
                          </span>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* // ? Prev / Next */}
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous certificate"
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full
          border border-AAsecondary/50 bg-AAprimary/80 text-AAsecondary backdrop-blur-sm
          hover:bg-ResumeButtonHover hover:border-AAsecondary transition-colors duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next certificate"
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full
          border border-AAsecondary/50 bg-AAprimary/80 text-AAsecondary backdrop-blur-sm
          hover:bg-ResumeButtonHover hover:border-AAsecondary transition-colors duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* // ? Active certificate details */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex flex-col items-center space-y-1">
          <span className="flex items-center gap-2 text-gray-200 font-bold text-lg sm:text-xl">
            <BadgeCheck className="h-5 w-5 text-AAsecondary flex-none" />
            {certificates[activeCert].title}
          </span>
          <span className="font-mono text-xs sm:text-sm text-gray-400">
            HackerRank &middot;{" "}
            <a
              href={certificates[activeCert].verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-AAsecondary hover:underline"
            >
              Verify credential <ExternalLink className="h-3 w-3" />
            </a>
          </span>
        </div>

        {/* // ? Dots */}
        <div className="flex items-center gap-2">
          {certificates.map((cert, i) => (
            <button
              key={cert.src}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Show ${cert.title} certificate`}
              aria-current={i === activeCert}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-AAsecondary focus-visible:ring-offset-2 focus-visible:ring-offset-AAprimary ${
                i === activeCert ? "w-8 bg-AAsecondary" : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        plugins={[Zoom, Captions, Counter]}
        slides={certificates.map((cert) => ({
          src: cert.src,
          alt: `HackerRank ${cert.title} certificate`,
          width: cert.width,
          height: cert.height,
          title: `HackerRank — ${cert.title}`,
        }))}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        counter={{ container: { style: { top: "unset", bottom: 0, left: "50%", transform: "translateX(-50%)" } } }}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        styles={{ container: { backgroundColor: "rgba(2, 12, 27, 0.94)" } }}
      />
    </div>
  );
}
