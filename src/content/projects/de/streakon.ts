// TODO(Pushpa): Ersetze das Platzhalterbild durch ein echtes Foto/Screenshot
// der ABB RobotStudio Pick-and-Place-Simulation.

import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "ABB Roboterzelle (Pick-and-Place)",
  theme: "dark",
  tags: ["rapid", "autocad"],
  videoBorder: false,
  description:
    "Eine simulierte Pick-and-Place-Anwendung in ABB RobotStudio, programmiert in RAPID.<br/><br/>Die Zelle nutzt Smart Components zur Modellierung von Greifern und Sensoren. MoveL- und MoveJ-Bewegungsbefehle steuern die Abfolge von Aufnahme-, Transfer- und Ablagevorgängen zwischen den Stationen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Platzhalterbild - durch RobotStudio-Screenshot ersetzen",
        caption: "TODO: durch Screenshot der RobotStudio-Simulation ersetzen",
      },
    },
    {
      type: "list",
      props: {
        title: "Funktionsumfang",
        items: [
          "Simuliert einen vollständigen Pick-and-Place-Zyklus zwischen Zuführ- und Ablagestation",
          "Nutzt Smart Components zur Modellierung von Greifer, Sensoren und Teileflusslogik",
          "Steuert Bewegungen mit MoveL (linear) und MoveJ (achsweise) für kollisionsfreie Bahnen",
          "Demonstriert Target-/Frame-Einrichtung, I/O-Signalverarbeitung und einfache Fehlerbehandlung",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Werkzeuge",
        text: "ABB RobotStudio, RAPID-Programmiersprache, Smart Components",
      },
    },
  ],
} as const satisfies ProjectContent;
