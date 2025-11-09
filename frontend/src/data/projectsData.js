// Web Development Project Images
import portfolioImg from "../asset/projects/portfolio.avif";
import lmsImg from "../asset/projects/lms.avif";
import restaurantImg from "../asset/projects/restaurant.avif";
import ecommerceImg from "../asset/projects/ecommerce-platform.jpeg";

// Cyber Security Project Images
import intrusionImg from "../asset/projects/intrusion.avif";
import phishingImg from "../asset/projects/phishing.avif";
import encryptionImg from "../asset/projects/encryption.avif";
import scannerImg from "../asset/projects/scanner.avif";
import passwordImg from "../asset/projects/password.avif";

// Blockchain Project Images
import votingImg from "../asset/projects/voting.avif";
import walletImg from "../asset/projects/wallet.avif";
import nftImg from "../asset/projects/nft.avif";
import supplychainImg from "../asset/projects/supplychain.avif";
import crowdfundingImg from "../asset/projects/crowdfunding.avif";

// Mobile App Project Images
import fitnessImg from "../asset/projects/fitness.avif";
import foodAppImg from "../asset/projects/foodApp.avif";
import travelImg from "../asset/projects/travel.avif";
import expenseImg from "../asset/projects/expense.avif";
import bankingImg from "../asset/projects/mobile-banking-app.avif";

// AI/ML Project Images
import imageClassifierImg from "../asset/projects/imageClassifier.avif";
import stockImg from "../asset/projects/stock.avif";
import sentimentImg from "../asset/projects/sentiment.avif";
import chatbotImg from "../asset/projects/ai-chatbot.avif";


