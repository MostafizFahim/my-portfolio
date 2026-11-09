import { Project } from '../types/project.types';

export const projectsData: Project[] = [
  // ----------------------------------------------------
  // TIER 1: FEATURED ENGINEERING PROJECTS (CASE STUDIES)
  // ----------------------------------------------------
  {
    id: 'banking-application',
    slug: 'banking-application',
    title: 'Personal Banking Application',
    tagline:
      'Full-stack banking portal featuring Spring Boot 3.2, Angular 21, Supabase PostgreSQL, and JWT role-based security.',
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
      { label: 'Runtime', value: 'Java 21 LTS' },
    ],
    disclaimerBox: {
      variant: 'security',
      title: 'Personal Portfolio Project — Independent Implementation',
      text: 'This application is an independent personal project created for portfolio demonstration and skill validation using Java 21, Spring Boot 3.2.4, and Angular 21. It is completely separate from commercial core banking software and workplace systems at Sonali Intellect Limited. It does not process real money or connect to production banking rails.',
    },
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
      'Transactional balance mutation protected by Spring @Transactional isolation',
    ],
    diagramType: 'banking',
    architectureOverview:
      'The application employs a layered client-server architecture. The Angular 21 Single Page Application communicates over HTTPS with a Spring Boot 3.2.4 REST API. Stateless JWT tokens are validated per-request by a custom Spring Security filter chain. Business logic is isolated within service classes executing under @Transactional boundaries, persisting records to a Supabase managed PostgreSQL cloud instance via Spring Data JPA.',
    architecturalDecisions: [
      {
        decision: 'Stateless JWT Bearer Authentication',
        justification:
          'Eliminates server-side session state, allowing horizontal backend scaling while keeping the API fully decoupled from the Angular client. Angular HTTP interceptors automatically attach the bearer token to all authenticated outbound requests.',
      },
      {
        decision: 'Role-Based Authorization (RBAC)',
        justification:
          'Strictly isolates Customer operations (deposits, withdrawals, balance checks) from Administrator capabilities (account freeze, account unfreeze, user deletion, global transaction ledgers) at the controller and method security levels.',
      },
      {
        decision: 'Layered DTO & Entity Separation',
        justification:
          'Prevents internal database JPA entities from leaking directly into API responses, safeguarding sensitive columns such as password hashes and internal account keys.',
      },
    ],
    implementationDeepDive: [
      {
        sectionTitle: 'Spring Boot Backend & Security Layer',
        content:
          'The backend is built on Java 21 and Spring Boot 3.2.4. A custom JwtAuthenticationFilter intercepts incoming HTTP requests, validates the signature and expiration of the bearer token against an HMAC-SHA256 secret, and populates the SecurityContextHolder with user principal and granted authorities. Passwords are encrypted using BCrypt with a cost factor of 12.',
        keyPoints: [
          'Stateless session creation policy (SessionCreationPolicy.STATELESS)',
          'Custom AccessDeniedHandler and AuthenticationEntryPoint returning RFC-7807 compliant error responses',
          'Method-level security enabled via @EnableMethodSecurity(prePostEnabled = true)',
        ],
      },
      {
        sectionTitle: 'Angular 21 Standalone Component Frontend',
        content:
          'The frontend utilizes modern Angular 21 standalone components, removing legacy NgModule boilerplate. Route guards (AuthGuard and AdminGuard) inspect local JWT claims to control navigation, redirecting unauthenticated users to the login route.',
        keyPoints: [
          'Reactive Forms with comprehensive client-side validation rules',
          'HTTP interceptor injecting JWT bearer headers and catching HTTP 401/403 expiry responses',
          'Chart.js visual dashboard illustrating credit versus debit transaction volumes over time',
        ],
      },
      {
        sectionTitle: 'Transactional Integrity & Database Persistence',
        content:
          'Relational tables (users, accounts, transactions) are hosted on Supabase PostgreSQL. Account balance modifications enforce ACID consistency through Spring @Transactional boundaries, verifying sufficient account balance before executing debit operations.',
        keyPoints: [
          'Optimistic locking on Account entities preventing concurrent balance corruption',
          'Automated timestamp tracking for audit compliance on every transaction record',
          'Automated CSV export of account statement ledgers directly from the client',
        ],
      },
    ],
    userContributionStatement:
      'Designed, implemented, containerized, and deployed the entire application independently, including backend Spring Boot services, database schema design, Angular frontend client, and Railway/Vercel deployment pipelines.',
    challengesAndSolutions: [
      {
        challenge:
          'Handling expired JWT tokens gracefully without crashing the Angular frontend during active navigation.',
        solution:
          'Implemented an Angular HTTP error interceptor that detects 401 Unauthorized responses, purges the invalid session storage, displays an informative session-timeout toast notification, and navigates the user cleanly to the login view.',
      },
      {
        challenge:
          'Preventing race conditions and balance desynchronization during rapid concurrent balance mutations.',
        solution:
          'Configured Spring @Transactional with READ_COMMITTED isolation and applied entity version checks to reject conflicting concurrent updates.',
      },
    ],
    limitationsAndFutureWork: [
      'Implement two-factor authentication (2FA) via time-based one-time passwords (TOTP).',
      'Integrate an asynchronous message broker (e.g., Apache Kafka or RabbitMQ) for automated transaction receipts.',
      'Expand automated testing using Testcontainers with live PostgreSQL instances.',
    ],
    githubUrl: 'https://github.com/MostafizFahim/banking-microservices',
    demoUrl: 'https://banking-microservices-eta.vercel.app/login',
    apiHealthUrl: 'https://banking-api-production-247d.up.railway.app',
  },
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
      { label: 'LLM Model', value: 'Gemini 2.5 Flash' },
      { label: 'Retrieval', value: 'Top-5 Context Chunks' },
      { label: 'Deployment', value: 'Vercel + Railway' },
      { label: 'Framework', value: '.NET 8 C#' },
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
      'Prompt guardrails constraining generation strictly to retrieved text chunks',
    ],
    diagramType: 'rag',
    architectureOverview:
      'The application implements a Retrieval-Augmented Generation (RAG) architecture. Uploaded documents (PDF/CSV) are parsed by the ASP.NET Core 8 backend into overlapping text chunks stored in SQLite via Entity Framework Core. When a user submits a query, a scoring retrieval routine identifies the top-5 relevant chunks. These chunks are formatted into a system prompt with strict hallucination guardrails and passed to Google Gemini 2.5 Flash, returning grounded answers.',
    architecturalDecisions: [
      {
        decision: 'Lightweight SQLite Persistence with Volume Mounts',
        justification:
          'Eliminates the cost and operational complexity of external managed databases for personal knowledge bases. Railway persistent volume mounts ensure zero data loss across container redeployments.',
      },
      {
        decision: 'Strict Prompt Grounding Guardrails',
        justification:
          'The LLM system prompt explicitly instructs Gemini to formulate answers strictly from provided document excerpts and state clearly when the document lacks the requested answer, preventing hallucinations.',
      },
      {
        decision: 'Per-User Document Isolation via JWT',
        justification:
          'Uploaded files and chunk indices are keyed to the authenticated user ID extracted from validated JWT claims, preventing multi-tenant data leakage.',
      },
    ],
    implementationDeepDive: [
      {
        sectionTitle: 'Document Ingestion & Chunking Pipeline',
        content:
          'Uploaded PDF files are parsed using lightweight text extraction libraries, while CSV files are transformed into delimited key-value record summaries. The text is partitioned using a sliding window algorithm into chunks with a 100-character overlap buffer to preserve semantic context across paragraph boundaries.',
        keyPoints: [
          'Automatic file validation rejecting unsupported extensions and oversized files',
          'Sliding window chunking algorithm preserving entity continuity across split boundaries',
          'Entity Framework Core migrations maintaining SQLite schema consistency',
        ],
      },
      {
        sectionTitle: 'Retrieval Algorithm & Context Assembly',
        content:
          'User questions are tokenized, normalized, and evaluated against the indexed chunks for the active document. A frequency-based keyword scoring algorithm ranks chunks and extracts the top-5 most relevant passages to populate the LLM context prompt.',
        keyPoints: [
          'Top-5 chunk selection balancing context richness with prompt token budgets',
          'System prompt formatting clearly demarcating context excerpts from user instructions',
          'C# HttpClientFactory with retry resilience managing external Gemini API communication',
        ],
      },
      {
        sectionTitle: 'React & TypeScript User Interface',
        content:
          'The frontend is built with React, Vite, TypeScript, and Tailwind CSS. It features document upload drag-and-drop, real-time chunk status indicators, chat history preservation, and responsive layout for mobile and desktop screens.',
        keyPoints: [
          'Stateless JWT session storage with automatic token inclusion on API calls',
          'Real-time streaming and typing presentation for returned LLM responses',
          'Dedicated health-check ping ensuring backend container readiness',
        ],
      },
    ],
    userContributionStatement:
      'Independently designed the architecture, implemented the ASP.NET Core 8 Web API backend, engineered the document ingestion and retrieval algorithms, built the React frontend, and deployed the production services to Railway and Vercel.',
    challengesAndSolutions: [
      {
        challenge:
          'Context fragmentation when splitting long technical documents across page boundaries.',
        solution:
          'Introduced an overlapping window buffer between consecutive chunks so that sentences straddling boundary thresholds retain full context in adjacent segments.',
      },
      {
        challenge:
          'Deploying SQLite in a containerized ephemeral cloud environment without losing uploaded document indices.',
        solution:
          'Configured Railway persistent volume mounts mapped to the SQLite database storage path, persisting user data across container restarts and builds.',
      },
    ],
    limitationsAndFutureWork: [
      'Current retrieval uses keyword frequency matching rather than dense vector embeddings (e.g., pgvector or ChromaDB).',
      'Future upgrades will incorporate semantic embedding models (e.g., text-embedding-004) for conceptual similarity matching.',
      'Support multi-modal document extraction including charts and image diagrams.',
    ],
    githubUrl: 'https://github.com/MostafizFahim/ai-knowledge-base-assistant',
    demoUrl: 'https://ai-knowledge-base-assistant-nu.vercel.app',
    apiHealthUrl:
      'https://ai-knowledge-base-assistant-production.up.railway.app/health',
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
      'B.Sc. Engineering Thesis at Ahsanullah University of Science and Technology (AUST). Co-authored by Mostafizur Rahman Fahim, Sk. Md. Shadman Ifaz, and Rayhan Ferdous Srejon under the academic supervision of Mr. Md. Khairul Hasan. Accepted and published at IEEE ICCIT 2025 and IJAIT.',
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
      { label: 'Network', value: 'Private Ethereum Geth' },
      { label: 'Storage', value: 'IPFS Decentralized' },
      { label: 'Publication', value: 'IEEE ICCIT 2025' },
      { label: 'Journal', value: 'IJAIT Published' },
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
      'Hybrid on-chain / off-chain design reducing blockchain storage cost by over 95%',
    ],
    diagramType: 'blockchain',
    architectureOverview:
      'NexTrip utilizes a dual-layer decentralized architecture. On-chain Solidity smart contracts deployed on a private permissioned Ethereum Geth network manage passenger ride requests, driver dispatch, state machine transitions, and financial settlements. Off-chain InterPlanetary File System (IPFS) nodes store heavy geospatial telemetry, identity verifications, and ride history logs, committing only 32-byte cryptographic hashes to the blockchain.',
    architecturalDecisions: [
      {
        decision: 'Hybrid On-Chain / Off-Chain Storage',
        justification:
          'Storing high-frequency GPS telemetry directly on Ethereum is cost-prohibitive in gas fees. By pinning telemetry to IPFS and storing only cryptographic content identifiers (CIDs) on-chain, storage overhead is reduced by over 95% while retaining tamper-evident auditability.',
      },
      {
        decision: 'Private Permissioned Ethereum Network with Geth',
        justification:
          'A private Geth network eliminates volatile cryptocurrency transaction fees and provides deterministic block confirmation intervals suitable for real-time ride-matching operations.',
      },
      {
        decision: 'Solidity State Machine for Ride Lifecycle',
        justification:
          'The smart contract enforces strict state transitions (Requested -> Accepted -> In Transit -> Completed -> Settled), preventing unauthorized fare withdrawals or state manipulation.',
      },
    ],
    implementationDeepDive: [
      {
        sectionTitle: 'Smart Contract Design & Ethereum Geth Network',
        content:
          'Solidity smart contracts manage user registration, driver vehicle verification, trip initiation, and escrow fare distribution. A multi-node private Geth testbed was initialized with custom genesis configurations to benchmark consensus performance.',
        keyPoints: [
          'Escrow-based fare holding with automated release upon mutual trip completion confirmation',
          'Role-based smart contract modifiers restricting administrative functions to verified nodes',
          'Event-driven transaction logging enabling frontend applications to subscribe to ride state updates',
        ],
      },
      {
        sectionTitle: 'IPFS Telemetry & Decentralized Storage',
        content:
          'Driver telemetry, route waypoints, and user verification records are serialized to JSON, encrypted, and uploaded to a local IPFS daemon. The resulting CID hash is written to the smart contract, creating a verifiable link between on-chain agreements and off-chain data.',
        keyPoints: [
          'Cryptographic hash verification ensuring off-chain trip logs cannot be altered post-ride',
          'Asymmetric encryption protecting passenger trip coordinates from unauthorized third-party access',
          'Pinning services maintaining distributed availability across local node clusters',
        ],
      },
      {
        sectionTitle: 'Web3 Client Interface & MetaMask Integration',
        content:
          'The React web client interfaces with the Ethereum network using Web3.js / Ethers.js. Users authenticate using MetaMask browser extensions, cryptographically signing transactions to initiate or accept ride contracts.',
        keyPoints: [
          'MetaMask wallet connectivity for cryptographic identity verification',
          'Real-time event subscriptions updating passenger and driver interfaces asynchronously',
          'Companion mobile application extending driver dispatch to mobile devices',
        ],
      },
    ],
    userContributionStatement:
      'As co-author and primary developer for the web/blockchain interface, Mostafizur Rahman Fahim co-designed the decentralized system architecture, implemented smart contract integrations with Web3 MetaMask, developed the React web portal, and co-authored the thesis manuscript resulting in the IEEE ICCIT 2025 conference publication.',
    challengesAndSolutions: [
      {
        challenge:
          'Reconciling blockchain transaction confirmation latency with the need for immediate ride-matching.',
        solution:
          'Configured dedicated private Geth mining nodes with tuned block confirmation times and utilized optimistic client-side UI states backed by smart contract event subscriptions.',
      },
      {
        challenge:
          'Ensuring privacy of passenger route coordinates without losing transparency.',
        solution:
          'Coordinates are encrypted prior to IPFS storage, allowing only the matched driver and passenger holding authorized key pairs to decrypt the telemetry.',
      },
    ],
    limitationsAndFutureWork: [
      'The architecture was evaluated on a local multi-node network; testing across geographically separated wide-area networks remains future work.',
      'Integrate zero-knowledge proofs (zk-SNARKs) for anonymous fare payments without revealing wallet addresses.',
    ],
    githubUrl:
      'https://github.com/MostafizFahim/Ride-Sharing-Dapp-Web-Thesis-project',
    githubMobileUrl:
      'https://github.com/MostafizFahim/NexTrip-Ride-Sharing-Dapp-Mobile',
    videoUrl:
      'https://drive.google.com/file/d/1RJ74MUg7t770ObmyK_L1EodLKGa3DaoE/view?usp=sharing',
    paperUrl: 'https://ieeexplore.ieee.org/document/11491718',
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
      'Implementation contribution to sister’s research project. Dataset obtained from Kaggle. Note: This project is an applied deep learning study and is strictly NOT an academic publication.',
    disclaimerBox: {
      variant: 'info',
      title: 'Academic Context — Implementation Contribution',
      text: 'This deep learning project was developed as an implementation contribution to Mostafizur Rahman Fahim’s sister’s research project using a Kaggle dataset across 3 cucumber leaf pathology classes. Important: This project is an applied deep learning comparative study and is strictly NOT an academic publication.',
    },
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
      'Strict attribution: implementation contribution to sister’s project with zero unverified publication claims',
    ],
    diagramType: 'agronet',
    architectureOverview:
      'The project benchmarks four deep learning architectures for cucumber leaf pathology diagnosis. Input images (224x224 RGB) undergo normalization and data augmentation. Features are extracted across four distinct branches: a custom deep convolutional neural network (CNN), an ImageNet-pretrained VGG16 model, a Vision Transformer (ViT) with patch projection, and a proposed Hybrid AgroNet model fusing features from all three branches into a classification dense layer.',
    architecturalDecisions: [
      {
        decision: 'Multi-Architecture Benchmarking Methodology',
        justification:
          'Rather than relying on a single architecture, four distinct model paradigms were evaluated under identical training and validation splits to establish empirical baseline performance.',
      },
      {
        decision: 'Hybrid Feature Fusion Layer',
        justification:
          'Combines the local spatial feature extraction capabilities of CNN convolutions with the global contextual dependency modeling of Vision Transformer self-attention heads.',
      },
      {
        decision: 'Consistent Data Preprocessing Pipeline',
        justification:
          'Standardized 224x224 RGB scaling, pixel intensity normalization, and controlled data augmentation (rotation, zoom, horizontal flips) ensure uniform inputs across all four evaluated pipelines.',
      },
    ],
    comparisonTable: {
      caption: 'Comparative Performance Across Evaluated Deep Learning Architectures',
      headers: ['Model Architecture', 'Accuracy', 'F1-Score', 'Precision', 'Recall', 'Parameters'],
      rows: [
        ['Custom Deep CNN Baseline', '94.12%', '94.19%', '94.20%', '94.12%', '~2.8M'],
        ['Proposed Hybrid AgroNet', '94.12%', '94.19%', '94.25%', '94.12%', '~18.5M'],
        ['Pretrained VGG16 Transfer Learning', '92.16%', '92.30%', '92.40%', '92.16%', '~14.7M'],
        ['Vision Transformer (ViT)', '90.20%', '90.45%', '90.50%', '90.20%', '~22.1M'],
      ],
    },
    implementationDeepDive: [
      {
        sectionTitle: 'Dataset & Preprocessing Pipeline',
        content:
          'The study utilizes a Kaggle cucumber leaf pathology dataset categorized across three distinct diagnostic classes: Healthy leaves, Downy mildew, and Powdery mildew. Images were scaled to 224x224 pixels and normalized to [0, 1] floating-point values.',
        keyPoints: [
          '3-class classification problem (Healthy, Downy Mildew, Powdery Mildew)',
          'Data augmentation including rotation (+/-20 deg), zoom (0.2), and horizontal flips to counter overfitting',
          'Identical 80/20 train/validation split enforced across all model evaluations',
        ],
      },
      {
        sectionTitle: 'Neural Network Architectures Evaluated',
        content:
          'Four separate model architectures were constructed and trained using TensorFlow and Keras. The custom CNN incorporates 4 convolutional blocks with batch normalization and max-pooling. VGG16 freezes early convolutional layers while fine-tuning top classification blocks. ViT flattens 16x16 patches with linear embeddings and multi-head self-attention.',
        keyPoints: [
          'Custom CNN achieving 94.12% accuracy with lowest computational parameter count (~2.8M)',
          'VGG16 transfer learning leveraging ImageNet pre-trained feature weights',
          'Vision Transformer exploring global attention mechanisms on agricultural leaf patches',
        ],
      },
      {
        sectionTitle: 'Proposed Hybrid AgroNet Fusion',
        content:
          'The hybrid architecture processes the input image simultaneously through CNN, VGG16, and ViT pathways. Global average pooling flattens spatial feature maps, which are concatenated into a unified representation vector before final softmax classification.',
        keyPoints: [
          'Feature concatenation combining localized edge/texture features with global attention tokens',
          'Dense classification head with dropout (0.4) to prevent overfitting',
          'Categorical cross-entropy loss optimized using Adam with learning rate reduction on plateau',
        ],
      },
    ],
    userContributionStatement:
      'Implemented the entire computational pipeline in Python and TensorFlow/Keras, including image preprocessing, dataset augmentation routines, neural network architecture definitions (Custom CNN, VGG16, ViT, and Hybrid feature fusion), training loops, and validation metrics calculation.',
    challengesAndSolutions: [
      {
        challenge:
          'Preventing neural network overfitting on limited agricultural training samples.',
        solution:
          'Configured active real-time data augmentation, inserted Batch Normalization and Dropout layers (0.4), and applied EarlyStopping callbacks monitoring validation loss.',
      },
      {
        challenge:
          'Concatenating disparate feature representations from 2D CNN feature maps and 1D Vision Transformer class tokens.',
        solution:
          'Applied Global Average Pooling to reduce 2D spatial maps to 1D vectors, matching the dimensionality of projected ViT sequence embeddings prior to concatenation.',
      },
    ],
    limitationsAndFutureWork: [
      'The evaluation is focused on cucumber leaf pathologies; expanding to multi-crop agricultural datasets is planned.',
      'Quantize the model with TensorFlow Lite for deployment onto low-power field edge devices or mobile apps.',
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
    disclaimerBox: {
      variant: 'warning',
      title: 'Academic Prototype Disclaimer — Not a Clinical Medical Device',
      text: 'This system is an undergraduate engineering prototype developed for experimental sensor telemetry, firmware prototyping, and cloud synchronization. It is not approved, certified, or intended for clinical diagnosis, patient treatment, or commercial medical monitoring.',
    },
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
      { label: 'Microcontroller', value: 'ESP32 Dual-Core' },
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
      'FreeRTOS task scheduling dedicating separate cores to sensor acquisition and Wi-Fi streaming',
    ],
    diagramType: 'iot',
    architectureOverview:
      'The system uses an ESP32 dual-core microcontroller as the central telemetry hub. Transducers include a MAX30102 pulse oximeter, an AD8232 single-lead ECG sensor, a DS18B20 digital temperature probe, and a DHT11 environmental sensor. FreeRTOS task scheduling assigns Core 0 to high-frequency analog/I2C sampling and local OLED rendering, while Core 1 handles Wi-Fi connectivity, Firebase JSON state synchronization, and ThingSpeak cloud graph telemetry.',
    architecturalDecisions: [
      {
        decision: 'FreeRTOS Dual-Core Task Segregation',
        justification:
          'Prevents network transmission delays from blocking critical high-frequency analog sensor reading loops, ensuring clean ECG waveforms without dropped samples.',
      },
      {
        decision: 'Dual Cloud Architecture (Firebase + ThingSpeak)',
        justification:
          'Firebase Realtime Database provides low-latency key-value telemetry for mobile web dashboards, while ThingSpeak provides continuous cloud visualization charts and historical trend exports.',
      },
      {
        decision: 'On-Device OLED & Local Web Server Fallback',
        justification:
          'Patients and caregivers can read vital statistics immediately from the 0.96-inch OLED screen or connect directly to the ESP32 local Wi-Fi web portal even during internet outages.',
      },
    ],
    implementationDeepDive: [
      {
        sectionTitle: 'Biomedical Sensor Interfacing & Firmware',
        content:
          'Developed C/C++ firmware in the Arduino/ESP-IDF environment. The MAX30102 communicates over I2C, measuring red and infrared light absorption to calculate blood oxygen saturation (SpO2) and pulse rate. The AD8232 captures microvolt cardiac electrical potentials using three skin electrodes, filtered via analog and digital low-pass routines.',
        keyPoints: [
          'I2C bus multiplexing communicating with MAX30102 and SSD1306 OLED display',
          'Analog-to-digital sampling of raw ECG signals through the ESP32 12-bit ADC',
          'OneWire protocol reading calibrated digital temperature data from the waterproof DS18B20 probe',
        ],
      },
      {
        sectionTitle: 'Cloud Telemetry & Web Dashboard',
        content:
          'Telemetric packets are formatted into JSON payloads and transmitted over HTTPS/WebSockets. Firebase Realtime Database stores the latest vital signs for instant dashboard updates, while ThingSpeak channels log continuous ECG wave signals.',
        keyPoints: [
          'Sub-15 second cloud synchronization and 1-2 second local display refresh rate',
          'Asynchronous ESP32 web server providing direct in-home browser access',
          'Configurable threshold alerts notifying caregivers if pulse rate or SpO2 drops below safety limits',
        ],
      },
      {
        sectionTitle: 'On-Device Arrhythmia Detection Heuristic',
        content:
          'A lightweight threshold-based peak detection routine analyzes consecutive ECG R-peaks in real time. If the calculated R-R intervals fluctuate significantly beyond expected limits, the OLED displays an arrhythmia alert flag.',
        keyPoints: [
          'Dynamic peak thresholding adapting to baseline signal wander',
          'Tachycardia (>100 bpm) and Bradycardia (<60 bpm) automatic classification flags',
          'Audit note: Academic experimental heuristic; not a certified diagnostic algorithm',
        ],
      },
    ],
    userContributionStatement:
      'As part of an academic group project, Mostafizur Rahman Fahim executed the predominant implementation work: hardware circuit wiring, C/C++ firmware development on the ESP32, I2C/analog sensor driver interfacing, Firebase and ThingSpeak cloud telemetry transmission, and local OLED rendering.',
    challengesAndSolutions: [
      {
        challenge:
          'Power-line 50Hz electrical noise and motion artifacts distorting raw AD8232 ECG waveforms.',
        solution:
          'Implemented digital moving average filtering in firmware and grounded the sensor reference electrode to suppress ambient alternating-current interference.',
      },
      {
        challenge:
          'Wi-Fi network reconnect latency blocking the microcontroller main loop.',
        solution:
          'Employed FreeRTOS multitasking to isolate Wi-Fi connectivity and cloud HTTP operations onto Core 1, leaving Core 0 dedicated exclusively to real-time sensor sampling.',
      },
    ],
    limitationsAndFutureWork: [
      'Single-lead ECG monitoring captures rhythm anomalies but cannot replace clinical 12-lead diagnostic ECGs.',
      'Add Bluetooth Low Energy (BLE) pairing for direct smartphone data collection without reliance on local Wi-Fi.',
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
