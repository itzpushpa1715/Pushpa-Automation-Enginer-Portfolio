// TODO(Pushpa): This file previously held David Heckhoff's "Quibbo" project.
// Replace the placeholder image below with a real architecture diagram,
// SVG sketch, or screenshot from your IT/OT integration content
// (Modbus / OPC UA / AWS / historian) once you have a final asset.

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "IT/OT Integration Architecture",
  theme: "light",
  tags: ["scada"],
  videoBorder: true,
  description:
    "A conceptual architecture connecting shop-floor control systems to enterprise IT, covering Modbus TCP and OPC UA on the OT side and cloud (AWS) and historian systems on the IT side.<br/><br/>Developed as part of technical content explaining how factory data moves securely from PLCs to dashboards and historians, with attention to factory safety standards.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Placeholder image - replace with IT/OT architecture diagram",
        caption: "TODO: replace with an IT/OT integration diagram or sketch",
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
