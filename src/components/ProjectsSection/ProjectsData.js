// Defining personal projects using camelCase convention
export const personalProjects = [
  {
    id: "project-1",
    title: "Web Flip-Floper",
    description: "A user-friendly e-commerce web application designed to simplify the process of finding and purchasing a wide variety of flip-flops online, delivering a seamless shopping experience right from home.",
    highlights: [
      "User-Friendly E-Commerce Interface",
      "Seamless Online Shopping Experience",
      "Comprehensive Product Catalog",
      "Streamlined Checkout Process"
    ],
    stacks: [
      { id: "html", name: "HTML", iconPath: "html5/html5-original.svg" },
      { id: "css", name: "CSS", iconPath: "css3/css3-original.svg" },
      { id: "php", name: "PHP", iconPath: "php/php-original.svg" },
      { id: "laravel", name: "Laravel 8", iconPath: "laravel/laravel-original.svg" }
    ],
    images: [
      "/images/flipfloper-1.jpg",
      "/images/flipfloper-2.jpg",
      "/images/flipfloper-3.jpg"
    ]
  },
  {
    id: "project-2",
    title: "Djawa Store",
    description: "A comprehensive web-based e-commerce platform tailored for computer and laptop components. It features an intuitive interface and complete functionalities to streamline the hardware purchasing process for tech enthusiasts.",
    highlights: [
      "Hardware-Specific E-Commerce Platform",
      "Intuitive User Interface",
      "Secure Purchasing Process",
      "Comprehensive Product Filtering"
    ],
    stacks: [
      { id: "react", name: "React", iconPath: "react/react-original.svg" },
      { id: "php", name: "PHP", iconPath: "php/php-original.svg" },
      { id: "laravel", name: "Laravel 8", iconPath: "laravel/laravel-original.svg" },
      { id: "mysql", name: "mysql", iconPath: "mysql/mysql-original.svg" }
    ],
    images: [
      "/images/djawastore-1.jpg",
      "/images/djawastore-2.jpg",
      "/images/djawastore-3.jpg"
    ]
  },
  {
    id: "project-3",
    title: "Parkirin",
    description: "A mobile-based cashless payment system for on-street parking in Batam City. Designed for convenience and speed, it allows users to securely pay their daily parking fees through a streamlined mobile interface.",
    highlights: [
      "Cashless On-Street Parking",
      "Streamlined Mobile Payment Workflow",
      "Batam City Area Integration",
      "Secure & Fast Transactions"
    ],
    stacks: [
      { id: "react", name: "React Native", iconPath: "react/react-original.svg" },
      { id: "firebase", name: "Firebase", iconPath: "firebase/firebase-original.svg" },
      { id: "php", name: "PHP", iconPath: "php/php-original.svg" }
    ],
    images: [
      "/images/parkirin-1.jpg",
      "/images/parkirin-2.jpg",
      "/images/parkirin-3.jpg"
    ]
  },
  {
    id: "project-4",
    title: "Stock Rising",
    description: "An award-winning Android multiplayer game adapted from a physical board game to teach stock investment principles. Featuring real-time player interactions, it provides an engaging, interactive, and safe learning environment. (1st Place in Art & Visualization, KMIPN VII 2025).",
    highlights: [
      "1st Place Art & Visualization (KMIPN VII)",
      "Real-Time Multiplayer Interactions",
      "Interactive Stock Investment Learning",
      "Android Platform Integration"
    ],
    stacks: [
      { id: "csharp", name: "C#", iconPath: "csharp/csharp-original.svg" },
      { id: "unity", name: "Unity", iconPath: "unity/unity-original.svg" },
      { id: "firebase", name: "Firebase", iconPath: "firebase/firebase-original.svg" }
    ],
    images: [
      "/images/stockrising-1.jpg",
      "/images/stockrising-2.jpg",
      "/images/stockrising-3.jpg"
    ]
  },
  {
    id: "project-5",
    title: "Waste Management System [WMS]",
    description: "An enterprise-grade web application developed for PT Philips Industries Batam. Built to ensure independent, transparent, and efficient waste data integration and management within a global manufacturing environment.",
    highlights: [
      "Enterprise-Grade Data Integration",
      "Transparent Waste Tracking Workflow",
      "Internal Industrial Deployment",
      "Automated End-to-End Workflow"
    ],
    stacks: [
      { id: "csharp", name: "C#", iconPath: "csharp/csharp-original.svg" },
      { id: "laravel", name: "Laravel 8", iconPath: "laravel/laravel-original.svg" },
      { id: "php", name: "PHP", iconPath: "php/php-original.svg" }
    ],
    images: [
      "/images/wms-1.jpg",
      "/images/wms-2.jpg",
      "/images/wms-3.jpg"
    ]
  }
];

// Exporting sliced arrays using camelCase convention for future expansions
export const initialProjects = personalProjects.slice(0, 5);
export const moreProjects = personalProjects.slice(5);