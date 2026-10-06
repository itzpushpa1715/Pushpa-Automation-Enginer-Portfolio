// TODO(Pushpa): This file previously held David Heckhoff's "StreakOn" project.
// Replace the placeholder thumbnail/media imports below with real photos or
// screen recordings of the ABB RobotStudio pick-and-place simulation
// (e.g. station layout, Smart Component setup, RAPID code editor, simulation
// run) once you have them. Until then this project renders with text-only
// components so nothing breaks.

import streakon0 from "../../../assets/images/projects/showcase/abb-cell.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "ABB Robotic Pick-and-Place Cell",
  theme: "dark",
  tags: ["rapid", "autocad"],
  videoBorder: false,
  description:
    "A simulated robotic pick-and-place application built in ABB RobotStudio, programmed in RAPID.<br/><br/>The cell uses Smart Components to model grippers and sensors, with MoveL and MoveJ motion instructions sequencing pick, transfer, and place operations between stations.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Havainnekuva ABB:n robottisolusta",
        caption: "Projektikuvaukseen perustuva havainnekuva, ei RobotStudio-kuvakaappaus",
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
