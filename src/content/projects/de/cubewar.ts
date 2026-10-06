// TODO(Pushpa): Ersetze das Platzhalterbild durch einen Screenshot der
// TIA Portal Kontaktplan-Logik oder ein Foto des Pneumatikzylinders.

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "SPS-gesteuerter Pneumatikzylinder",
  theme: "dark",
  tags: ["plc", "tia-portal", "ladder-logic"],
  videoBorder: false,
  description:
    "Ein doppelwirkender Pneumatikzylinder, gesteuert über eine SPS mit Kontaktplanlogik, programmiert in Siemens TIA Portal.<br/><br/>Set/Reset-Spulen steuern das Magnetventil zum Aus- und Einfahren des Zylinders, während Endschalter eine Positionsrückmeldung für sicheres, wiederholbares Zyklisieren liefern.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Platzhalterbild - durch TIA Portal Screenshot ersetzen",
        caption: "TODO: durch Kontaktplan-Screenshot (LAD) oder Zylinderfoto ersetzen",
      },
    },
    {
      type: "list",
      props: {
        title: "Funktionsumfang",
        items: [
          "Steuert Aus-/Einfahrbewegung eines doppelwirkenden Zylinders über ein 5/2-Wege-Magnetventil",
          "Nutzt S/R-Spulen (Set/Reset) in der Kontaktplanlogik zur sicheren Zustandsverriegelung",
          "Liest Endschalter-Rückmeldungen zur Positionsbestätigung vor dem nächsten Zyklus",
          "Entwickelt und getestet in Siemens TIA Portal mit simulierter I/O-Tabelle",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Werkzeuge",
        text: "Siemens TIA Portal, Kontaktplan (LAD), Pneumatik-Steuerungshardware",
      },
    },
  ],
} as const satisfies ProjectContent;
