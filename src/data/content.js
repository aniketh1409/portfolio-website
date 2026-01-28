export const content = {
  name: "Aniketh Srinivasa Kini",
  role: "Computer Engineering (Co-op) — Software Option",
  location: "Edmonton, AB",
  headline: "I build clean, reliable software — web apps, automation, and data tools.",
  subheadline: "React • FastAPI • Android • Firebase • Terraform • AWS • DuckDB",

  links: {
  github: "https://github.com/aniketh1409",
  linkedin: "https://www.linkedin.com/in/aniketh-kini/",
  email: "anikeths@ualberta.ca",
  resume: `${import.meta.env.BASE_URL}Aniketh_Resume_Jan2026.pdf`,
},


  projects: [
    {
      title: "Summit — EventLottery (Android App)",
      featured: true,
      desc: "Event registration app with randomized lottery selection. Organizer + entrant flows, secure writes, and tested lottery module.",
      tags: ["Java", "Firebase", "XML", "Android"],
      href: "",
      github: "https://github.com/CMPUT301F25summit/CMPUT301F25summit",
    },
    {
      title: "Babbly — AI Voice Conversation Coach",
      featured: true,
      desc: "Voice practice sessions with personalized feedback. FastAPI backend extracts prosody/phonation/articulation features and generates coaching insights. (Backend currently not public)",
      tags: ["JavaScript", "    React (Vite)", "FastAPI", "Whisper", "DisVoice", "Praat"],
      href: "https://jazzy-bonbon-81f7ff.netlify.app/",
      github: "https://github.com/jayyy044/Babbly",
    },
    {
      title: "WATTcher — Energy Consumption Monitor",
      desc: "Python GUI + Arduino firmware for real-time energy monitoring and logging, with a React dashboard for visualizations.",
      tags: ["Python", "Arduino", "React"],
      href: "https://wattchers.netlify.app/",   
      github: "",
    },
    {
      title: "Test Cricket Simulator",
      desc: "Interactive 11v11 match simulator with ball-by-ball logic, scorecards, and stats tables.",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "https://tiny-queijadas-3515c8.netlify.app/", 
      github: "https://github.com/aniketh1409/cricket-simulator",
    },
    {
        title: "GitHub MCP Connector",
        desc: "Built an MCP-compatible GitHub connector enabling LLM tools to query repos, issues, PRs, and metadata with secure auth and structured tool registration.",
        tags: ["Python", "MCP", "GitHub API", "FastMCP"],
        href: "",
        github: "https://github.com/aniketh1409/github-mcp-assistant", 
    }

  ],

  // concise “portfolio-friendly” skills (not a huge wall)
  skills: [
    "Python", "Java", "C/C++", "SQL", "JavaScript", "Kotlin", "Rust",
    "React", "Vite", "FastAPI", "Django", "Firebase", "Node/Express",
    "MongoDB", "MySQL", "SQLite",
    "Terraform (AWS)", "DuckDB", "Linux", "Power BI",
  ],
};
