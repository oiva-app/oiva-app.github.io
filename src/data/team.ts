import type { ImageMetadata } from "astro";
import jonathanHeadshot from "../assets/team/jonathan-mcnair.png";

export type TeamMember = {
  name: string;
  location: string;
  initials: string;
  headshot?: ImageMetadata;
  emailUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jonathan McNair",
    location: "Atlanta, GA, United States",
    initials: "JM",
    headshot: jonathanHeadshot,
    githubUrl: "https://github.com/unlikelykoala",
    linkedinUrl: "https://www.linkedin.com/in/jonathan-mcnair-aa3b47ab/",
  },
  {
    name: "Valerie Racine",
    location: "Sparks, NV, United States",
    initials: "VR",
    githubUrl: "https://github.com/v-racine",
    linkedinUrl: "https://www.linkedin.com/in/valerie-racine-743a08241/",
  },
  {
    name: "Tiia Rikama",
    location: "Los Altos, CA, United States",
    initials: "TR",
    githubUrl: "https://github.com/tiiarikama",
    linkedinUrl: "https://www.linkedin.com/in/tiia-rikama-02b491239/",
  },
  {
    name: "Steven Valenziano",
    location: "Durham, NC, United States",
    initials: "SV",
    githubUrl: "https://github.com/svalenziano",
    linkedinUrl: "https://www.linkedin.com/in/stevenvalenziano/",
  },
];
