import { projectIds } from "./projects/index";

import type { TagVariant } from "../components/tagVariants";
import type { ProjectComponent } from "../features/projects/types";

export type ProjectId = (typeof projectIds)[number];

export interface ProjectContent {
  title: string;
  theme: "light" | "dark";
  tags: TagVariant[];
  description?: string;
  caseStudy?: {
    category: string;
    period?: string;
    status: "completed" | "in-progress" | "coursework" | "concept";
    overview: string;
    problem?: string;
    solution: string;
    process?: string;
    results?: string;
    technologies: string[];
    tools: string[];
  };
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  videoBorder?: boolean;
  live?: string;
  source?: string;
  components?: ProjectComponent[];
}

export interface SkillContent {
  name: string;
  bullets: string[];
}

export interface ProjectPreview {
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
}
