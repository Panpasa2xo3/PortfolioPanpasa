import { link } from "fs";
import { url } from "inspector/promises";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Instagram",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Discord",
    src: "/discord.svg",
  },
];
export const Projects = [
  {
    title: "Expense Tracker Website",
    text: "An Expense Tracker Website helps users track income and expenses, manage budgets, and monitor spending habits.",
    src: "/ExpenseWeb.png",
    url:"https://expense-tracker-woad-two.vercel.app/", 
  },
  {
    title: "BMI Calculator Website",
    text: "A BMI Calculator Website allows users to calculate their Body Mass Index (BMI) by entering their weight and height, helping them assess whether they are within a healthy weight range.",
    src: "/BMICalculatorWeb.png",
    url:"https://bmi-calculator-zeta-jet.vercel.app/",
  },
  {
    title: "Panpasa Portfolio",
    text: "Panpasa Portfolio is a personal website designed to showcase skills, projects, and achievements. It provides an overview of the individual's work, experience, and expertise, helping others learn more about their professional background and abilities.",
    src: "/panpsawebport.png",
    url:"https://github.com/Panpasa2xo3/PortfolioPanpasa",
    
  },
  {
    title: "TicTacToe Website",
    text: "A TicTacToe Website lets users play the classic Tic-Tac-Toe game against another player or the computer, featuring a simple grid for marking X's and O's to win the game.",
    src: "/TictactoeGameWeb.png",
    url: "https://tic-tac-toe-game-livid-sigma.vercel.app/",
   
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];