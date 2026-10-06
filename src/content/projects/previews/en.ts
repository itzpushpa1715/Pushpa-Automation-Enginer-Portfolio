import thumbnailCubeWar from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import thumbnailQuibbo from "../../../assets/images/projects/quibbo/quibbo-4.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/images/projects/pokedex/pokedex-3.webp";
import thumbnailSharkie from "../../../assets/images/projects/sharkie/sharkie-4.webp";
import thumbnailStreakon from "../../../assets/images/projects/streakon/streakon-1.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ABB Robotic Pick-and-Place Cell",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "RAPID-programmed robotics simulation",
  },
  {
    title: "PLC-Controlled Pneumatic Cylinder",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Ladder logic in Siemens TIA Portal",
  },
  {
    title: "IT/OT Integration Architecture",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Modbus, OPC UA, AWS, and historians",
  },
  {
    title: "Machine Vision & Deep Learning",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Vision pipelines and basic neural models",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Nexara Fusion - Technical Content",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "PLC & IT/OT content for LinkedIn",
  },
] as const satisfies ProjectPreview[];
