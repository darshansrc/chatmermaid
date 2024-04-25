import { DocsConfig } from "types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "About Mermaid JS",
          href: "/docs/about-mermaid-js",
        },
      ],
    },

    {
      title: "Mermaid Synatx",
      items: [
        {
          title: "Flowchart",
          href: "/docs/mermaid-syntax/flowchart",
        },
        {
          title: "Sequence Diagram",
          href: "/docs/mermaid-syntax/sequence-diagram",
        },
        {
          title: "Gantt Chart",
          href: "/docs/mermaid-syntax/gantt-chart",
        },
        {
          title: "Class Diagram",
          href: "/docs/mermaid-syntax/class-diagram",
        },
        {
          title: "State Diagram",
          href: "/docs/mermaid-syntax/state-diagram",
        },
        {
          title: "Entity Relationship Diagram",
          href: "/docs/mermaid-syntax/entity-relationship-diagram",
        },
        {
          title: "User Journey",
          href: "/docs/mermaid-syntax/user-journey",
        },
        {
          title: "Mind Map",
          href: "/docs/mermaid-syntax/mind-map",
        },
        {
          title: "Other Diagrams",
          href: "https://mermaid.js.org/intro/",
        },
      ],
    },
  ],
};
