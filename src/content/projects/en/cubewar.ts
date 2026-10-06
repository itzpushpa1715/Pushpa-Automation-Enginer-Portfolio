// TODO(Pushpa): This file previously held David Heckhoff's "CubeWar" project.
// Replace the placeholder image below with a real photo of the pneumatic
// cylinder setup, a screenshot of the TIA Portal ladder logic, or a short
// video of the cylinder cycling, once available.

import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "PLC-Controlled Pneumatic Cylinder",
  theme: "dark",
  tags: ["plc", "tia-portal", "ladder-logic"],
  videoBorder: false,
  description:
    "A double-acting pneumatic cylinder controlled by a PLC using ladder logic, programmed in Siemens TIA Portal.<br/><br/>Set/Reset coils drive the solenoid valve to extend and retract the cylinder, with limit switches providing position feedback for safe, repeatable cycling.",
  heroImage: {
    src: cubewar4,
    alt: "PLC-controlled pneumatic cylinder banner",
    caption: "PLC pneumatic cylinder control visualization",
  },
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar4,
        alt: "PLC-controlled pneumatic cylinder banner",
        caption: "PLC pneumatic cylinder control visualization",
      },
    },
    {
      type: "list",
      props: {
        title: "What it does",
        items: [
          "Controls extend/retract motion of a double-acting cylinder via a 5/2-way solenoid valve",
          "Uses S/R (Set/Reset) coils in ladder logic to latch the cylinder state safely",
          "Reads limit switch feedback to confirm cylinder position before allowing the next cycle",
          "Built and tested in Siemens TIA Portal with a simulated I/O table",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Tools",
        text: "Siemens TIA Portal, Ladder Logic (LAD), Pneumatic control hardware",
      },
    },
  ],
} as const satisfies ProjectContent;
