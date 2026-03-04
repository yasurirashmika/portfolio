import intern2 from "../../src/assets/images/intern2.png";


// ============================================================
//  PORTFOLIO DATA — Edit all your content here
//  Change text, links, images, projects, skills, etc.
// ============================================================

export const personal = {
  name: "Yasuri Goonathilaka",
  title: "Full Stack Developer",
  tagline:
    "Building thoughtful, scalable software — from SaaS payment gateways and AI-powered apps to compilers and distributed microservices.",
  location: "Colombo, Sri Lanka",
  email: "iyasuri.rash@gmail.com",
  phone: "+94 77 481 7879",
  linkedin: "https://www.linkedin.com/in/yasuri-rashmika-53bbb82a7/",
  github: "https://github.com/yasurirashmika",
  availableFor: "Associate Software Engineer / Software Engineer roles",
};

export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "8+", label: "Months Internship" },
  { value: "3.38", label: "GPA / 4.00" },
];

export const about = {
  bio: [
    "I'm a Full Stack Developer and Computer Science (Hons) graduate from the University of Ruhuna, with hands-on production experience at eBeyonds — one of Sri Lanka's leading tech companies.",
    "My work spans backend microservices, REST APIs, AI/ML models, compiler design, and full-stack web applications. I'm curious about how systems are built at every layer from low-level language parsing to cloud-deployed SaaS platforms.",
    "I thrive in collaborative teams, take strong ownership of my work, and enjoy crafting clean, maintainable solutions to complex problems.",
  ],
  education: [
    {
      degree: "BSc (Hons) Computer Science",
      institution: "University of Ruhuna",
      department: "Department of Computer Science, Faculty of Science",
      period: "2021 – 2026",
      gpa: "3.38 / 4.00",
    },
    {
      degree: "G.C.E. Advanced Level — Physical Science Stream",
      institution: "Samudradevi Balika Vidyalaya, Nugegoda",
      period: "2019",
    },
  ],
};

// ============================================================
//  SKILLS — Add or remove any skill tag
// ============================================================
export const skills = [
  {
    category: "Languages",
    tags: [
      "Java",
      "Python",
      "JavaScript",
      "PHP",
      "C",
      "C#",
      "HTML5",
      "CSS3",
      "SQL",
      "Solidity",
    ],
  },
  {
    category: "Frontend",
    tags: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML/CSS",
      "Responsive Design",
      "Figma",
    ],
  },
  {
    category: "Backend & APIs",
    tags: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "PHP Laravel",
      "Flask",
      ".NET Framework",
      "REST APIs",
      "Microservices",
      "Kafka",
    ],
  },
  {
    category: "Databases",
    tags: ["MySQL", "MongoDB"],
  },
  {
    category: "AI / Machine Learning",
    tags: [
      "PyTorch",
      "OpenCV",
      "Deep Learning",
      "Transfer Learning",
      "ResNet18",
      "Grad-CAM",
      "Model Explainability",
      "Image Classification",
    ],
  },
  {
    category: "Blockchain / Web3",
    tags: [
      "Solidity",
      "Zero-Knowledge Proofs",
      "Decentralized Identifiers (DIDs)",
      "Smart Contracts",
      "Ethereum",
    ],
  },
  {
    category: "DevOps & Tools",
    tags: [
      "Docker",
      "Jenkins",
      "Git / GitHub",
      "Postman",
      "Trello",
      "Linux",
      "Windows",
    ],
  },
  {
    category: "Design & Other",
    tags: ["Photoshop", "CorelDraw", "UI/UX Principles", "Compiler Design"],
  },
];

// ============================================================
//  EXPERIENCE
// ============================================================

export const experience = [
  {
    role: "Intern Software Engineer",
    company: "eBeyonds",
    location: "Pannipitiya, Sri Lanka",
    period: "Jun 2024 – Feb 2025",
    type: "primary",
    description:
      "Contributed to Multi-ePay, a SaaS-based enterprise payment gateway. Primarily worked on backend development using PHP Laravel with MongoDB and MySQL. Integrated CI/CD pipelines via Jenkins and containerized services with Docker. Authored and maintained comprehensive REST API documentation to streamline developer onboarding. Focused on optimizing payment processing performance and improving system reliability under high load conditions.",
    tech: [
      "PHP Laravel",
      "MongoDB",
      "MySQL",
      "Jenkins",
      "Docker",
      "REST APIs",
      "API Documentation",
    ],
    images: [intern2],
  },
  {
    role: "Content Developer — Trainee",
    company: "eBeyonds",
    location: "Pannipitiya, Sri Lanka",
    period: "Sep 2020 – Oct 2021",
    type: "secondary",
    description:
      "Gained early industry exposure in digital content creation and technical communication, building foundational professional skills in collaboration, documentation, and structured content development.",
    tech: [],
    images: [],
  },
];

