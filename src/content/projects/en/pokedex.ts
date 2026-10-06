// TODO(Pushpa): This file previously held David Heckhoff's "Pokédex" project.
// Replace the placeholder image below with a real screenshot of a Nexara
// Fusion LinkedIn post or one of your SVG sketch illustrations once ready.

import pokedex3 from "../../../assets/images/projects/showcase/nexara-content.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Nexara Fusion - Technical Content",
  theme: "light",
  tags: ["plc", "scada"],
  live: "https://www.linkedin.com/company/nexara-fusion",
  videoBorder: false,
  description:
    "Nexara Fusion is a technology content brand covering AI, electrical engineering, PLC programming, industrial automation, robotics, embedded systems, IoT, and Industry 4.0 for a technically fluent LinkedIn audience.<br/><br/>Content includes brand introductions, PLC and ladder logic explainers, and IT/OT architecture posts, each paired with original sketch-style SVG illustrations.",
  caseStudy: {
    category: "Technical Content",
    status: "in-progress",
    overview:
      "A technical content project for Nexara Fusion, translating automation and engineering topics into concise LinkedIn posts with original visual material.",
    problem:
      "Complex automation topics need clear explanations that remain useful to a technically fluent audience while fitting a short-form content format.",
    solution:
      "Developed content around PLC and ladder logic, IT/OT architecture, robotics and related engineering topics, pairing posts with sketch-style illustrations.",
    process:
      "Select a technical topic, distil the key idea into an explanatory post, then create a supporting visual for the LinkedIn format.",
    results:
      "Created brand introductions, PLC explainers and IT/OT architecture posts for Nexara Fusion’s LinkedIn presence.",
    technologies: ["PLC", "SCADA", "IT/OT", "Robotics"],
    tools: ["LinkedIn", "Original sketch-style SVG illustrations"],
  },
  heroImage: {
    src: pokedex3,
    alt: "Illustrative board of Nexara Fusion PLC and IT/OT technical explainers",
    caption: "Illustrative technical-content concepts, not published post screenshots",
  },
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Illustrative board of Nexara Fusion PLC and IT/OT technical explainers",
        caption: "Illustrative technical-content concepts, not published post screenshots",
      },
    },
    {
      type: "list",
      props: {
        title: "What it covers",
        items: [
          "PLC programming and ladder logic concepts explained for a technical audience",
          "IT/OT architecture topics: Modbus, OPC UA, AWS integration, factory safety standards",
          "Industrial automation consulting themes and project showcases",
          "Original sketch-style SVG illustrations paired with each post",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Platform",
        text: "LinkedIn",
      },
    },
  ],
} as const satisfies ProjectContent;
