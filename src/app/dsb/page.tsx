"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { handleSearch as _handleSearch } from "@/components/dsb/utils";
import classNames from "classnames";

export default function DSB() {
  const [input, setInput] = useState("");
  const [state, setState] = useState<"collapsed" | "expanded">("collapsed");

  const handleSearch = () => {
    setState((p) => (p === "expanded" ? "collapsed" : "expanded"));
    _handleSearch(input);
  };

  useEffect(() => {
    if (state === "expanded") {
      window.addEventListener("keydown", (e) => {
        console.log("ddd");
        if (e.key === "Escape") setState("collapsed");
      });
    } else {
      window.removeEventListener("keydown", () => {});
    }
  }, [state]);

  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, width: "20px" }}
        animate={{ opacity: 1, width: "370px", borderRadius: 32 }}
        transition={{ type: "spring", duration: 1 }}
        className="flex w-0 flex-col items-center justify-between gap-4 bg-neutral-100 px-6 py-3"
      >
        <motion.div
          className={classNames(
            "flex w-full items-center justify-between gap-12",
          )}
        >
          <AnimatePresence mode="wait">
            {state === "collapsed" ? (
              <motion.input
                layoutId="label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
                value={input}
                onChange={(e) => setInput(e.target.value.trim())}
                placeholder={"Can I get you something?"}
                className="w-[220px] bg-neutral-100 placeholder:text-neutral-300 focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            ) : (
              <motion.span
                layoutId="label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-neutral-300"
              >
                From Spotify
              </motion.span>
            )}
          </AnimatePresence>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            type="button"
            className="flex items-center justify-center rounded-lg bg-neutral-200 px-2 py-1"
            onClick={handleSearch}
          >
            <small className="font-medium text-neutral-400">
              {state === "expanded" ? "esc" : "enter"}
            </small>
          </motion.button>
        </motion.div>
        {state === "expanded" && (
          <motion.div className="h-[360px] w-full">...</motion.div>
        )}
      </motion.div>
    </div>
  );
}
