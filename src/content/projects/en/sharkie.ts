// TODO(Pushpa): This file previously held David Heckhoff's "Sharkie" project.
// Replace the placeholder image below with a real screenshot from your
// machine vision / deep learning coursework or a labeled image example
// once available.

import sharkie4 from "../../../assets/images/projects/showcase/machine-vision.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Machine Vision & Deep Learning",
  theme: "dark",
  tags: ["python", "matlab"],
  videoBorder: false,
  description:
    "Coursework exploring machine vision and deep learning fundamentals as part of the Automation and Robotics Engineering programme at JAMK.<br/><br/>Covers basic image processing pipelines and simple neural network models for object recognition tasks, building toward applications in automated visual inspection.",
  caseStudy: {
    category: "Machine Vision",
    status: "coursework",
    overview:
      "Coursework exploring image-processing pipelines and introductory neural-network models for object recognition.",
    problem:
      "Visual inspection depends on preparing image data consistently and selecting useful features for recognition.",
    solution:
      "Explored image acquisition and preprocessing alongside simple deep-learning models as a foundation for automated visual inspection.",
    process:
      "Worked through basic image-processing steps and applied introductory neural-network models to object-recognition tasks.",
    results:
      "Built practical familiarity with the stages of a basic vision pipeline and the role of simple models in image recognition.",
    technologies: ["Computer Vision", "Image Processing", "Deep Learning"],
    tools: ["Python", "MATLAB", "Deep-learning frameworks"],
  },
  heroImage: {
    src: sharkie4,
    alt: "Illustrative machine vision pipeline from image capture to inspection",
    caption: "Illustrative computer vision workflow",
  },
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "Illustrative machine vision pipeline from image capture to inspection",
        caption: "Illustrative computer vision workflow",
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
