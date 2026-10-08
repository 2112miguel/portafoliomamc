export interface Skill {
  skill_name: string;
  image: string;
}

export const skillPyramid: Skill[][] = [
  [{ skill_name: ".NET Core", image: "/microsoft-dot-net-icon.png" }],
  [
    { skill_name: "C#", image: "/icons8-c-250.png" },
    { skill_name: "Azure", image: "/icons8-azure-96.png" },
    { skill_name: "SQL Server", image: "/icons8-sql-server-480.png" },
  ],
  [
    { skill_name: "Angular", image: "/Angular.png" },
    { skill_name: "React", image: "/react.png" },
    { skill_name: "REST APIs", image: "/icons8-postman-inc-96.png" },
    { skill_name: "Azure DevOps", image: "/icons8-azure-devops-48.png" },
  ],
  [
    { skill_name: "JavaScript", image: "/js.png" },
    { skill_name: "TypeScript", image: "/ts.png" },
    { skill_name: "Git", image: "/icons8-git-96.png" },
    { skill_name: "Docker", image: "/docker.webp" },
    { skill_name: "Bootstrap", image: "/Bootstrap.png" },
    { skill_name: "HTML5", image: "/html.png" },
    { skill_name: "CSS3", image: "/css.png" },
  ],
];

export const Socials = [
  {
    name: "GitHub",
    src: "/gitwhite.png",
    url: "https://github.com/2112miguel",
  },
  {
    name: "LinkedIn",
    src: "/icons8-linkedin-480.png",
    url: "https://www.linkedin.com/in/miguelanmorenocontreras/",
  },
];
