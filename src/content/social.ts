export const social = [
  { url: "mailto:pushpakoirala.work@gmail.com", name: "mail" },
  { url: "https://github.com/itzpushpa1715", name: "github" },
  { url: "https://www.linkedin.com/in/pushpakoirala/", name: "linkedin" },
  //{ url: "https://x.com/", name: "x" },
  //{ url: "https://www.instagram.com/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
