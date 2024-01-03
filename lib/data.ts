import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    position: "Junior Software Engineer",
    company: "Denso Techno Philippines, Inc.",
    description:
      "I graduated after 4 years of studying BSIT. I immediately found a job as a Junior Software Engineer. I've worked with Desktop Applications(VB.Net), Internal web applications(React), Automation Tools(VBA, UiPath) and CI/CD(Jenkins)",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    position: "Application Developer",
    company: "H2 Software Consulting Services",
    description:
      "I worked as a application developer on this company for a year. I've worked with Microservices Architecture(.NET Framework 4.5), creating RESTful API's(.NET Core 6) and developing internal web applications(React(Next.js), ASP.NET MVC).",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    position: "Full-Stack Developer",
    company: "Kation Technologies Inc.",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, C#, .NET Core for Azure Cloud Development and Microsoft Dynamics 365 Integrations. I'm open to full-time opportunities.",
    icon: React.createElement(SiMicrosoftazure),
    date: "2022 - present",
  },
  {
    position: "Full-Stack Developer",
    company: "Tec Plus",
    description:
      "I'm also a full-stack developer working as a freelancer. My stack includes React, Next.js, Remix, TypeScript, Tailwind and Framer Motion. I'm open to part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

// Sample data, not my actual projects
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Azure",
  "C#",
  "VB.NET",
  ".NET Core 6",
  ".NET Framework 4.5 & above",
  "ASP.NET MVC",
  "MS SQL",
  "PL-SQL",
  "Jenkins",
  "VBA",
  "UiPath",
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion"
] as const;