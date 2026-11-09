import { Project } from '../types/project.types';

export const projectsData: Project[] = [
  // ----------------------------------------------------
  // TIER 1: FEATURED ENGINEERING PROJECTS
  // ----------------------------------------------------
  {
    id: 'ai-knowledge-base',
    slug: 'ai-knowledge-base-assistant',
    title: 'AI Knowledge Base Assistant',
    tagline:
      'Deployed document Q&A assistant featuring Gemini API, semantic text chunking, keyword retrieval, and JWT-authenticated REST APIs.',
    category: 'ai-ml',
    categoryLabel: 'Applied AI / Full Stack',
    tier: 'featured',
    ownership: 'creator',
    thumbnail: 'ai-knowledge-base-dashboard.svg',
    technologies: [
      'ASP.NET Core 8 Web API',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Google Gemini API',
      'SQLite',
      'EF Core',
      'JWT',
      'Docker',
    ],
    metrics: [
      { label: 'Model', value: 'Gemini 2.5 Flash' },
      { label: 'Retrieval', value: 'Top-5 Context Chunks' },
      { label: 'Deployment', value: 'Vercel + Railway' },
    ],
    problemStatement:
      'Organizations and individual knowledge workers manage diverse unstructured documents (PDFs, CSVs). Extracting verified, context-accurate answers without hallucination requires automated text ingestion, semantic boundary chunking, and strict context injection into LLM prompts.',
    engineeringSolutions: [
      'Engineered an ASP.NET Core 8 Web API backend implementing EF Core and SQLite persistence.',
      'Implemented automatic document parsing and chunking for uploaded PDF and CSV files.',
      'Constructed a lightweight keyword and scoring retrieval pipeline that extracts the top-5 relevant chunks per query.',
      'Implemented prompt guardrails instructing Gemini to formulate answers strictly from retrieved document context.',
      'Enforced stateless JWT bearer authentication with PBKDF2 password hashing protecting upload and chat history endpoints.',
      'Deployed production services using Docker on Railway (backend) and Vercel (frontend).',
    ],
    highlights: [
      'Live deployed frontend and backend with operational health endpoints',
      'Full authentication and per-user document isolation',
      'Zero-cost operational architecture using SQLite and Railway volume mounts',
    ],
    githubUrl: 'https://github.com/MostafizFahim/ai-knowledge-base-assistant',
    demoUrl: 'https://ai-knowledge-base-assistant-nu.vercel.app',
    apiHealthUrl:
      'https://ai-knowledge-base-assistant-production.up.railway.app/health',
  },
  {
    id: 'banking-application',
    slug: 'banking-application',
    title: 'Banking Application',
    tagline:
      'Production-grade full-stack banking portal with role-based security, financial transaction workflows, and analytics dashboards.',
    category: 'backend',
    categoryLabel: 'Enterprise Backend / Full Stack',
    tier: 'featured',
    ownership: 'creator',
    thumbnail: 'bankingDashboard.png',
    technologies: [
      'Java 21',
      'Spring Boot 3.2.4',
      'Spring Security',
      'Angular 21',
      'TypeScript',
      'PostgreSQL (Supabase)',
      'Spring Data JPA',
      'JWT',
      'Chart.js',
      'Docker',
    ],
    metrics: [
      { label: 'Backend Endpoints', value: '15+ Secure APIs' },
      { label: 'User Roles', value: 'Customer & Admin' },
      { label: 'Persistence', value: 'Supabase PostgreSQL' },
    ],
    problemStatement:
      'Financial applications require strict transactional ACID compliance, role-based authorization, comprehensive audit trails, and intuitive analytics for both customers and bank administrators.',
    engineeringSolutions: [
      'Architected a layered Spring Boot backend with dedicated controllers, DTOs, JPA entities, and repository layers.',
      'Implemented stateless JWT authentication with BCrypt password hashing and custom Spring Security filters.',
      'Constructed role-based authorization providing separated customer workflows (deposits, withdrawals, account overview) and admin workflows (account freeze/activate, account deletion, global audit logs).',
      'Built an Angular 21 frontend utilizing standalone components, route guards, and HTTP interceptors for automatic token injection.',
      'Integrated Chart.js for real-time visual deposit and withdrawal trend tracking with automated CSV transaction ledger export.',
      'Deployed using containerized Docker on Railway with Supabase managed PostgreSQL.',
    ],
    highlights: [
      'Full role-based security separating Customer and Administrator portals',
      'Stateless JWT session handling with expired token interception',
      'Production database persistence deployed on Supabase PostgreSQL',
    ],
    githubUrl: 'https://github.com/MostafizFahim/banking-microservices',
    demoUrl: 'https://banking-microservices-eta.vercel.app/login',
    apiHealthUrl: 'https://banking-api-production-247d.up.railway.app',
  },
  {
    id: 'nextrip-blockchain',
    slug: 'nextrip-blockchain',
    title: 'NexTrip: Decentralized Ride-Sharing Platform',
    tagline:
      'Permissioned Ethereum and IPFS powered ride-sharing network ensuring driver-passenger data privacy and automated smart contracts.',
    category: 'blockchain',
    categoryLabel: 'Blockchain / B.Sc. Thesis',
    tier: 'featured',
    ownership: 'group',
    ownershipNote:
      'B.Sc. Engineering Thesis at Ahsanullah University of Science and Technology (AUST). Co-authored with Sk. Md. Shadman Ifaz and Rayhan Ferdous Srejon under the supervision of Md. Khairul Hasan. Associated with IEEE ICCIT 2025 and IJAIT publications.',
    thumbnail: 'nextrip.png',
    technologies: [
      'Ethereum (Geth)',
      'Solidity Smart Contracts',
      'IPFS',
      'React',
      'Node.js',
      'MetaMask',
      'Material UI',
    ],
    metrics: [
      { label: 'Blockchain', value: 'Private Ethereum Geth' },
      { label: 'Storage', value: 'IPFS Decentralized' },
      { label: 'Publication', value: 'IEEE ICCIT 2025' },
    ],
    problemStatement:
      'Centralized commercial ride-sharing platforms monopolize passenger and driver telemetry, compromise personal privacy through continuous tracking, and charge high intermediary commissions on transactions.',
    engineeringSolutions: [
      'Designed a hybrid on-chain and off-chain decentralized architecture.',
      'Engineered Solidity smart contracts on a private Ethereum Geth network for transparent user registration, ride booking, and fare settlements.',
      'Integrated IPFS for decentralized off-chain storage of trip telemetry, user documents, and system logs with cryptographic proof hashes stored on-chain.',
      'Implemented Web3 MetaMask wallet connectivity for secure transaction signing and authentication.',
      'Developed a React web interface and companion mobile application for real-time ride tracking and driver dispatch.',
      'Benchmarked system performance across throughput (TPS), latency, and gas consumption under concurrent load.',
    ],
    highlights: [
      'Undergraduate thesis resulting in an accepted IEEE ICCIT 2025 conference publication',
      'Complete private Ethereum network with bootnodes, mining nodes, and smart contract contracts',
      'Functional end-to-end booking workflow connected to decentralized IPFS storage',
    ],
    githubUrl:
      'https://github.com/MostafizFahim/Ride-Sharing-Dapp-Web-Thesis-project',
    githubMobileUrl:
      'https://github.com/MostafizFahim/NexTrip-Ride-Sharing-Dapp-Mobile',
    videoUrl:
      'https://drive.google.com/file/d/1RJ74MUg7t770ObmyK_L1EodLKGa3DaoE/view?usp=sharing',
  },
  {
    id: 'agronet-disease-detection',
    slug: 'agronet-disease-detection',
    title: 'AgroNet: Deep Learning Crop Disease Classification',
    tagline:
      'Comparative deep learning research comparing CNN, VGG16, Vision Transformer, and Hybrid feature fusion for cucumber leaf pathologies.',
    category: 'ai-ml',
    categoryLabel: 'Applied AI / Deep Learning',
    tier: 'featured',
    ownership: 'contribution',
    ownershipNote:
      'Implementation contribution to sister’s project. Dataset obtained from Kaggle. Note: This project is an applied deep learning study and is not associated with an academic publication.',
    thumbnail: 'leaf.png',
    technologies: [
      'Python',
      'TensorFlow / Keras',
      'Custom Deep CNN',
      'VGG16 Transfer Learning',
      'Vision Transformer (ViT)',
      'NumPy',
      'Matplotlib',
    ],
    metrics: [
      { label: 'Custom CNN', value: '94.12% Accuracy' },
      { label: 'Hybrid Model', value: '94.12% Accuracy' },
      { label: 'VGG16 Model', value: '92.16% Accuracy' },
      { label: 'Vision Transformer', value: '90.20% Accuracy' },
    ],
    problemStatement:
      'Early detection of agricultural crop disease is critical for food security and yield optimization. Visual diagnostic inspection of cucumber leaves is labor-intensive and prone to human error, necessitating high-accuracy automated computer vision models.',
    engineeringSolutions: [
      'Developed and evaluated deep learning models for cucumber leaf disease classification across 3 classes: Healthy leaves, Downy mildew, and Powdery mildew.',
      'Built a pipeline implementing image resizing (224x224), pixel normalization, and training data augmentation (rotation, zoom, shifts).',
      'Implemented four distinct neural network architectures: a custom Deep CNN baseline, an ImageNet-pretrained VGG16 transfer learning model, a Vision Transformer (ViT), and a proposed Hybrid AgroNet model.',
      'Constructed a hybrid feature fusion layer combining representations extracted from CNN, VGG16, and ViT branches.',
      'Evaluated all models under identical validation splits using precision, recall, F1-score, and confusion matrices.',
      'Demonstrated that both the custom CNN baseline and the Hybrid AgroNet achieved the joint-best accuracy of 94.12% (94.19% F1-score).',
    ],
    highlights: [
      'Rigorous experimental comparison of 4 deep learning paradigms',
      'Joint-best accuracy of 94.12% validated across confusion matrices',
      'Complete Jupyter notebook evaluation pipeline preserved on GitHub',
    ],
    githubUrl:
      'https://github.com/MostafizFahim/AgroNet-Cucumber-Leaf-Disease-Classification',
  },
  {
    id: 'smart-iot-healthcare',
    slug: 'smart-iot-healthcare',
    title: 'Smart IoT Healthcare Monitoring System',
    tagline:
      'Biomedical hardware telemetry prototype tracking vital signs (ECG, SpO2, Heart Rate, Temperature) with dual cloud synchronization.',
    category: 'iot',
    categoryLabel: 'IoT / Embedded Systems',
    tier: 'featured',
    ownership: 'group',
    ownershipNote:
      'Collaborative academic group project (co-authored by Mostafizur Rahman Fahim, Asadut Jaman, Naeema Jannat, Sayeda Fatema Nimu, Amrita Dewanjee). Hardware prototyping, sensor interfacing, and cloud integration were implemented predominantly by Mostafizur Rahman Fahim.',
    disclaimer:
      'Academic and educational IoT prototype developed for vital sign telemetry; not certified as a clinical medical device.',
    thumbnail: 'iot.png',
    technologies: [
      'ESP32 Dev Kit',
      'MAX30102 (SpO2/HR)',
      'AD8232 (ECG Sensor)',
      'DS18B20 (Temperature)',
      'DHT11 (Ambient)',
      'SSD1306 OLED',
      'Firebase Realtime DB',
      'ThingSpeak',
      'C/C++',
    ],
    metrics: [
      { label: 'Sensors', value: '4 Biomedical Sensors' },
      { label: 'Cloud Sync', value: 'Firebase + ThingSpeak' },
      { label: 'Local Display', value: '1-2s Refresh Rate' },
    ],
    problemStatement:
      'Continuous physiological monitoring is vital for vulnerable patients, yet traditional hospital-grade monitoring units are stationary, expensive, and unavailable for remote home care scenarios.',
    engineeringSolutions: [
      'Integrated multiple biomedical sensors with an ESP32 microcontroller: MAX30102 for heart rate and SpO2, AD8232 for raw ECG signal capture, and DS18B20 for accurate body temperature.',
      'Implemented on-device OLED display rendering for instantaneous patient-side vital sign feedback.',
      'Engineered dual cloud telemetry pipelines: streaming real-time historical time-series data to Firebase and real-time visualization graphs to ThingSpeak.',
      'Developed an asynchronous mobile-responsive web dashboard hosted directly from the ESP32 server.',
      'Implemented a lightweight threshold-based arrhythmia detection algorithm on the microcontroller to flag irregular ECG signal segments.',
    ],
    highlights: [
      'Multi-sensor hardware prototype verified with real biomedical transducers',
      'Dual-cloud logging with sub-15s cloud synchronization and 1-2s local refresh',
      'Integrated on-device arrhythmia irregularity detection routine',
    ],
    githubUrl:
      'https://github.com/MostafizFahim/Smart-IoT-Healthcare-Real-Time-Vital-Sign-Tracking-and-ECG-Arrhythmia-Detection-Using-ESP32',
  },

  // ----------------------------------------------------
  // TIER 2: MORE ENGINEERING PROJECTS (SECONDARY / EXPANDABLE)
  // ----------------------------------------------------
  {
    id: 'cloud-restaurant',
    slug: 'cloud-restaurant',
    title: 'Cloud Restaurant Management System',
    tagline:
      'Full-featured online food ordering and restaurant operations platform with user checkout, payment processing, and admin reporting.',
    category: 'fullstack',
    categoryLabel: 'Full Stack / Enterprise',
    tier: 'secondary',
    ownership: 'group',
    ownershipNote:
      'Academic group project for Course CSE 3224 (Information System Design Lab at AUST). Co-developed with Naeema Jannat and Asadut Jaman.',
    thumbnail: 'cloud-restaurant.png',
    technologies: [
      'C# ASP.NET Web Forms',
      'Microsoft SQL Server',
      'T-SQL Stored Procedures',
      'Bootstrap',
      'iTextSharp',
      '.NET Framework 4.8',
    ],
    problemStatement:
      'Restaurant operations require integrated menu cataloging, customer cart handling, order state tracking, and administrative financial reporting.',
    engineeringSolutions: [
      'Developed user and admin modules utilizing ASP.NET Web Forms and C#.',
      'Designed a normalized Microsoft SQL Server database schema with stored procedures and table-valued parameters.',
      'Implemented PDF invoice generation and selling report exports using iTextSharp.',
    ],
    highlights: [
      'Complete administrative dashboard managing categories, food products, and orders',
      'Normalized SQL Server database restore script and comprehensive documentation',
    ],
    githubUrl: 'https://github.com/MostafizFahim/Cloud-Restaurant',
  },
  {
    id: 'keystone-education',
    slug: 'keystone-education',
    title: 'Keystone Education Consultancy',
    tagline:
      'Modern, high-performance web platform built with Next.js and Tailwind CSS for an overseas education consultancy agency.',
    category: 'fullstack',
    categoryLabel: 'Web Application',
    tier: 'secondary',
    ownership: 'creator',
    thumbnail: 'keystone.png',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Geist Font', 'Vercel'],
    problemStatement:
      'Education consultancy firms require fast-loading, mobile-optimized marketing platforms presenting university study programs, visa guidance, and lead generation.',
    engineeringSolutions: [
      'Constructed a responsive, modern marketing site with Next.js App Router and Tailwind CSS.',
      'Implemented structured destination pages, a 6-step study abroad process guide, and interactive student inquiry forms.',
      'Optimized font delivery and assets for fast loading on Vercel.',
    ],
    highlights: [
      'Production deployment on Vercel with high mobile responsiveness',
      'Clean typography and component hierarchy using Tailwind CSS',
    ],
    githubUrl: 'https://github.com/MostafizFahim/keystone-education',
    demoUrl: 'https://keystone-education.vercel.app/',
  },
  {
    id: 'hospital-management-php',
    slug: 'hospital-management-system',
    title: 'Hospital Management System (PHP)',
    tagline:
      'Role-based medical clinic operations portal built with raw PHP, MySQL, and Bootstrap 5.',
    category: 'fullstack',
    categoryLabel: 'Full Stack Web',
    tier: 'secondary',
    ownership: 'creator',
    thumbnail: 'hospital.png',
    technologies: ['PHP 8+', 'MySQL / MariaDB', 'Bootstrap 5', 'jQuery'],
    problemStatement:
      'Healthcare clinics need coordinated workflows connecting patient appointment booking, doctor medical consultations, electronic prescriptions, and billing receipts.',
    engineeringSolutions: [
      'Built a plain PHP 8+ web application featuring separate role-based workspaces for Super Admin, Admin, Doctor, and Patient.',
      'Engineered an appointment lifecycle supporting booking, admin verification, doctor queueing, and completed consultation states.',
      'Separated prescription access from billing status, allowing patients to view medical instructions prior to bill settlement.',
    ],
    highlights: [
      'Comprehensive role-based access control without external framework bloat',
      'Complete relational database schema handling clinical consultations and billing',
    ],
    githubUrl: 'https://github.com/MostafizFahim/Hospital-Management-System',
  },
  {
    id: 'better-life-hospital-java',
    slug: 'better-life-hospital',
    title: 'Better Life Hospital (Java Desktop)',
    tagline:
      'Java Swing desktop management system for patient records, appointments, doctor scheduling, and pharmacy sales.',
    category: 'backend',
    categoryLabel: 'Desktop Application',
    tier: 'secondary',
    ownership: 'creator',
    thumbnail: 'hospital.png',
    technologies: ['Java', 'Java Swing GUI', 'JDBC', 'MySQL'],
    problemStatement:
      'Desktop medical office administration requires fast offline-capable registration, appointment tracking, and drug inventory sales.',
    engineeringSolutions: [
      'Developed a desktop graphical application using Java Swing and JDBC.',
      'Implemented forms for patient intake, doctor scheduling, appointment creation, and drug sales ledgering.',
      'Connected directly to a local or remote MySQL relational database.',
    ],
    highlights: [
      'Interactive desktop UI with administrative controls and user authentication',
      'Modular database script and automated PowerShell run scripts',
    ],
    githubUrl: 'https://github.com/MostafizFahim/Better-Life-Hospital',
  },
  {
    id: 'automated-toll-collection',
    slug: 'automated-toll-collection',
    title: 'Automated Toll Collection System',
    tagline:
      'Embedded hardware prototype utilizing RFID authentication, IR vehicle detection, and servo gate automation.',
    category: 'iot',
    categoryLabel: 'Embedded Systems',
    tier: 'secondary',
    ownership: 'creator',
    thumbnail: 'iot.png',
    technologies: [
      'Arduino Uno',
      'MFRC522 RFID',
      'Servo Motor',
      'IR Sensors',
      '16x2 I2C LCD',
      'Keypad',
      'C/C++',
    ],
    problemStatement:
      'Manual toll plazas experience congestion, slow transaction throughput, and human error in payment collection.',
    engineeringSolutions: [
      'Constructed an automatic toll gate prototype powered by Arduino.',
      'Integrated MFRC522 RFID card reading to authenticate registered vehicles and deduct toll balances automatically.',
      'Automated barrier opening and closure using infrared (IR) entry/exit sensors and a servo motor.',
      'Integrated an I2C LCD display and a 4x4 keypad enabling in-booth card recharge operations.',
    ],
    highlights: [
      'Working electromechanical prototype with full circuit schematics and report',
      'Autonomous barrier logic driven by dual IR sensor interrupts',
    ],
    githubUrl:
      'https://github.com/MostafizFahim/Automated-Toll-Collection-System-Arduino',
  },
  {
    id: 'shopping-app-kotlin',
    slug: 'shopping-app-kotlin-firebase',
    title: 'Shopping Mobile App (Kotlin)',
    tagline:
      'Native Android e-commerce client built with Kotlin and Firebase for real-time catalog browsing and cart checkout.',
    category: 'fullstack',
    categoryLabel: 'Mobile Application',
    tier: 'secondary',
    ownership: 'creator',
    thumbnail: 'project.png',
    technologies: ['Kotlin', 'Android Studio', 'Firebase Realtime DB', 'Android SDK'],
    problemStatement:
      'Modern mobile consumers require reactive catalog browsing, real-time product updates, and seamless cloud-backed authentication.',
    engineeringSolutions: [
      'Developed a native Android e-commerce application utilizing Kotlin.',
      'Integrated Firebase for real-time product data synchronization, user authentication, and shopping cart persistence.',
    ],
    highlights: [
      'Transition from Java to modern Kotlin Android development',
      'Reactive cloud data synchronization with Firebase',
    ],
    githubUrl:
      'https://github.com/MostafizFahim/Shopping-App-Android-Studio-Kotlin-Firebase',
  },
  {
    id: 'exam-enrollment-android',
    slug: 'exam-enrollment-system',
    title: 'Exam Enrollment System (Android)',
    tagline:
      'Native Android mobile application streamlining student course examination registration and local schedule handling.',
    category: 'fullstack',
    categoryLabel: 'Mobile Application',
    tier: 'secondary',
    ownership: 'creator',
    thumbnail: 'exam.png',
    technologies: ['Java', 'Android Studio', 'Android SDK', 'SQLite'],
    problemStatement:
      'University students need a simple mobile interface to review course prerequisites and register for exam sessions.',
    engineeringSolutions: [
      'Built a native Android client using Java and Android SDK.',
      'Implemented course catalog views and structured exam enrollment workflows with local data persistence.',
    ],
    highlights: [
      'Clean native Android user interface adhering to Android Material principles',
    ],
    githubUrl:
      'https://github.com/MostafizFahim/Exam-Enrollment-System-Android',
  },

  // ----------------------------------------------------
  // TIER 3: ADDITIONAL ACADEMIC WORK (SECONDARY GRAPHICS & GAME DEV)
  // ----------------------------------------------------
  {
    id: 'zombie-attack',
    slug: 'zombie-attack-2d-game',
    title: 'Zombie Attack (2D Arcade Game)',
    tagline:
      'Academic 2D survival arcade game built in C/C++ using the iGraphics library and OpenGL backend.',
    category: 'academic',
    categoryLabel: 'Academic Game Development',
    tier: 'academic',
    ownership: 'creator',
    thumbnail: 'zombie.png',
    technologies: ['C', 'C++', 'iGraphics', 'OpenGL / GLUT', 'Visual Studio C++'],
    problemStatement:
      'Academic exploration of low-level graphics rendering, game loop state management, frame-based bitmap animation, and 2D collision physics.',
    engineeringSolutions: [
      'Engineered an arcade survival game in C/C++ using the iGraphics framework on an OpenGL backend.',
      'Implemented player movement, multi-frame running/shooting sprite animations, enemy spawning, and bullet-collision mathematics.',
      'Built health tracking, dynamic score calculation, and menu state transitions.',
    ],
    highlights: [
      'Complete low-level game loop implementation without external high-level game engines',
      'Custom bitmap sprite animation and audio-event triggering',
    ],
    githubUrl: 'https://github.com/MostafizFahim/Zombie-Attack-i-graphics',
  },
  {
    id: 'threejs-3d-building',
    slug: '3d-building-and-playground',
    title: '3D Building & Playground (Three.js)',
    tagline:
      'Interactive 3D WebGL computer graphics scene featuring architectural structures and custom vertex/fragment shaders.',
    category: 'academic',
    categoryLabel: 'Computer Graphics',
    tier: 'academic',
    ownership: 'creator',
    thumbnail: 'building-playground.png',
    technologies: ['JavaScript', 'Three.js', 'WebGL', 'GLSL Shaders', 'HTML5 Canvas'],
    problemStatement:
      'Academic demonstration of 3D projection, camera controls, lighting models, and material shader mathematics in the browser.',
    engineeringSolutions: [
      'Constructed an interactive 3D architectural environment using Three.js and WebGL.',
      'Implemented ambient and directional lighting, shadow mapping, and OrbitControls for free-form camera inspection.',
      'Experimented with custom vertex and fragment shaders for surface textures and real-time material reflections.',
    ],
    highlights: [
      'Real-time interactive WebGL rendering in the browser',
      'Custom shader experimentation for materials and lighting',
    ],
    githubUrl:
      'https://github.com/MostafizFahim/A-building-and-A-playground-Three.js-project',
  },
];
