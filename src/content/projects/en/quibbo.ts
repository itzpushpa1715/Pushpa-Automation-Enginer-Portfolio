// TODO(Pushpa): This file previously held David Heckhoff's "Quibbo" project.
// Replace the placeholder image below with a real architecture diagram,
// SVG sketch, or screenshot from your IT/OT integration content
// (Modbus / OPC UA / AWS / historian) once you have a final asset.

import quibbo4 from "../../../assets/images/projects/showcase/it-ot-architecture.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "IT/OT Integration Architecture",
  theme: "light",
  tags: ["scada"],
  videoBorder: true,
  description:
    "A conceptual architecture connecting shop-floor control systems to enterprise IT, covering Modbus TCP and OPC UA on the OT side and cloud (AWS) and historian systems on the IT side.<br/><br/>Developed as part of technical content explaining how factory data moves securely from PLCs to dashboards and historians, with attention to factory safety standards.",
  caseStudy: {
    category: "IT/OT Integration",
    status: "concept",
    overview:
      "A conceptual data path from shop-floor devices and PLCs through OT communication layers to enterprise dashboards, cloud services and historians.",
    problem:
      "Production data sits across control and information systems, so the architecture needs clear protocol boundaries and a traceable route to reporting and long-term storage.",
    solution:
      "Mapped Modbus TCP and OPC UA communication on the OT side and connected the data flow to AWS and historian systems on the IT side.",
    process:
      "Outlined the path from field devices and PLCs to supervisory and enterprise systems, noting the role of each protocol and factory safety considerations.",
    results:
      "Produced a conceptual integration architecture that explains how factory data can flow from PLCs to dashboards and historians.",
    technologies: ["Modbus TCP", "OPC UA", "Cloud", "Historians"],
    tools: ["Modbus TCP", "OPC UA", "AWS", "Historian systems"],
  },
  heroImage: {
    src: quibbo4,
    alt: "Illustrative IT/OT architecture from field sensors to historian and cloud",
    caption: "Illustrative Modbus TCP and OPC UA data path",
  },
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "Illustrative IT/OT architecture from field sensors to historian and cloud",
        caption: "Illustrative Modbus TCP and OPC UA data path",
      },
    },
    {
      type: "list",
      props: {
        title: "Topics covered",
        items: [
          "Modbus TCP communication between field devices and PLCs",
          "OPC UA as the bridge protocol between OT systems and IT infrastructure",
          "Cloud integration patterns for sending production data to AWS",
          "Historian systems for long-term storage and trend analysis of process data",
          "Factory safety standards relevant to networked control systems",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Tools",
        text: "Modbus TCP, OPC UA, AWS, Historian systems",
      },
    },
  ],
} as const satisfies ProjectContent;
