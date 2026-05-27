import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.jpg";
import card3 from "../../assets/images/portfolio-images/card3.jpg";
import card4 from "../../assets/images/portfolio-images/card-4.jpg";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "FULL STACK / REAL-TIME",
    title: "V Chat | MERN + Socket.io",
    description:
      "Real-time messaging built with MongoDB, Express, React and Node. Instant updates powered by Socket.io, secure JWT-based authentication and bcrypt password hashing. Responsive UI with React and Tailwind for a smooth chat experience. Optimized real-time message delivery with secure token-based sessions, ensuring ultra-low latency and seamless interaction across concurrent users.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "MOBILE / PRODUCT",
    title: "PermitPro — Leave Management System",
    description:
      "End-to-end mobile application developed in Flutter (Android Studio) for managing leave requests, approvals, and history. Designed use-cases & UML diagrams, implemented authentication, leave generation, approval/rejection workflows and account validations for production readiness.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "AI / GENERATIVE",
    title: "GenAI — Image Generator",
    description:
      "Full-stack AI-powered image generation using a MERN frontend and integrations with Hugging Face APIs for model inference. Includes responsive layouts for mobile, contact form handling (Formspree) and user feedback capture for iterative improvements.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "HEALTHCARE PRODUCT",
    title: "HealHome — Healthcare Platform",
    description:
      "Developed core features for a healthcare operations platform during an internship: claim processing workflows, stable maintainable codebase, and infrastructure contributions. Focused on reliability, scalability and reducing turnaround time for feature rollouts.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "SYSTEM / RESCUE",
    title: "ResQNet — Emergency Response Network",
    description:
      "Prototype for a resilient emergency response network connecting users, responders and services. Designed data flows for low-latency alerts, prioritized dispatch logic, and a responsive dashboard to coordinate resources during incidents.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "FRONTEND / UI",
    title: "Netflix UI Clone — HTML5 & CSS",
    description:
      "Recreated the Netflix UI focusing on responsive design, accessibility and pixel-perfect layouts. Practiced advanced front-end concepts including grid/flex layouts, adaptive imagery and modern CSS patterns.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <br />
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of projects reflecting my academic foundation,
            hands-on implementations and technical breadth — from real-time full
            stack systems to AI integrations and product-focused mobile apps.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
