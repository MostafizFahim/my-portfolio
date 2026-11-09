import { SkillGroup } from '../types/skill.types';

export const skillsData: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Enterprise Backend Engineering',
    description:
      'Designing robust backend services, secure REST APIs, and enterprise transaction workflows.',
    skills: [
      { name: 'Java (17 / 21)', category: 'backend', level: 'advanced', highlight: true },
      { name: 'Spring Boot', category: 'backend', level: 'advanced', highlight: true },
      { name: 'Spring MVC', category: 'backend', level: 'advanced', highlight: true },
      { name: 'REST APIs', category: 'backend', level: 'advanced', highlight: true },
      { name: 'C# / ASP.NET Core', category: 'backend', level: 'intermediate' },
      { name: 'JSP & Servlets', category: 'backend', level: 'intermediate' },
      { name: 'JWT Authentication', category: 'backend', level: 'advanced' },
      { name: 'Role-Based Access Control', category: 'backend', level: 'advanced' },
    ],
  },
  {
    id: 'databases',
    title: 'Database Systems & Data Modeling',
    description:
      'Relational database architecture, transaction consistency, and query optimization.',
    skills: [
      { name: 'MySQL', category: 'databases', level: 'advanced', highlight: true },
      { name: 'Microsoft SQL Server', category: 'databases', level: 'advanced', highlight: true },
      { name: 'PostgreSQL', category: 'databases', level: 'intermediate', highlight: true },
      { name: 'SQLite', category: 'databases', level: 'intermediate' },
      { name: 'JPA & Hibernate', category: 'databases', level: 'intermediate' },
      { name: 'Entity Framework Core', category: 'databases', level: 'intermediate' },
      { name: 'T-SQL Stored Procedures', category: 'databases', level: 'intermediate' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'Applied AI & Machine Learning',
    description:
      'Deep learning computer vision models, retrieval pipelines, and LLM application development.',
    skills: [
      { name: 'Python', category: 'ai-ml', level: 'advanced', highlight: true },
      { name: 'TensorFlow / Keras', category: 'ai-ml', level: 'intermediate', highlight: true },
      { name: 'Deep Convolutional Networks (CNN)', category: 'ai-ml', level: 'intermediate', highlight: true },
      { name: 'Transfer Learning (VGG16)', category: 'ai-ml', level: 'intermediate' },
      { name: 'Vision Transformers (ViT)', category: 'ai-ml', level: 'intermediate' },
      { name: 'Google Gemini API', category: 'ai-ml', level: 'intermediate', highlight: true },
      { name: 'RAG Retrieval Architectures', category: 'ai-ml', level: 'intermediate' },
      { name: 'NumPy & Pandas', category: 'ai-ml', level: 'advanced' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Full-Stack Development',
    description:
      'Building performant, accessible web and mobile user interfaces with clean component architectures.',
    skills: [
      { name: 'TypeScript', category: 'frontend', level: 'advanced', highlight: true },
      { name: 'JavaScript (ES6+)', category: 'frontend', level: 'advanced' },
      { name: 'Angular', category: 'frontend', level: 'advanced', highlight: true },
      { name: 'React', category: 'frontend', level: 'advanced', highlight: true },
      { name: 'Next.js', category: 'frontend', level: 'intermediate' },
      { name: 'Tailwind CSS', category: 'frontend', level: 'advanced', highlight: true },
      { name: 'Bootstrap', category: 'frontend', level: 'advanced' },
      { name: 'Kotlin (Android)', category: 'frontend', level: 'intermediate' },
    ],
  },
  {
    id: 'devops-tools',
    title: 'DevOps, Tooling & Embedded Systems',
    description:
      'Developer workflow automation, containerization, cloud hosting, and embedded microcontrollers.',
    skills: [
      { name: 'Git & GitHub', category: 'tools', level: 'advanced', highlight: true },
      { name: 'Docker', category: 'tools', level: 'intermediate' },
      { name: 'Postman & Swagger', category: 'tools', level: 'advanced' },
      { name: 'Vercel & Railway Deployment', category: 'tools', level: 'advanced' },
      { name: 'Linux / Bash', category: 'tools', level: 'intermediate' },
      { name: 'ESP32 & Arduino', category: 'tools', level: 'advanced' },
      { name: 'Firebase Realtime Database', category: 'tools', level: 'intermediate' },
      { name: 'ThingSpeak IoT Telemetry', category: 'tools', level: 'intermediate' },
    ],
  },
  {
    id: 'decentralized',
    title: 'Blockchain & Decentralized Architecture',
    description:
      'Permissioned distributed ledgers, decentralized storage, and smart contract execution.',
    skills: [
      { name: 'Ethereum (Geth)', category: 'blockchain', level: 'intermediate' },
      { name: 'Solidity Smart Contracts', category: 'blockchain', level: 'intermediate' },
      { name: 'IPFS Decentralized Storage', category: 'blockchain', level: 'intermediate' },
      { name: 'MetaMask & Web3.js', category: 'blockchain', level: 'intermediate' },
      { name: 'RAFT Consensus Protocol', category: 'blockchain', level: 'intermediate' },
    ],
  },
];