// ============================================================
//  PROJECTS
//  badge options: "Research" | "AI/ML" | "Full Stack" | "Backend" | "Frontend" | "Middleware" | "Compiler" | "Desktop"
//  images: place files in src/assets/images/projects/<project-folder>/
//          import them and reference in the images array below.
// ============================================================
export const projects = [
  {
    id: "dao-voting",
    title: "DAO Voting — Privacy-Preserving & Sybil-Resistant",
    badge: "Research",
    description:
      "Implemented a privacy-preserving and Sybil-resistant DAO governance mechanism combining Zero-Knowledge Proofs (ZKPs) and Decentralized Identifiers (DIDs). Smart contracts handle the full voting lifecycle on-chain, allowing voters to prove eligibility without revealing personal information.",
    tech: [
      "Solidity",
      "JavaScript",
      "Zero-Knowledge Proofs",
      "DIDs",
      "Ethereum",
      "Smart Contracts",
    ],
    github: "https://github.com/yasurirashmika/dao-voting-research",
    images: [],
  },
  {
    id: "sritel",
    title: "SriTel Customer Care Web Portal",
    badge: "Full Stack",
    description:
      "A full-stack microservices-based customer care web portal for a telecom company, built collaboratively. The backend consists of multiple independent Spring Boot microservices — Auth Service, Bill Service, Chat Service, Customer Service, Notification Service, Upload Service, and Value-Added Service — orchestrated with Docker Compose. The frontend provides a complete customer-facing portal for managing accounts, billing, chat support, and service requests.",
    tech: [
      "Spring Boot",
      "Java",
      "React.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "Microservices",
      "MySQL",
      "REST APIs",
      "Kafka",
    ],
    github: "https://github.com/yasurirashmika/sri-tel-customer-care",
    loomId: "ea1a3896df7241a4b46145509092cb49",
    images: [],
  },
    {
    id: "pneumonia-ai",
    title: "Pneumonia Detection with Grad-CAM Explainability",
    badge: "AI/ML",
    description:
      "Binary image classification model detecting pneumonia from chest X-rays using PyTorch and transfer learning (ResNet18). Modified the architecture for grayscale medical images and implemented BCEWithLogitsLoss for binary classification. Integrated Grad-CAM for visual model explainability. Built a Flask web app for real-time image upload and prediction, evaluated with accuracy, confusion matrix, precision, recall, and F1-score.",
    tech: [
      "Python",
      "PyTorch",
      "ResNet18",
      "OpenCV",
      "Grad-CAM",
      "Flask",
      "Docker",
      "Transfer Learning",
    ],
    github: null,
    images: [],
  },
  {
    id: "scholarsage",
    title: "ScholarSage — Student Mentoring Platform",
    badge: "Full Stack",
    description:
      "MERN stack web application for student academic support and mentoring. Features a personality type finder, appointment scheduler with mentors, GPA calculator, and curated skill improvement resources. Dual backend built with Node.js/Express/MongoDB and Python/Django REST API.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Django",
      "REST API",
    ],
    github: "https://github.com/yasurirashmika/ScholarSage-Frontend",
    githubBackend: "https://github.com/yasurirashmika/ScholarSage-Backend",
    images: [],
  },
   {
    id: "dtl-compiler",
    title: "DTL Compiler",
    badge: "Compiler",
    description:
      "A fully implemented compiler for the DTL (custom language), covering all major compilation phases: Lexical Analysis (tokenizer/scanner), Syntax Analysis (parser with grammar rules), Semantic Analysis (type checking, scope resolution), and Code Generation (AST construction and output). Demonstrates deep understanding of compiler theory and language processing pipelines.",
    tech: [
      "Python",
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation",
      "AST",
      "Compiler Theory",
    ],
    github: "https://github.com/yasurirashmika/DTL-Compiler",
    images: [],
  },
  {
    id: "pubsub",
    title: "PubSub Middleware — Java",
    badge: "Middleware",
    description:
      "A publish-subscribe messaging middleware built in Java, demonstrating event-driven architecture, asynchronous messaging patterns, and decoupled service communication — core concepts behind message brokers like Apache Kafka.",
    tech: [
      "Java",
      "Pub/Sub Pattern",
      "Event-Driven Architecture",
      "Kafka Concepts",
    ],
    github: "https://github.com/yasurirashmika/pubsub-middleware-java",
    images: [],
  },
  {
    id: "voting-system",
    title: "Voting System",
    badge: "Full Stack",
    description:
      "A web-based election and poll management system built with C# and the .NET Framework. Supports voter registration, secure vote recording, and real-time result display. Demonstrates proficiency in the Microsoft .NET ecosystem and web application development with C#.",
    tech: ["C#", ".NET Framework", "ASP.NET", "MySQL", "Authentication"],
    github: "https://github.com/yasurirashmika/votingSystem",
    images: [],
  },
  {
    id: "tour",
    title: "Tour Management System",
    badge: "Desktop",
    description:
      "A desktop application for tourists and locals to book vehicles for travel needs. Handles booking management, vehicle availability tracking, and customer records. Built with Java for business logic and MySQL for data persistence, following clean OOP design.",
    tech: ["Java", "MySQL", "Desktop App", "OOP", "JDBC"],
    github: "https://github.com/yasurirashmika/Tour_Management_System",
    images: [],
  },
  {
    id: "todo",
    title: "ToDo App",
    badge: "Frontend",
    description:
      "A clean, responsive task management application with task creation, priority tracking, and completion state management. Built with vanilla JavaScript demonstrating strong DOM manipulation and state handling fundamentals.",
    tech: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    github: "https://github.com/yasurirashmika/ToDo_App",
    images: [],
  },
  {
    id: "cafe",
    title: "Kingfisher Café Website",
    badge: "Frontend",
    description:
      "A responsive, visually appealing website for a café business featuring menu display, gallery, and contact information. Demonstrates frontend design sensibility, CSS layout skills, and the ability to build polished client-facing web experiences.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/yasurirashmika/kingfisherCafe_website",
    images: [],
  },
];

