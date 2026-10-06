// TODO(Pushpa): This file previously held David Heckhoff's "Sharkie" project.
// Replace the placeholder image below with a real screenshot from your
// machine vision / deep learning coursework or a labeled image example
// once available.

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Machine Vision & Deep Learning",
  theme: "dark",
  tags: ["python", "matlab"],
  videoBorder: false,
  description:
    "Coursework exploring machine vision and deep learning fundamentals as part of the Automation and Robotics Engineering programme at JAMK.<br/><br/>Covers basic image processing pipelines and simple neural network models for object recognition tasks, building toward applications in automated visual inspection.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Placeholder image - replace with a machine vision project screenshot",
        caption: "TODO: replace with a real machine vision / deep learning screenshot",
      },
    },
    {
      type: "list",
      props: {
        title: "What it covers",
        items: [
          "Basic image acquisition and preprocessing for vision pipelines",
          "Simple deep learning models applied to object recognition",
          "AI fundamentals as a foundation for automated visual inspection systems",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Tools",
        text: "Python, MATLAB, basic deep learning frameworks",
      },
    },
  ],
} as const satisfies ProjectContent;
