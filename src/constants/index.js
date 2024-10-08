import { backend, web, mobile, creator, communication, creativity, empathy, selfconfidence, hoobank, calmclone, doordashclone, cryptolandingpage, vincent, ebube, mohammed } from "../assets"
import gorraimg from '../assets/gorra.png'


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills"
    },
    // {
    //     id: "tesimonials",
    //     title: "Tesimonials"
    // },
    {
        id: "my-works",
        title:'Works'
    },
    {
        id: "my-network",
        title: "Network"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

export const technicalSkills = [
    {
        id: 'front-end',
        skill: 'Front-end Developer',
        img: web,
        description: `I implement technologies like vanilla html, css, javascript and libraries like react js and tailwind css to bring ideas to life.`
    },
    {
        id: 'back-end',
        skill: 'Back-end Developer',
        img: backend,
        description: `I use my proficiency in Node.js, Express.js, Typescript and MongoDB to assert control over the realm of web data.`
    },
    {
        id: 'mobile',
        skill: 'Mobile App Developer',
        img: creator,
        description: `I use my React Native Skills, to build cross platform mobile apps that are user friendly and integrates with Firebase or Supabase.`
    },
    {
        id: 'Web-3',
        skill: 'Web 3 Developer',
        img: mobile,
        description: `I'm learning solidity to enhance my skills to be able to build smart contracts, and webpages with immutable date using blockchain`
    },  
]

export const softSkills = [
    {
        id: 'Creativity',
        skill: 'Creativity',
        img: creativity,
        description: `I'm willing to use my intuition and intelligence to bring out the genius in me to implement new ideas.`
    },
    {
        id: 'Communication',
        skill: 'Communication',
        img: communication,
        description: `I'm very fluent in English language and have the ability to express and convey my thoughts to others effectively.`
    },
    {
        id: 'Self Confidence',
        skill: 'Self Confidence',
        img: selfconfidence,
        description: `I have unflinching believe in myself that i can do virtually anything just like others or even better.`
    },
    {
        id: 'Empathy',
        skill: 'Empathy',
        img: empathy,
        description: `I can work in a team and willing to offer and receive help from other team mates`
    },  
]

export const myNetworks = [
    {
        id: 'Vincent',
        name: 'Ikechukwu Vincent',
        about: 'An enthusiastic software engineer and freelancer with years of experience in working with web technologies.',
        img: vincent,
    },
    {
        id: 'Ebube',
        name: 'Ebube Maduike',
        about: 'A mobile and web developer who is currently a freelancer with experience in building B2B and SaaS projects.',
        img: ebube,
    },
    {
        id: 'Tijani',
        name: 'Mohammed Tijani',
        about: 'A web developer and freelancer with experience in working with varieties of web technologies and tools.',
        img: mohammed,
    }
]

export const myProjects = [
    {
        id: 'gorrahat',
        name: 'Gorra | Hats',
        description: 'A fullstack ecommerce website for selling hats using NextJS, ExpressJs, Typescript',
        img: gorraimg,
        githublink: 'https://github.com/azeezabass2005/gorra'
    },
    {
        id: 'cryptolandingpage',
        name: 'Crypto Page',
        description: 'A landing page for a crypto loan app that is filled with background gradients, border gradients and animations.',
        img: cryptolandingpage,
        githublink: 'https://github.com/azeezabass2005/crypto_landing_page'
    },
    {
        id: 'hoobank',
        name: 'Hoo Bank',
        description: 'The design to code of the UI/UX of Hoo Bank an app that offers various banking services.',
        img: hoobank,
        githublink: 'https://github.com/azeezabass2005/hoobank_clone'
    },
]