// ============================================================
//  RESEARCH
// ============================================================
export const research = {
  title:
    "Privacy-Preserving & Sybil-Resistant DAO Voting Using Zero-Knowledge Proofs and Decentralized Identifiers",
  type: "Undergraduate Research",
  institution: "University of Ruhuna — Department of Computer Science",
  year: "2024 – 2025",
  abstract:
    "This research addresses two critical vulnerabilities in decentralized autonomous organization (DAO) governance: privacy exposure and Sybil attacks. The work proposes and implements a novel voting mechanism combining Zero-Knowledge Proofs (ZKPs) to enable anonymous yet verifiable voting, and Decentralized Identifiers (DIDs) for unique identity attestation without relying on centralized authorities. Smart contracts were developed and deployed to manage the full voting lifecycle on-chain, demonstrating a practical system where each participant can prove eligibility and cast a verifiable vote without revealing any personal information. The implementation validates that privacy and integrity can coexist in decentralized governance systems.",
  keywords: [
    "Zero-Knowledge Proofs (ZKPs)",
    "Decentralized Identifiers (DIDs)",
    "Smart Contracts (Solidity)",
    "Blockchain Governance",
    "Sybil Resistance",
    "Privacy-Preserving Voting",
    "Ethereum",
  ],
  github: "https://github.com/yasurirashmika/dao-voting-research",
};

// ============================================================
//  CERTIFICATIONS
// ============================================================
export const certifications = [
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google / Coursera",
    icon: "network",
  },
  {
    name: "UI/UX for Beginners",
    issuer: "Great Learning",
    icon: "design",
  },
  {
    name: "Java Programming",
    issuer: "Great Learning",
    icon: "code",
  },
  {
    name: "Data Structures in C",
    issuer: "Great Learning",
    icon: "code",
  },
  {
    name: "Certificate Course in Computer Literacy",
    issuer: "Open University of Sri Lanka",
    icon: "cert",
  },
  {
    name: "Certificate Course in English",
    issuer: "University of Sri Jayewardenepura",
    icon: "language",
  },
];

// ============================================================
//  ACTIVITIES (Beyond Code)
// ============================================================
export const activities = [
  {
    title: "Computer Science Students' Community",
    detail: "Member — University of Ruhuna",
    icon: "💻",
  },
  {
    title: "Rotaract Club",
    detail: "Member — University of Ruhuna",
    icon: "🤝",
  },
  {
    title: "All Island Drama Competition",
    detail:
      "Performed representing Samudradevi Balika Vidyalaya in an inter-school theatre competition.",
    icon: "🎭",
  },
  {
    title: "Swimming",
    detail:
      "Competitive swimmer — represented school in swimming teams and inter-school competitions.",
    icon: "🏊",
  },
  {
    title: "Secretary of School Science Society",
    detail: "Samudradevi Balika Vidyalaya",
    icon: "🔬",
  },
];
