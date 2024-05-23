import { iiitkota, googlepng } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    signature3dicon,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    bin2Bite
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "HacktheChain2.0",
        company_name: "IIIT,Kota",
        icon: iiitkota,
        iconBg: "#accbe1",
        date: "16 Feb 2024 - 18 Feb 2024",
        points: [
            "Lead the team for a web project which aimed to seamlessly connect people and institutions for donating and getting food on the fly.",
            "Secured third runner up position.",
        ],
    },
    {
        title: "Google Solutions (Global)",
        company_name: "",
        icon: googlepng,
        iconBg: "#fbc3bc",
        date: "Jan 2024 - June 2024",
        points: [
            "Made a project under the zero hunger domain with a team of four.It is a full stack project which seamlessly connects donor of the food and the institutions needing it.It contains live graph showing location of the user and also filters to find the nearest food.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: signature3dicon,
        theme: 'btn-back-black',
        name: '3D Portfolio ',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        techStack: 'React,Three JS,Email JS,HTML,CSS,JS',
        gitLink: 'https://github.com/chandelankit/portfolio_3d',
    },
    {
        iconUrl: bin2Bite,
        theme: 'btn-back-yellow',
        name: 'Bin2Bite',
        description: "A full stack project with live graph, ai chatbot ,live location fetching and much more.Using it people with surplus food can donate food and various NGO's and individuals can acquire it and further distribute it to the needy.My contributions include building the frontend and working on live location and middleware axios. ",
        techStack: 'React,Typescript,Node JS, MongoDB,Mongoose,Material UI,Shadcn UI,Aceternity UI',
        gitLink: 'https://github.com/devanshgupta08/Hungry',

    }
];

export default indexedDB;