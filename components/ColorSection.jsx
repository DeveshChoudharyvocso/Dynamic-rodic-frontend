"use client";
import useIntersectionObserver from "@/hooks/useIntersectionOberserver";
import { useEffect } from "react";

const ColorSection = ({ color, id, setActiveSection, children, otherStyle }) => {
  const [sectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      setActiveSection(id);
    }
  }, [isIntersecting, id, setActiveSection]);

  return (
    <div
      ref={sectionRef}
      id={id}
      style={{
        transition: "background-color 0.5s ease",
        backgroundColor: isIntersecting ? color : "white",
        ...otherStyle
      }}
    >
      {children}
    </div>
  );
};

export default ColorSection;
