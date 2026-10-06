export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "plc"
  | "tia-portal"
  | "rapid"
  | "scada"
  | "matlab"
  | "python"
  | "autocad"
  | "ladder-logic";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  plc: "PLC",
  "tia-portal": "TIA Portal",
  rapid: "RAPID",
  scada: "SCADA",
  matlab: "MATLAB/Simulink",
  python: "Python",
  autocad: "AutoCAD",
  "ladder-logic": "Ladder Logic",
} as const satisfies Record<TagVariant, string>;
