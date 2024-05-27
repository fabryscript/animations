"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        if (e.key === "Escape") setState("collapsed");
      });
    } else {
      window.removeEventListener("keydown", () => {});
    }
  }, [state]);

  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, width: "20px", height: "52px" }}
        animate={{
          opacity: 1,
          width: "370px",
          borderRadius: 32,
          height: state === "expanded" ? "300px" : "52px",
        }}
        transition={{ type: "spring", duration: 1 }}
        className="flex w-0 flex-col items-center justify-between gap-4 bg-neutral-100 px-6 py-3"
      >
        <motion.div
          className={classNames(
            "flex w-full items-center justify-between gap-12",
          )}
        >
          <div className="flex h-6 overflow-hidden">
            <div
              className={classNames(
                "flex flex-col gap-1 transition-transform duration-200",
                {
                  "-translate-y-[26px]": state === "expanded",
                  "translate-y-0": state === "collapsed",
                },
              )}
            >
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
              <motion.span className="text-sm text-neutral-300">
                From Spotify
              </motion.span>
            </div>
          </div>
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
