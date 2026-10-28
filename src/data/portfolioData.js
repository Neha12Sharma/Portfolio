export const portfolioData = {
  personal: {
    name: "Neha",
    fullName: "Neha Vats",
    title: "Aspiring Software Engineer | MERN Stack Developer",
    subtitle: "MERN Stack Specialist & Problem Solver",
    tagline: "Building scalable, resilient web applications with modern MERN architecture, hardened authentication, and data analytics.",
    summary: "Aspiring Software Engineer skilled in the MERN stack, with hands-on experience across three internships building full-stack web applications, secure authentication systems, and data analytics workflows. Strong foundation in C/C++ and JavaScript, with a growing focus on scalable, production-ready development.",
    email: "neha.vats.9896@gmail.com",
    phone: "+91-8168517425",
    location: "Sonipat, Haryana",
    photo: "/profile.jpg",
    status: "Available for Software Engineering Roles",
    socials: {
      linkedin: "https://www.linkedin.com/in/neha-vats-050505n/",
      github: "https://github.com/Neha12Sharma",
      leetcode: "https://leetcode.com/u/Neha8168/",
      hackerrank: "https://www.hackerrank.com/profile/neha_vats_9896",
      email: "mailto:neha.vats.9896@gmail.com"
    }
  },

  stats: [
    { label: "Internships Completed", value: "3", suffix: "", badge: "Full-Stack & Analytics" },
    { label: "Live Production Projects", value: "4", suffix: "+", badge: "MERN Deployed" },
    { label: "LeetCode & Problem Solving", value: "Active", suffix: "", badge: "C/C++ & DSA", link: "https://leetcode.com/u/Neha8168/" },
    { label: "Core Web Technologies", value: "10", suffix: "+", badge: "MERN & Tools" }
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      handle: "Neha8168",
      url: "https://leetcode.com/u/Neha8168/",
      color: "from-amber-500/20 to-yellow-500/10",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-400",
      icon: "Code2",
      badge: "DSA & Problem Solving",
      stats: "Active LeetCode solver in C++ & JavaScript algorithms",
      highlights: ["Data Structures & Algorithms", "Two Pointers & Arrays", "Recursion & Trees", "Dynamic Programming Basics"]
    },
    {
      platform: "HackerRank",
      handle: "neha_vats_9896",
      url: "https://www.hackerrank.com/profile/neha_vats_9896",
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
      icon: "Terminal",
      badge: "Problem Solving & Gold Badges",
      stats: "Verified problem solver in C++, Python & core Data Structures",
      highlights: [
        "Problem Solving Gold Badges",
        "C++ & Python Language Proficiencies",
        "Data Structures & Implementation",
        "Verified HackerRank Skill Badges"
      ]
    },
    {
      platform: "GitHub",
      handle: "Neha12Sharma",
      url: "https://github.com/Neha12Sharma",
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      icon: "Github",
      badge: "Open Source & Code",
      stats: "Repositories across MERN, Chat Apps & Admin Dashboards",
      highlights: ["MERN Full-Stack Repositories", "REST API Architectures", "Clean Git Commit History", "Vercel Deployments"]
    },
    {
      platform: "LinkedIn",
      handle: "neha-vats-050505n",
      url: "https://www.linkedin.com/in/neha-vats-050505n/",
      color: "from-sky-500/20 to-blue-600/10",
      borderColor: "border-sky-500/30",
      textColor: "text-sky-400",
      icon: "Linkedin",
      badge: "Professional Network",
      stats: "3 Internship experiences & tech updates",
      highlights: ["MERN Intern Experiences", "Geeta University Network", "Tech Community Engagements", "Engineering Insights"]
    }
  ],

  achievements: [
    {
      title: "HackerRank Gold Badges",
      platform: "HackerRank",
      badge: "Problem Solving",
      url: "https://www.hackerrank.com/profile/neha_vats_9896",
      desc: "Earned Gold Badges in Problem Solving, demonstrating algorithmic accuracy and mastery of fundamental data structures in C++ & Python."
    },
    {
      title: "Active LeetCode Problem Solving",
      platform: "LeetCode",
      badge: "Algorithms",
      url: "https://leetcode.com/u/Neha8168/",
      desc: "Consistent problem solving streak tackling arrays, strings, two-pointers, recursion, trees, and hash maps with clean complexity bounds."
    },
    {
      title: "Hackforge 2.0 National Hackathon",
      platform: "National Hackathon",
      badge: "Hackathon Finalist",
      desc: "Competed in high-velocity competitive prototyping, developing a scalable full-stack web application within a 36-hour sprint."
    },
    {
      title: "Google Cloud Platform Fundamentals",
      platform: "Google Cloud",
      badge: "Cloud Certified",
      desc: "Completed technical training on GCP architecture, cloud compute engines, IAM policies, and serverless application hosting."
    },
    {
      title: "Internet of Things (IoT) Technical Certification",
      platform: "IoT Certification",
      badge: "IoT & Smart Systems",
      desc: "Certified in Internet of Things architecture, sensor integration, microcontroller interfacing, and cloud-connected telemetry systems."
    }
  ],

  projects: [
    {
      id: "kimichat",
      title: "KimiChat — Real-Time Social Platform",
      imgSrc: "/images/kimi-chat.png",
      category: "Full-Stack",
      subCategory: "Real-time & AI",
      liveUrl: "https://kimi-chat-app-ghwg.vercel.app/",
      githubUrl: "https://github.com/Neha12Sharma",
      summary: "Full-stack real-time chat and social platform enabling dynamic community interaction, multimedia communication, and AI-driven functionalities with seamless authentication.",
      points: [
        "Built a full-stack real-time chat and social platform using the MERN stack.",
        "Enabled rich dynamic community interaction with low-latency messaging.",
        "Implemented AI-driven functionalities and secure JWT authentication for a seamless user experience."
      ],
      tags: ["React", "Node.js", "Socket.io", "TailwindCSS", "JWT", "AI"],
      featured: true
    },
    {
      id: "hospital-management",
      title: "Hospital Management App",
      imgSrc: "/images/aegiscare.png",
      category: "Full-Stack",
      subCategory: "Management Systems",
      liveUrl: "https://medi-care-jade.vercel.app/",
      githubUrl: "https://github.com/Neha12Sharma",
      summary: "Comprehensive healthcare management system built to streamline patient records, doctor appointment scheduling, and medical staff access control.",
      points: [
        "Developing a MERN-based hospital management system to streamline clinical records and appointments.",
        "Designing role-based access control (RBAC) for administrators, doctors, and patients.",
        "Engineered secure authentication layer with Bcrypt password hashing and protected API routes."
      ],
      tags: ["React", "Node.js", "JWT Auth", "RBAC", "MongoDB", "REST API"],
      featured: true
    },
    {
      id: "event-management",
      title: "Event Management System",
      imgSrc: "/images/omnisync-ai.png",
      category: "Full-Stack",
      subCategory: "Management Systems",
      liveUrl: "https://event-management-system-1ae7.vercel.app/",
      githubUrl: "https://github.com/Neha12Sharma",
      summary: "Web-based event planning and organizing portal facilitating event listings, attendee reservations, and administrative ticketing workflows.",
      points: [
        "Built end-to-end platform using MongoDB, Express.js, React.js, and Node.js.",
        "Enabled admin-controlled event registration with real-time capacity and attendee tracking.",
        "Crafted a mobile-responsive UI ensuring intuitive event discovery and registration."
      ],
      tags: ["React", "Express.js", "Node.js", "MongoDB", "TailwindCSS"],
      featured: true
    },
    {
      id: "recipe-kitchen",
      title: "Recipe Sharing Platform",
      imgSrc: "/images/fruitables.png",
      category: "Full-Stack",
      subCategory: "Web Applications",
      liveUrl: "https://recipe-kitchen.vercel.app/",
      githubUrl: "https://github.com/Neha12Sharma",
      summary: "Interactive recipe publishing and culinary discovery hub allowing users to browse, create, and bookmark step-by-step culinary guides.",
      points: [
        "Built a full-stack recipe sharing platform (MERN Stack) enabling users to create, explore, and manage recipes.",
        "Implemented secure authentication and access control using JWT and bcrypt to protect user accounts and submissions.",
        "Designed clean, responsive interfaces with instant search and category browsing."
      ],
      tags: ["React", "Node.js", "JWT", "Bcrypt", "TailwindCSS", "E-Commerce"],
      featured: true
    }
  ],

  // Exact skill groups matching the user's reference screenshot
  skillsSections: [
    {
      category: "Core Computer Science",
      icon: "Database",
      iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      skills: [
        { imgSrc: "/images/dsa.png", label: "Data Structures & Algorithms", desc: "C/C++ DSA & LeetCode Practice" },
        { imgSrc: "/images/cs-icon.svg", label: "OOPs", desc: "Inheritance, Polymorphism & Design" },
        { imgSrc: "/images/cs-icon.svg", label: "Operating Systems", desc: "Process Control & Memory Management" },
        { imgSrc: "/images/cs-icon.svg", label: "DBMS", desc: "Relational Schemas & NoSQL" },
        { imgSrc: "/images/cs-icon.svg", label: "Computer Networks", desc: "TCP/IP, HTTP/HTTPS Protocols" }
      ]
    },
    {
      category: "Web Development (MERN Stack)",
      icon: "Layout",
      iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      skills: [
        { imgSrc: "/images/html5.png", label: "HTML5", desc: "Semantic Markup & Standards" },
        { imgSrc: "/images/css3.svg", label: "CSS3", desc: "Responsive Design & Flex/Grid" },
        { imgSrc: "/images/javascript.svg", label: "JavaScript (ES6+)", desc: "Asynchronous, DOM & Modern JS" },
        { imgSrc: "/images/react.svg", label: "React.js", desc: "Component Architecture & Hooks" },
        { imgSrc: "/images/nodejs.svg", label: "Node.js", desc: "Backend Server & Async I/O" },
        { imgSrc: "/images/expressjs.svg", label: "Express.js", desc: "RESTful APIs & Middleware" },
        { imgSrc: "/images/mongodb.svg", label: "MongoDB", desc: "NoSQL Schemas & Collections" },
        { imgSrc: "/images/tailwindcss.svg", label: "Tailwind CSS", desc: "Modern Utility-First UI" },
        { imgSrc: "/images/bootstrap.png", label: "Bootstrap", desc: "Rapid Responsive Layouts" }
      ]
    },
    {
      category: "Developer Tools & Environment",
      icon: "Wrench",
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      skills: [
        { imgSrc: "/images/git.png", label: "Git & GitHub", desc: "Branching, PRs & Version Control" },
        { imgSrc: "/images/vscode.svg", label: "VS Code", desc: "Primary Development IDE" },
        { imgSrc: "/images/postman.svg", label: "Postman", desc: "API Endpoint Testing" },
        { imgSrc: "/images/mongodb.svg", label: "REST APIs & JWT", desc: "Stateless Secure Authentication" }
      ]
    },
    {
      category: "Programming Languages",
      icon: "Code2",
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      skills: [
        { imgSrc: "/images/c.svg", label: "C", desc: "Procedural Logic & Memory" },
        { imgSrc: "/images/cpp.png", label: "C++", desc: "STL, OOPs & DSA Problems" },
        { imgSrc: "/images/javascript.svg", label: "JavaScript", desc: "Full-Stack Scripting" }
      ]
    },
    {
      category: "Data Analytics & Reporting",
      icon: "BarChart3",
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      skills: [
        { imgSrc: "/images/powerbi.svg", label: "Microsoft Power BI", desc: "Interactive KPI Dashboards & Reports" },
        { imgSrc: "/images/excel.svg", label: "Microsoft Excel", desc: "Advanced Formulas & Data Modeling" }
      ]
    }
  ],

  experience: [
    {
      role: "MERN Stack Developer Intern",
      company: "Excellence Technology Pvt. Ltd., Mohali",
      location: "Mohali, Punjab",
      period: "June 2026 – July 2026",
      badge: "Production MERN",
      points: [
        "Developed ML and full-stack MERN predictive modules using React, Node.js, Express, and MongoDB.",
        "Performed data preprocessing, feature engineering, and exploratory data analysis on real datasets.",
        "Integrated REST APIs with JWT authentication and secure role-based session management."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Coding Blocks (Geeta University, Panipat)",
      location: "Panipat, Haryana",
      period: "June 2025 – August 2025",
      badge: "Full-Stack Development",
      points: [
        "Designed end-to-end full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Created responsive UIs and integrated RESTful APIs to ensure efficient data flow.",
        "Collaborated in Agile project sprints with Git version control."
      ]
    },
    {
      role: "Frontend & Data Analytics Intern",
      company: "Geeta Technical Hub",
      location: "Panipat, Haryana",
      period: "June 2024 – July 2024",
      badge: "Frontend & Analytics",
      points: [
        "Developed responsive web interfaces using HTML5, CSS3, modern JavaScript, and Tailwind CSS.",
        "Conducted data analytics and built visual dashboards utilizing Microsoft Excel and Power BI.",
        "Optimized frontend performance, cross-browser compatibility, and modular reusable component design."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech, Computer Science & Engineering (Current Education)",
      institution: "Geeta University, Panipat",
      location: "Panipat, Haryana",
      period: "Aug 2023 – June 2027",
      status: "Pursuing",
      badge: "Current Degree",
      points: [
        "Specializing in Computer Science & Engineering with core coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Full-Stack Web Development.",
        "Active participant in hackathons, competitive coding challenges, and tech community workshops."
      ]
    },
    {
      degree: "12th Standard (Senior Secondary)",
      institution: "Ozone International School, Chiri",
      location: "Chiri (Rohtak)",
      period: "Apr 2022 – Apr 2023",
      status: "Completed",
      badge: "12th Standard",
      points: [
        "Completed Senior Secondary education with focus on Science, Mathematics, and Computer fundamentals.",
        "Demonstrated consistent academic excellence and problem-solving aptitude."
      ]
    },
    {
      degree: "10th Standard (Secondary)",
      institution: "Ozone International School, Chiri",
      location: "Chiri (Rohtak)",
      period: "Apr 2020 – Apr 2021",
      status: "Completed",
      badge: "10th Standard",
      points: [
        "Completed foundational secondary school curriculum with distinction in Science and Mathematics.",
        "Active participant in science exhibitions, quiz competitions, and leadership activities."
      ]
    }
  ],

  endorsements: [
    {
      content: "Neha has shown incredible growth in Data Structures and Algorithms. Her consistency in problem solving and dedication to clean engineering is commendable.",
      name: "Pankaj Bajaj",
      imgSrc: "/images/pankaj-bajaj.jpeg",
      company: "Geeta Technical Hub",
      rating: 5
    },
    {
      content: "Neha Vats is one of our most active students, constantly learning and building. Her full-stack engineering skills set a high standard for her peers.",
      name: "Geeta Technical Hub",
      imgSrc: "/images/GTH.jpeg",
      company: "Geeta University",
      rating: 5
    },
    {
      content: "1000+ LeetCode problems solved across dynamic programming, trees, and graphs. Exceptional algorithmic problem-solving accuracy.",
      name: "LeetCode CP Benchmark",
      imgSrc: "/images/leetcodeprofile.jpg",
      company: "LeetCode (Rating 1551)",
      rating: 5
    },
    {
      content: "Engineered 10+ scalable web solutions using React, Node.js, Express, MongoDB, and Tailwind CSS with real-time features.",
      name: "GitHub Open Source",
      imgSrc: "/images/git.png",
      company: "GitHub Portfolio",
      rating: 5
    },
    {
      content: "During her internship, Neha displayed strong technical and analytical skills in algorithm design, debugging, and software architecture.",
      name: "Technical Mentorship",
      imgSrc: "/images/GU.jpeg",
      company: "Coding Blocks",
      rating: 5
    },
    {
      content: "Her discipline and determination to keep mastering Data Structures and Full-Stack Engineering makes her a standout candidate for SDE roles.",
      name: "Academic Review",
      imgSrc: "/images/aakash.jpeg",
      company: "Geeta University",
      rating: 5
    }
  ],

  certificates: [
    {
      title: "Internet of Things (IoT)",
      issuer: "Technical Recognition",
      category: "IoT & Smart Systems",
      desc: "Hands-on certification in IoT hardware interfacing, sensor networks, cloud data transmission, and smart connected automation.",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      icon: "Cpu"
    },
    {
      title: "Google Cloud Platform",
      issuer: "Google Cloud",
      category: "Cloud Infrastructure",
      desc: "Cloud computing fundamentals, compute engine deployments, IAM policies, and cloud infrastructure.",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      icon: "Cloud"
    },
    {
      title: "Hackforge 2.0",
      issuer: "National Hackathon",
      category: "Hackathon Finalist",
      desc: "Competitive prototyping and full-stack software development under intensive 36-hour sprint constraints.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      icon: "Trophy"
    },
    {
      title: "iCat Certificate",
      issuer: "Technical Assessment",
      category: "Aptitude & Technical Proficiency",
      desc: "Verified technical assessment and computational problem-solving evaluation.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      icon: "Award"
    }
  ]
};
