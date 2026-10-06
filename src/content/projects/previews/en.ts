import abbCell from "../../../assets/images/projects/showcase/abb-cell.svg";
import pneumaticCylinder from "../../../assets/images/projects/showcase/pneumatic-cylinder.svg";
import itOtArchitecture from "../../../assets/images/projects/showcase/it-ot-architecture.svg";
import machineVision from "../../../assets/images/projects/showcase/machine-vision.svg";
import nexaraContent from "../../../assets/images/projects/showcase/nexara-content.svg";
import liquidFillingLine from "../../../assets/images/projects/showcase/liquid-filling-line.svg";
import modbusDataLogger from "../../../assets/images/projects/showcase/modbus-data-logger.svg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ABB Robotic Pick-and-Place Cell",
    slug: "streakon",
    thumbnail: abbCell,
    description: "RAPID-programmed robotics simulation",
  },
  {
    title: "PLC-Controlled Pneumatic Cylinder",
    slug: "cubewar",
    thumbnail: pneumaticCylinder,
    description: "Ladder logic in Siemens TIA Portal",
  },
  {
    title: "IT/OT Integration Architecture",
    slug: "quibbo",
    thumbnail: itOtArchitecture,
    description: "Modbus, OPC UA, AWS, and historians",
  },
  {
    title: "Machine Vision & Deep Learning",
    slug: "sharkie",
    thumbnail: machineVision,
    description: "Vision pipelines and basic neural models",
  },
  {
    title: "Nexara Fusion - Technical Content",
    slug: "pokedex",
    thumbnail: nexaraContent,
    description: "PLC & IT/OT content for LinkedIn",
  },
  {
    title: "Automated Liquid Filling Line",
    slug: "liquid-filling-line",
    thumbnail: liquidFillingLine,
    description: "PLC-controlled filling, interlocks and HMI recipes",
  },
  {
    title: "Modbus TCP Machine Data Logger",
    slug: "modbus-data-logger",
    thumbnail: modbusDataLogger,
    description: "PLC register polling, SQL history and downtime review",
  },
] as const satisfies ProjectPreview[];
