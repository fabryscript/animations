"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SpotifyUI from "@/components/dsb/ui/spotify";
import useMeasure from "react-use-measure";

export default function DSB() {
  const [input, setInput] = useState("");
  const [state, setState] = useState<"collapsed" | "expanded">("collapsed");
  const [ref, { height }] = useMeasure();

  const handleSearch = () => {
    setState((p) => (p === "expanded" ? "collapsed" : "expanded"));
  };

  useEffect(() => {
    if (state === "expanded") {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setState("collapsed");
      });
    } else {
      window.removeEventListener("keydown", () => {});
    }
  }, [state]);

  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        initial={{ borderRadius: 32, width: "364px" }}
        animate={{ height }}
        className="flex flex-col overflow-hidden bg-neutral-100"
      >
        <div
          ref={ref}
          className="flex flex-col items-center justify-between gap-4 px-6 py-3"
        >
          <div className="flex w-full items-center justify-between gap-12">
            <div className="flex w-[220px]">
              <AnimatePresence mode="wait" initial={false}>
                {state === "collapsed" ? (
                  <motion.input
                    key={"input"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    value={input}
                    onChange={(e) => setInput(e.target.value.trim())}
                    placeholder="Can I get you something?"
                    className="w-full bg-neutral-100 placeholder:text-neutral-300 focus:outline-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                ) : (
                  <motion.span
                    key={"result"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="text-sm text-neutral-300"
                  >
                    From Spotify
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-neutral-200 px-2 py-1"
              onClick={handleSearch}
            >
              <small className="font-medium text-neutral-400">
                {state === "expanded" ? "esc" : "enter"}
              </small>
            </button>
          </div>
          {state === "expanded" && <SpotifyUI />}
        </div>
      </motion.div>
    </div>
  );
}
