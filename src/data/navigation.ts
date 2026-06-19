import { withBase } from "../lib/urls";

export const githubUrl = "https://github.com/oiva-app/oiva";

export const navLinks = [
  {
    label: "Case Study",
    href: withBase("/case-study/"),
    match: "/case-study/",
  },
  {
    label: "Get Started",
    href: withBase("/get-started/"),
    match: "/get-started/",
  },
  {
    label: "Team",
    href: withBase("/team/"),
    match: "/team/",
  },
];
