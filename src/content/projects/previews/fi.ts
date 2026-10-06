import abbCell from "../../../assets/images/projects/showcase/abb-cell.svg";
import pneumaticCylinder from "../../../assets/images/projects/showcase/pneumatic-cylinder.svg";
import itOtArchitecture from "../../../assets/images/projects/showcase/it-ot-architecture.svg";
import machineVision from "../../../assets/images/projects/showcase/machine-vision.svg";
import nexaraContent from "../../../assets/images/projects/showcase/nexara-content.svg";
import liquidFillingLine from "../../../assets/images/projects/showcase/liquid-filling-line.svg";
import modbusDataLogger from "../../../assets/images/projects/showcase/modbus-data-logger.svg";

import type { ProjectPreview } from "../../types";

export default [
  { title: "ABB:n robottisolu (poiminta ja sijoitus)", slug: "streakon", thumbnail: abbCell, description: "RAPID-ohjelmoitu robotiikkasimulaatio" },
  { title: "PLC-ohjattu pneumaattisylinteri", slug: "cubewar", thumbnail: pneumaticCylinder, description: "Ladder-logiikka Siemens TIA Portalissa" },
  { title: "IT/OT-integraatioarkkitehtuuri", slug: "quibbo", thumbnail: itOtArchitecture, description: "Modbus, OPC UA, AWS ja historiatietokannat" },
  { title: "Konenäkö ja syväoppiminen", slug: "sharkie", thumbnail: machineVision, description: "Konenäön käsittelyketjut ja neuroverkot" },
  { title: "Nexara Fusion - tekninen sisältö", slug: "pokedex", thumbnail: nexaraContent, description: "PLC- ja IT/OT-sisältö LinkedIniin" },
  { title: "Automaattinen nesteentäyttölinja", slug: "liquid-filling-line", thumbnail: liquidFillingLine, description: "PLC-ohjaus, turvalukitukset ja HMI-reseptit" },
  { title: "Modbus TCP -koneiden tiedonkeruu", slug: "modbus-data-logger", thumbnail: modbusDataLogger, description: "PLC-rekisterit, SQL-historia ja seisokkien tarkastelu" },
] as const satisfies ProjectPreview[];
