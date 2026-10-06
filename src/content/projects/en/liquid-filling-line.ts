import showcase from "../../../assets/images/projects/showcase/liquid-filling-line.svg";
import type { ProjectContent } from "../../types";

export default {
  title: "Automated Liquid Filling Line",
  theme: "light",
  tags: ["plc", "ladder-logic", "tia-portal"],
  description: "PLC-controlled liquid filling machine with level sensing, safety interlocks and HMI recipe handling.",
  caseStudy: {
    category: "Industrial Automation",
    period: "Jun 2023 — May 2024",
    status: "completed",
    overview: "A production liquid-filling machine built and commissioned for an industrial client. The line handles bottle indexing, volumetric filling, capping interlocks and operator recipe selection through an HMI.",
    problem: "Manual filling produced inconsistent volumes, frequent spillage and no traceability of batch output.",
    solution: "Designed a PLC control scheme with photoelectric bottle detection, timed/volumetric dosing valves, emergency-stop safety circuit and an HMI for recipe and batch counters.",
    process: "Requirement capture on the shop floor, electrical schematic design, panel wiring, PLC program structure with parameterised function blocks, dry testing, commissioning and operator training.",
    results: "Fill accuracy within tolerance across batches, reduced spillage and a repeatable changeover procedure between bottle sizes.",
    technologies: ["PLC", "Ladder Logic", "HMI", "Modbus TCP"],
    tools: ["TIA Portal", "AutoCAD Electrical"],
  },
  heroImage: {
    src: showcase,
    alt: "Illustrative PLC-controlled liquid filling line with bottle detection, dosing and HMI recipe selection",
    caption: "Illustrative line layout based on the published case study, not a project photograph",
  },
  components: [],
} as const satisfies ProjectContent;