export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with real-time inventory, payments, and admin dashboard.",
    image: ecommerceImg,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "AI Chatbot System",
    description:
      "Developed an intelligent chatbot using NLP for automated customer support.",
    image: chatbotImg,
    technologies: ["Python", "TensorFlow", "FastAPI"],
    category: "ai",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Created a mobile banking application with biometric security and real-time transactions.",
    image: bankingImg,
    technologies: ["React Native", "Firebase", "Node.js", "MySQL"],
    category: "mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "Network Intrusion Detection System",
    description:
      "Developed a real-time intrusion detection system that monitors network traffic to detect suspicious activities using machine learning.",
    image: intrusionImg,
    technologies: ["Python", "Scikit-learn", "Wireshark", "Flask"],
    category: "cybersecurity",
    liveUrl: "https://example.com/nids",
    githubUrl: "https://github.com/example/nids"
  },
  {
    id: 5,
    title: "Phishing Detection Tool",
    description:
      "Built a web-based phishing detection tool that analyzes URLs and email content to identify fraudulent links.",
    image: phishingImg,
    technologies: ["React", "TensorFlow", "Flask", "MongoDB"],
    category: "cybersecurity",
    liveUrl: "https://example.com/phishing-detector",
    githubUrl: "https://github.com/example/phishing-detector"
  },
  {
    id: 6,
    title: "Secure File Encryption System",
    description:
      "Created a desktop application that encrypts and decrypts files using AES-256 and RSA algorithms for secure file sharing.",
    image: encryptionImg,
    technologies: ["Java", "AES", "RSA", "Swing"],
    category: "cybersecurity",
    liveUrl: "https://example.com/encryption-system",
    githubUrl: "https://github.com/example/encryption-system"
  },
  {
    id: 7,
    title: "Vulnerability Scanner",
    description:
      "Developed a vulnerability scanner that scans web applications for common security flaws such as SQL Injection and XSS.",
    image: scannerImg,
    technologies: ["Python", "Django", "OWASP", "SQLite"],
    category: "cybersecurity",
    liveUrl: "https://example.com/vulnerability-scanner",
    githubUrl: "https://github.com/example/vulnerability-scanner"
  },
  {
    id: 8,
    title: "Password Manager",
    description:
      "Designed a secure password manager that stores encrypted credentials locally and generates strong passwords.",
    image: passwordImg,
    technologies: ["Electron", "Node.js", "CryptoJS", "SQLite"],
    category: "cybersecurity",
    liveUrl: "https://example.com/password-manager",
    githubUrl: "https://github.com/example/password-manager"
  },
  {
    id: 9,
    title: "Decentralized Voting System",
    description:
      "Built a blockchain-based voting system ensuring transparency, anonymity, and immutability of votes.",
    image: votingImg,
    technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
    category: "blockchain",
    liveUrl: "https://example.com/voting-dapp",
    githubUrl: "https://github.com/example/voting-dapp"
  },
  {
    id: 10,
    title: "Crypto Wallet Application",
    description:
      "Developed a crypto wallet app that allows users to store, send, and receive multiple cryptocurrencies securely.",
    image: walletImg,
    technologies: ["React Native", "Node.js", "Ethereum", "Firebase"],
    category: "blockchain",
    liveUrl: "https://example.com/crypto-wallet",
    githubUrl: "https://github.com/example/crypto-wallet"
  },
  {
    id: 11,
    title: "NFT Marketplace",
    description:
      "Created an NFT marketplace for minting, buying, and selling digital collectibles using smart contracts.",
    image: nftImg,
    technologies: ["Solidity", "IPFS", "Next.js", "Hardhat"],
    category: "blockchain",
    liveUrl: "https://example.com/nft-marketplace",
    githubUrl: "https://github.com/example/nft-marketplace"
  },
  {
    id: 12,
    title: "Supply Chain Tracker",
    description:
      "Implemented a blockchain-based supply chain solution to track goods' authenticity and movement across suppliers.",
    image: supplychainImg,
    technologies: ["Hyperledger", "React", "Node.js", "Docker"],
    category: "blockchain",
    liveUrl: "https://example.com/supply-chain",
    githubUrl: "https://github.com/example/supply-chain"
  },
  {
    id: 13,
    title: "Tokenized Crowdfunding Platform",
    description:
      "Developed a crowdfunding platform using blockchain where investors receive tokens in return for funding projects.",
    image: crowdfundingImg,
    technologies: ["Solidity", "Truffle", "React", "Web3.js"],
    category: "blockchain",
    liveUrl: "https://example.com/crowdfunding",
    githubUrl: "https://github.com/example/crowdfunding"
  },
  // Web Development Projects
  {
    id: 14,
    title: "E-Commerce Website",
    description:
      "Developed a responsive e-commerce platform with user authentication, product management, and payment integration.",
    image: ecommerceImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    category: "web",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: 15,
    title: "Company Portfolio Website",
    description:
      "Built a modern portfolio website to showcase the company's services, projects, and team members.",
    image: portfolioImg,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "web",
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/example/portfolio"
  },
  {
    id: 16,
    title: "Online Learning Platform",
    description:
      "Created a learning management system with video streaming, quizzes, and course progress tracking.",
    image: lmsImg,
    technologies: ["Vue.js", "Firebase", "Node.js", "MySQL"],
    category: "web",
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms"
  },
  {
    id: 17,
    title: "Restaurant Reservation System",
    description:
      "Developed a web app that allows users to browse menus, book tables, and order online.",
    image: restaurantImg,
    technologies: ["Angular", "Express", "MongoDB", "Bootstrap"],
    category: "web",
    liveUrl: "https://example.com/restaurant",
    githubUrl: "https://github.com/example/restaurant"
  },

  // Mobile App Projects
  {
    id: 18,
    title: "Fitness Tracker App",
    description:
      "Created a mobile app that tracks workouts, calories, and user progress with personalized dashboards.",
    image: fitnessImg,
    technologies: ["React Native", "Firebase", "Node.js"],
    category: "mobile",
    liveUrl: "https://example.com/fitness-app",
    githubUrl: "https://github.com/example/fitness-app"
  },
  {
    id: 19,
    title: "Food Delivery App",
    description:
      "Developed a food delivery app featuring real-time order tracking and restaurant search.",
    image: foodAppImg,
    technologies: ["Flutter", "Firebase", "Dart"],
    category: "mobile",
    liveUrl: "https://example.com/food-delivery",
    githubUrl: "https://github.com/example/food-delivery"
  },
  {
    id: 20,
    title: "Travel Booking App",
    description:
      "Built an app that allows users to search destinations, compare prices, and book flights and hotels.",
    image: travelImg,
    technologies: ["Kotlin", "SQLite", "Retrofit"],
    category: "mobile",
    liveUrl: "https://example.com/travel-booking",
    githubUrl: "https://github.com/example/travel-booking"
  },
  {
    id: 21,
    title: "Expense Manager App",
    description:
      "Designed a personal finance app that tracks daily expenses and provides visual analytics of spending habits.",
    image: expenseImg,
    technologies: ["Swift", "CoreData", "Charts"],
    category: "mobile",
    liveUrl: "https://example.com/expense-manager",
    githubUrl: "https://github.com/example/expense-manager"
  },

  // AI/ML Projects
  {
    id: 22,
    title: "Image Classification Model",
    description:
      "Built a CNN-based image classifier that identifies objects from images with high accuracy.",
    image: imageClassifierImg,
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    category: "ai",
    liveUrl: "https://example.com/image-classifier",
    githubUrl: "https://github.com/example/image-classifier"
  },
  {
    id: 23,
    title: "Chatbot for Customer Support",
    description:
      "Developed an AI-powered chatbot to assist users with queries and automate customer support responses.",
    image: chatbotImg,
    technologies: ["Python", "Rasa", "Flask", "NLTK"],
    category: "ai",
    liveUrl: "https://example.com/chatbot",
    githubUrl: "https://github.com/example/chatbot"
  },
  {
    id: 24,
    title: "Stock Price Prediction",
    description:
      "Implemented an LSTM-based neural network to predict stock price movements based on historical data.",
    image: stockImg,
    technologies: ["Python", "Pandas", "Keras", "Matplotlib"],
    category: "ai",
    liveUrl: "https://example.com/stock-prediction",
    githubUrl: "https://github.com/example/stock-prediction"
  },
  {
    id: 25,
    title: "Sentiment Analysis System",
    description:
      "Created a sentiment analysis tool that classifies user reviews as positive, negative, or neutral.",
    image: sentimentImg,
    technologies: ["Python", "Scikit-learn", "Flask", "NLTK"],
    category: "ai",
    liveUrl: "https://example.com/sentiment-analysis",
    githubUrl: "https://github.com/example/sentiment-analysis"
  }
];
