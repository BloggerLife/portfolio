import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cakes from "@/public/cakes.png";
import guest from "@/public/guest.png";
import blog from "@/public/blog.png";

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
    title: "Graduated",
    location: "TelOne, Harare",
    description:
      "I graduated after 3 years of studying. I immediately started doing projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "UI/UX & Graphics design",
    location: "Harare, ZW",
    description:
      "I started doing freelance graphics design, I focused much on creating content for digital marketing. I also upskilled to the UI/UX design.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Harare, ZW",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CakesByAmina",
    description:
      "An Online Cake Store (Fullstack), web application build with Javascript with the help of Nextjs ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: cakes,
  },
  {
    title: "Guest House Assist",
    description:
      "Guest House Assist is a fullstack accommodation booking website, fully responsive, built with Javascript and Nextjs.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: guest,
  },
  {
    title: "WesayBlog",
    description:
      "The site can accommodate many different users and all the users can have different roles and posts, with the help of authentication features.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Framer"],
    imageUrl: blog,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Graphics Design",
  "UI/UX Design",
  "SEO",
  "Analytics",
  "Framer Motion",
] as const;
