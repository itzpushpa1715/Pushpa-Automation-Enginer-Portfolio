// TODO(Pushpa): Ersetze das Platzhalterbild durch einen echten Screenshot
// eines Nexara Fusion LinkedIn-Posts oder einer SVG-Illustration.

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Nexara Fusion - Technische Inhalte",
  theme: "light",
  tags: ["plc", "scada"],
  live: "https://www.linkedin.com/company/nexara-fusion",
  videoBorder: false,
  description:
    "Nexara Fusion ist eine Technologie-Content-Marke, die Themen wie KI, Elektrotechnik, SPS-Programmierung, industrielle Automatisierung, Robotik, Embedded-Systeme, IoT und Industrie 4.0 für ein technisch versiertes LinkedIn-Publikum abdeckt.<br/><br/>Die Inhalte umfassen Markenvorstellungen, Erklärungen zu SPS und Kontaktplanlogik sowie Beiträge zu IT/OT-Architektur, jeweils begleitet von eigenen Skizzen-Illustrationen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Platzhalterbild - durch echten Nexara Fusion Post ersetzen",
        caption: "TODO: durch echten Nexara Fusion Post oder SVG-Illustration ersetzen",
      },
    },
    {
      type: "list",
      props: {
        title: "Inhalte",
        items: [
          "SPS-Programmierung und Kontaktplan-Konzepte für ein technisches Publikum",
          "IT/OT-Architekturthemen: Modbus, OPC UA, AWS-Integration, Sicherheitsstandards",
          "Themen zur Beratung in der industriellen Automatisierung und Projektvorstellungen",
          "Eigene Skizzen-Illustrationen zu jedem Beitrag",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Plattform",
        text: "LinkedIn",
      },
    },
  ],
} as const satisfies ProjectContent;
