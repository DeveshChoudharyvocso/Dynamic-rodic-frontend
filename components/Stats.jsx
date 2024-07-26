"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import img3 from "../public/images/offices-nationwide-icon.svg";
import img2 from "../public/images/strong-team-icon.svg";
import img4 from "../public/images/successful-projects-icon.svg";

function Stats({ data }) {
  const duration = 6;
  const [visibleCounters, setVisibleCounters] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setVisibleCounters((prev) => ({
              ...prev,
              [index]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    countersRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      countersRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const order = [3, 2, 0, 1]; // Array defining the order of the components

  const statsComponents = [
    {
      id: 0,
      statsNumber: data?.data?.attributes?.Stats[0]?.statsNumber,
      symbol: data?.data?.attributes?.Stats[0]?.symbol,
      name: data?.data?.attributes?.Stats[0]?.name,
      icon: img2?.src,
      className: "navyblue-box",
      delay: "0.3s",
    },
    {
      id: 1,
      statsNumber: data?.data?.attributes?.Stats[1]?.statsNumber,
      symbol: data?.data?.attributes?.Stats[1]?.symbol,
      name: data?.data?.attributes?.Stats[1]?.name,
      icon: img3?.src,
      className: "orange-box",
      delay: "0.4s",
    },
    {
      id: 2,
      statsNumber: data?.data?.attributes?.Stats[2]?.statsNumber,
      symbol: data?.data?.attributes?.Stats[2]?.symbol,
      name: data?.data?.attributes?.Stats[2]?.name,
      icon: img4?.src,
      className: "skyblue-box",
      delay: "0.2s",
    },
    {
      id: 3,
      statsNumber: data?.data?.attributes?.Stats[3]?.statsNumber,
      symbol: data?.data?.attributes?.Stats[3]?.symbol,
      name: data?.data?.attributes?.Stats[3]?.name,
      icon: "images/glorious-years-icon.svg",
      className: "white-box",
      delay: "0.1s",
    },
  ];

  return (
    <section className="counter-stats-main-block padding-60">
      <div className="container">
        <div className="counter-stats-main">
          {order.map((index) => {
            const { id, statsNumber, symbol, name, icon, className, delay } =
              statsComponents[index];
            return (
              <div
                key={id}
                className={`counter-box ${className} wow fadeInUp`}
                data-wow-duration="1s"
                data-wow-delay={delay}
                ref={(el) => (countersRef.current[id] = el)}
                data-index={id}
              >
                <div className="counterbox-left">
                  <div className="counter-infotext">
                    {visibleCounters[id] && (
                      <CountUp
                        duration={duration}
                        end={statsNumber}
                        className="counter"
                      />
                    )}
                    <span>{symbol}</span>
                  </div>
                  <div className="counterbox-info">{name}</div>
                </div>
                <div className="counterbox-right-icon">
                  <Image
                    src={icon}
                    alt={name}
                    className="img-fluid"
                    height={70}
                    width={70}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
