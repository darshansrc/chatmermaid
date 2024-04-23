/* eslint-disable @next/next/no-img-element */
import { MarketingConfig } from "@/types/index";
import Image from "next/image";
import { title } from "process";
import { motion } from "framer-motion";

export const marketingConfig = {
  mainNav: [
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  stickyScroll: [
    // {
    //   title: "Title 1",
    //   description: "Description 1",
    //   content: "Content 1",
    // },
    // {
    //   title: "Title 2",
    //   description: "Description 2",
    //   content: "Content 2",
    // },
    // {
    //   title: "Title 3",
    //   description: "Description 3",
    //   content: "Content 3",
    // },

    {
      title: "Flowchart",
      description:
        "Flowcharts are composed of nodes (geometric shapes) and edges (arrows or lines). The Mermaid code defines how nodes and edges are made and accommodates different arrow types, multi-directional arrows, and any linking to and from subgraphs.",
      content: (
        <div className="h-full w-full  flex items-center p-2 justify-center ">
          <img
            src="/examples/flowchart.png"
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },

    {
      title: "Sequence Diagram",
      description:
        "Sequence diagrams are a type of interaction diagram which show how processes operate with one another and in what order.",
      content: (
        <div className="h-full w-full  flex items-center  justify-center  ">
          <img
            src="/examples/sequenceZ.png"
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Class Diagram",
      description:
        "Class diagrams are the main building block of object oriented modeling. They are used to show the different classes in a system, their fields, methods, and relationships among objects.",
      content: (
        <div className="h-full w-full  px-8  flex items-center  justify-center     ">
          <img
            src="/examples/classDiagramM.png"
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "State Diagram",
      description:
        "State diagrams are used to give an abstract description of the behavior of a system. This behavior is analyzed and represented as a series of events that can occur in one or more possible states.",
      content: (
        <div className="h-full w-full  flex items-center  justify-center  ">
          <img
            src="/examples/stateDiagram.png"
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Gantt Chart",
      description:
        "Gantt charts are a type of bar chart that illustrates a project schedule. This chart lists the tasks to be performed on the vertical axis, and time intervals on the horizontal axis.",
      content: (
        <div className="h-full w-full   flex items-center pl-4  justify-center ">
          <img
            src="/examples/gaantDiagram.png"
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Mind Map",
      description:
        "Mind maps are a type of diagram used to visually organize information. A mind map is hierarchical and shows relationships among pieces of the whole.",
      content: (
        <div className="h-full w-full   flex items-center   justify-center ">
          <img
            src="/examples/mindmap1.png"
            className="h-full w-full object-cover "
            alt="linear board demo"
          />
        </div>
      ),
    },
  ],
};
