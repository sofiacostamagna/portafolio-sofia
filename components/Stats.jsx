"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of experience" },
  { num: 12, text: "Technologies" },
  { num: 7, text: "Projects completed" },
  { num: 100, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="border-t border-divider mt-12 xl:mt-0 py-10 xl:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <CountUp
                end={item.num}
                duration={4}
                delay={1}
                suffix="+"
                className="font-mono text-4xl xl:text-5xl font-bold text-font-secondary"
              />
              <span className="font-primary text-[13px] text-font-primary leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
