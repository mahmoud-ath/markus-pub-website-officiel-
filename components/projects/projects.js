export const projects = [
  {
    id: 'voyages',
    title: 'E-commerce Website',
    breadcrumb: ['Home', 'E-commerce Website'],
    images: [
      { src: '/images/1_voyages.jpg', alt: 'Voyages Image 1' },
      { src: '/images/2_voyages.jpg', alt: 'Voyages Image 2' },
      { src: '/images/3_voyages.jpg', alt: 'Voyages Image 3' },
    ],
    description: [
      "Trendy Travel est une plateforme e-commerce moderne conçue pour une agence de voyages souhaitant séduire une clientèle jeune et dynamique.",
      "Le site propose un système de réservation intuitif, un filtrage intelligent des offres, et une interface bilingue FR/EN.",
    ],
    role: "UI/UX Design, Développement Front-End, Intégration eCommerce, Expérience Utilisateur",
    client: "Trendy Travel Agency",
    technologies: "Django, React, Tailwind CSS, PostgreSQL",
    duration: "4 mois",
    projectUrl: "https://mahmoud-ath.github.io/Websites/voyage_elegant",
  },
  {
    id: 'tech-horizon',
    title: 'Tech Horizon',
    breadcrumb: ['Home', 'Tech Horizon'],
    images: [
      { src: '/images/1_tech.jpg', alt: 'Tech Horizon Image 1' },
      { src: '/images/2_tech.jpg', alt: 'Tech Horizon Image 2' },
    ],
    video: {
      src: '/videos/tech horizon.mp4',
      alt: 'Tech Horizon Video',
    },
    description: [
      "Tech Horizon is a full-stack web development project built as a dynamic online magazine for technology enthusiasts. The platform allows users to read, publish, and manage articles on emerging topics like AI, Machine Learning, IoT, Virtual Reality, and Cybersecurity.",
      "It supports role-based access control for Guests, Subscribers, Theme Managers, and Admins. Key features include article submission and moderation, topic-specific discussions, subscription management, content ratings, and real-time analytics for user engagement and article performance."
    ],
    role: "Full-stack Development, UI/UX Design, Content Architecture",
    client: "Tech Horizon Media",
    technologies: "Node.js, Express.js, MongoDB, EJS, Bootstrap 5",
    duration: "4 months",
    projectUrl: "/videos/tech horizon.mp4",
  },
  {
  id: 'stock-master-pro',
  title: 'Stock Master Pro',
  breadcrumb: ['Home', 'Stock Master Pro'],
  images: [
    { src: '/images/task.jpg', alt: 'Stock Master Pro Image 1' },
    { src: '/images/1_stock.jpg', alt: 'Stock Master Pro Image 2' },
    { src: '/images/2_stock.jpg', alt: 'Stock Master Pro Image 3' },
  ],
  description: [
    "Stock Master Pro is a robust inventory management solution built for modern businesses. It simplifies stock tracking, enhances warehouse visibility, and provides real-time analytics through interactive charts and metric dashboards.",
    "The goal was to deliver a scalable platform that combines efficiency with powerful data insights to streamline operations and decision-making."
  ],
  role: "UI Design, Dashboard Development, Backend Engineering, Data Visualization",
  client: "Stock Master Pro Inc.",
  technologies: "Laravel, Vue.js, Chart.js, MySQL, Tailwind CSS",
  duration: "5 months",
  projectUrl: "https://mahmoud-ath.github.io/Websites/StockMasterPro.html",
},
{
  id: 'morocco-accident-analysis',
  title: 'Morocco Accident Data Analysis',
  breadcrumb: ['Home', 'Morocco Accident Data Analysis'],
  video: {
    src: '/videos/Cartographie et Analyse des Accidents de la Route au Maroc.mp4',
    alt: 'Morocco Accident Data Analysis Video',
  },
  images: [
    { src: '/images/Data_visualization.jpg', alt: 'Data Visualization Image 1' },
    { src: '/images/Data_visualization.jpg', alt: 'Data Visualization Image 2' },
  ],
  description: [
    "🚦 The Morocco Accident Data Analysis project is a geographic and statistical platform designed to uncover insights from traffic accident data across the country. It provides authorities and researchers with a tool to visualize trends, high-risk zones, and traffic incident metrics.",
    "The system leverages interactive maps and real-time data filtering to support smarter safety strategies and informed decision-making."
  ],
  role: "Data Cleaning, Geospatial Mapping, Front-End Interface, Statistical Analysis",
  client: "Public Data Initiative Morocco",
  technologies: "Python, Pandas, NumPy, GeoPandas, Tkinter MapView",
  duration: "3 months",
  projectUrl: "/videos/Cartographie et Analyse des Accidents de la Route au Maroc.mp4",
},
  // other projects...

];
