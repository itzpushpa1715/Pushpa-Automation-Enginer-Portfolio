// TODO(Pushpa): Ersetze das Platzhalterbild durch ein echtes
// IT/OT-Architekturdiagramm oder eine SVG-Skizze.

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "IT/OT-Integrationsarchitektur",
  theme: "light",
  tags: ["scada"],
  videoBorder: true,
  description:
    "Eine konzeptionelle Architektur, die Steuerungssysteme der Fertigungsebene mit der IT-Unternehmensebene verbindet – über Modbus TCP und OPC UA auf der OT-Seite sowie Cloud (AWS) und Historian-Systeme auf der IT-Seite.<br/><br/>Entstanden als Teil technischer Inhalte, die erklären, wie Fabrikdaten sicher von der SPS zu Dashboards und Historians gelangen, unter Berücksichtigung gängiger Sicherheitsstandards.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Platzhalterbild - durch IT/OT-Architekturdiagramm ersetzen",
        caption: "TODO: durch IT/OT-Integrationsdiagramm oder Skizze ersetzen",
      },
    },
    {
      type: "list",
      props: {
        title: "Behandelte Themen",
        items: [
          "Modbus-TCP-Kommunikation zwischen Feldgeräten und SPS",
          "OPC UA als Brücke zwischen OT-Systemen und IT-Infrastruktur",
          "Cloud-Integrationsmuster zur Übertragung von Produktionsdaten an AWS",
          "Historian-Systeme zur Langzeitspeicherung und Trendanalyse von Prozessdaten",
          "Sicherheitsstandards relevant für vernetzte Steuerungssysteme",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Werkzeuge",
        text: "Modbus TCP, OPC UA, AWS, Historian-Systeme",
      },
    },
  ],
} as const satisfies ProjectContent;
