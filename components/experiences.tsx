"use client";

import { experiencesData } from "@/lib/data";
import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Experience from "./experience";

const Experiences = () => {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <Experience item={item} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experiences;
