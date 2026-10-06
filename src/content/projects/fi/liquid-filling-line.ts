import showcase from "../../../assets/images/projects/showcase/liquid-filling-line.svg";
import type { ProjectContent } from "../../types";

export default {
  title: "Automaattinen nesteentäyttölinja",
  theme: "light",
  tags: ["plc", "ladder-logic", "tia-portal"],
  description: "PLC-ohjattu nesteentäyttökone, jossa on pinnantunnistus, turvalukitukset ja HMI-reseptien käsittely.",
  caseStudy: {
    category: "Teollisuusautomaatio",
    period: "Kesä 2023 — toukokuu 2024",
    status: "completed",
    overview: "Teolliseen käyttöön rakennettu ja käyttöönotettu nesteentäyttökone. Linja indeksoi pullot, annostelee täyttömäärän, valvoo korkituksen lukituksia ja tarjoaa käyttäjälle reseptivalinnan HMI:n kautta.",
    problem: "Manuaalisessa täytössä määrät vaihtelivat, roiskeita syntyi usein eikä erätuotanto ollut jäljitettävissä.",
    solution: "PLC-ohjaus käyttää valosähköistä pullontunnistusta, annosteluventtiilejä, hätäpysäytyspiiriä sekä HMI-reseptejä ja erälaskureita.",
    process: "Työpisteen vaatimusten kartoitus, sähkökaavioiden suunnittelu, keskuksen johdotus, PLC-ohjelman rakenne, kuivakoe, käyttöönotto ja käyttäjäkoulutus.",
    results: "Täyttötarkkuus pysyi toleranssissa erien välillä, roiskeet vähenivät ja pullokokojen vaihto muuttui toistettavaksi.",
    technologies: ["PLC", "Ladder Logic", "HMI", "Modbus TCP"],
    tools: ["TIA Portal", "AutoCAD Electrical"],
  },
  heroImage: {
    src: showcase,
    alt: "Havainnekuva PLC-ohjatusta nesteentäyttölinjasta",
    caption: "Julkaistun tapauskuvauksen perusteella tehty havainnekuva, ei projektivalokuva",
  },
  components: [],
} as const satisfies ProjectContent;
