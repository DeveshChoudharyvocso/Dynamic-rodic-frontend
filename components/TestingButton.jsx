"use client";
import React from "react";

export default function TestingButton({ updatingData }) {
  return (
    <div>
      <div className="">
        <button
          className="text-black border border-orange-400 rounded-2xl py-1 px-2"
          onClick={() => updatingData(1)}
        >
          Random Button
        </button>
      </div>
    </div>
  );
}
