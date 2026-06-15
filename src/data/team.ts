export type TeamMember = {
  name: string;
  location: string;
  initials: string;
  emailUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jonathan McNair",
    location: "Atlanta, GA, United States",
    initials: "JM",
    githubUrl: "https://github.com/orgs/oiva-app/people/unlikelykoala",
    linkedinUrl: "https://www.linkedin.com/in/jonathan-mcnair-aa3b47ab/",
  },
  {
    name: "Valerie Racine",
    location: "Sparks, NV, United States",
    initials: "VR",
    githubUrl: "https://github.com/orgs/oiva-app/people/v-racine",
    linkedinUrl: "https://www.linkedin.com/in/valerie-racine-743a08241/",
  },
  {
    name: "Tiia Rikama",
    location: "Los Altos, CA, United States",
    initials: "TR",
    githubUrl: "https://github.com/orgs/oiva-app/people/tiiarikama",
    linkedinUrl: "https://www.linkedin.com/in/tiia-rikama-02b491239/",
  },
  {
    name: "Steven Valenziano",
    location: "Durham, NC, United States",
    initials: "SV",
    githubUrl: "https://github.com/orgs/oiva-app/people/svalenziano",
    linkedinUrl: "https://www.linkedin.com/in/stevenvalenziano/",
  },
];
