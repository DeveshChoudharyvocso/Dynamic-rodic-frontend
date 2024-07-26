"use client";
import React from "react";
import CountUp from "react-countup";
const ReactCounter = ({ duration, data }) => {
  return <CountUp duration={duration} className="counter" end={data} />;
};

export default ReactCounter;
