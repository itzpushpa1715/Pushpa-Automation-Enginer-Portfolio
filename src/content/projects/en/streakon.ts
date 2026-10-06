// TODO(Pushpa): This file previously held David Heckhoff's "StreakOn" project.
// Replace the placeholder thumbnail/media imports below with real photos or
// screen recordings of the ABB RobotStudio pick-and-place simulation
// (e.g. station layout, Smart Component setup, RAPID code editor, simulation
// run) once you have them. Until then this project renders with text-only
// components so nothing breaks.

import streakon1 from "../../../assets/images/projects/showcase/abb-cell.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "ABB Robotic Pick-and-Place Cell",
  theme: "dark",
  tags: ["rapid", "autocad"],
  videoBorder: false,
  description:
    "A simulated robotic pick-and-place application built in ABB RobotStudio, programmed in RAPID.<br/><br/>The cell uses Smart Components to model grippers and sensors, with MoveL and MoveJ motion instructions sequencing pick, transfer, and place operations between stations.",
  caseStudy: {
    category: "Robotics",
    period: "Jan 2025 — May 2025",
    status: "completed",
    overview:
      "A simulated robot cell that transfers parts from a conveyor to a placement station, with coordinated robot motion and station I/O.",
    problem:
      "The pick-and-place cycle needs coordinated part handling, robot motion and signal states to run predictably from feed to placement.",
    solution:
      "Configured the cell in ABB RobotStudio, modelled gripper and sensor behaviour with Smart Components, and programmed the sequence in RAPID using MoveL and MoveJ instructions.",
    process:
      "Set up the station and targets, modelled the handling sequence, mapped the required I/O states, then reviewed the motion and recovery steps in simulation.",
    results:
      "Completed a repeatable simulated pick, transfer and place sequence with sensor feedback and basic error-recovery logic.",
    technologies: ["RAPID", "Robotics", "PLC I/O"],
    tools: ["ABB RobotStudio", "RAPID", "Smart Components"],
  },
  heroImage: {
    src: streakon1,
    alt: "Illustrative diagram of the ABB robotic pick-and-place cell",
    caption: "Illustrative cell layout based on the project description",
  },
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Illustrative diagram of the ABB robotic pick-and-place cell",
        caption: "Illustrative cell layout based on the project description",
      },
    },
    {
      type: "list",
      props: {
        title: "What it does",
        items: [
          "Simulates a full pick-and-place cycle between a feed station and a placement station",
          "Uses Smart Components to model the gripper, sensors, and part flow logic",
          "Sequences motion with MoveL (linear) and MoveJ (joint) RAPID instructions for smooth, collision-free paths",
          "Demonstrates target/frame setup, I/O signal handling, and basic error recovery logic",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Tools",
        text: "ABB RobotStudio, RAPID programming language, Smart Components",
      },
    },
  ],
} as const satisfies ProjectContent;
