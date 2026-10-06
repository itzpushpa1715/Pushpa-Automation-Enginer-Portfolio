import showcase from "../../../assets/images/projects/showcase/modbus-data-logger.svg";
import type { ProjectContent } from "../../types";

export default {
  title: "Modbus TCP Machine Data Logger",
  theme: "dark",
  tags: ["python", "plc", "scada"],
  description: "IoT gateway that polls PLC registers over Modbus TCP and stores machine data for analysis.",
  caseStudy: {
    category: "Industrial IoT",
    period: "Oct 2025 — Present",
    status: "in-progress",
    overview: "A lightweight gateway service that reads production counters, temperatures and machine states from a PLC and writes them into a SQL database for dashboards.",
    problem: "Machine performance data stayed inside the PLC with no history, so downtime causes could not be analysed.",
    solution: "Implemented a Python polling service over Modbus TCP with configurable register maps, buffered writes to SQL and basic downtime classification.",
    process: "Register mapping from the PLC program, polling interval tuning, schema design and resilience testing against network dropouts.",
    results: "Continuous machine history enabling downtime review and simple OEE-style reporting.",
    technologies: ["Python", "Modbus TCP", "SQL"],
    tools: ["Git", "TIA Portal"],
  },
  heroImage: {
    src: showcase,
    alt: "Illustrative pipeline from PLC registers through a Python Modbus TCP gateway to SQL and dashboards",
    caption: "Illustrative data pipeline based on the published case study",
  },
  components: [],
} as const satisfies ProjectContent;
