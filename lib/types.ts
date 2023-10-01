import { contactLink, links } from "./data";

export type SectionName =
  | (typeof links)[number]["name"]
  | (typeof contactLink)["name"];
