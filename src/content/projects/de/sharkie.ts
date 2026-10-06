// TODO(Pushpa): Ersetze das Platzhalterbild durch einen echten Screenshot
// aus dem Bildverarbeitungs-/Deep-Learning-Kursprojekt.

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Bildverarbeitung & Deep Learning",
  theme: "dark",
  tags: ["python", "matlab"],
  videoBorder: false,
  description:
    "Kursprojekt zu den Grundlagen der Bildverarbeitung und des Deep Learning im Rahmen des Studiengangs Automatisierungs- und Robotertechnik an der JAMK.<br/><br/>Umfasst grundlegende Bildverarbeitungs-Pipelines und einfache neuronale Netzmodelle für Objekterkennung, als Grundlage für Anwendungen in der automatisierten visuellen Inspektion.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Platzhalterbild - durch echten Screenshot ersetzen",
        caption: "TODO: durch echten Bildverarbeitungs-/Deep-Learning-Screenshot ersetzen",
      },
    },
    {
      type: "list",
      props: {
        title: "Inhalte",
        items: [
          "Grundlegende Bildaufnahme und Vorverarbeitung für Vision-Pipelines",
          "Einfache Deep-Learning-Modelle für Objekterkennung",
          "KI-Grundlagen als Basis für automatisierte visuelle Inspektionssysteme",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Werkzeuge",
        text: "Python, MATLAB, grundlegende Deep-Learning-Frameworks",
      },
    },
  ],
} as const satisfies ProjectContent;
