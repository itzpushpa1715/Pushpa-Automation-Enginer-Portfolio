// TODO(Pushpa): This file previously held David Heckhoff's "Pokédex" project.
// Replace the placeholder image below with a real screenshot of a Nexara
// Fusion LinkedIn post or one of your SVG sketch illustrations once ready.

import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Nexara Fusion - Technical Content",
  theme: "light",
  tags: ["plc", "scada"],
  live: "https://www.linkedin.com/company/nexara-fusion",
  videoBorder: false,
  description:
    "Nexara Fusion is a technology content brand covering AI, electrical engineering, PLC programming, industrial automation, robotics, embedded systems, IoT, and Industry 4.0 for a technically fluent LinkedIn audience.<br/><br/>Content includes brand introductions, PLC and ladder logic explainers, and IT/OT architecture posts, each paired with original sketch-style SVG illustrations.",
  heroImage: {
    src: pokedex3,
    alt: "Nexara Fusion banner",
    caption: "Nexara Fusion technical content and LinkedIn visual",
  },
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Nexara Fusion banner",
        caption: "Nexara Fusion technical content and LinkedIn visual",
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
