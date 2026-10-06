import showcase from "../../../assets/images/projects/showcase/modbus-data-logger.svg";
import type { ProjectContent } from "../../types";

export default {
  title: "Modbus TCP -koneiden tiedonkeruu",
  theme: "dark",
  tags: ["python", "plc", "scada"],
  description: "IoT-yhdyskäytävä lukee PLC-rekistereitä Modbus TCP:n kautta ja tallentaa konedataa analysointia varten.",
  caseStudy: {
    category: "Teollinen IoT",
    period: "Lokakuu 2025 — nykyhetki",
    status: "in-progress",
    overview: "Kevyt yhdyskäytäväpalvelu lukee tuotantolaskureita, lämpötiloja ja koneen tiloja PLC:ltä sekä tallentaa ne SQL-tietokantaan koontinäyttöjä varten.",
    problem: "Koneiden suorituskykytiedot jäivät PLC:lle ilman historiatietoa, joten käyttökatkojen syitä ei voitu analysoida.",
    solution: "Toteutettiin Pythonilla Modbus TCP -pollauspalvelu, jossa on määritettävät rekisterikartat, puskuroitu SQL-tallennus ja yksinkertainen seisokkien luokittelu.",
    process: "PLC-ohjelman rekisterikartoitus, pollausvälin säätö, tietokantamallin suunnittelu ja verkkokatkoista palautumisen testaus.",
    results: "Jatkuva konehistoria mahdollistaa seisokkien tarkastelun ja yksinkertaisen OEE-tyyppisen raportoinnin.",
    technologies: ["Python", "Modbus TCP", "SQL"],
    tools: ["Git", "TIA Portal"],
  },
  heroImage: {
    src: showcase,
    alt: "Havainnekuva PLC-rekistereistä Python-yhdyskäytävän kautta SQL-tietokantaan ja koontinäyttöön",
    caption: "Julkaistun tapauskuvauksen perusteella tehty havainnekuva",
  },
  components: [],
} as const satisfies ProjectContent;
