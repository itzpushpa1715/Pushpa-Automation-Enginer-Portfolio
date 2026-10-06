import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ABB Roboterzelle (Pick-and-Place)",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "Robotik-Simulation mit RAPID",
  },
  {
    title: "SPS-gesteuerter Pneumatikzylinder",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Kontaktplan in Siemens TIA Portal",
  },
  {
    title: "IT/OT-Integrationsarchitektur",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Modbus, OPC UA, AWS und Historian",
  },
  {
    title: "Bildverarbeitung & Deep Learning",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Vision-Pipelines und einfache Modelle",
  },
  /**  {
    title: "WebGL Partikel",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamische 3D Partikel",
  }, */
  {
    title: "Nexara Fusion - Technische Inhalte",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "SPS- & IT/OT-Inhalte für LinkedIn",
  },
] as const satisfies ProjectPreview[];
