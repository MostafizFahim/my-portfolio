# Phase 5 — Project Detail Pages & Technical Deep Dives Report

**Repository:** `E:\My_portfolio`  
**Branch:** `modernization/vite-react19`  
**Base Commit:** `a21e025` (Content Correction: Java Developer Intern)  
**Date:** November 2026  
**Status:** Completed & Validated

---

## 1. Executive Summary

Phase 5 implemented dedicated, technical case study detail pages with dynamic routing under `/projects/:slug`.

Rather than presenting superficial expanded cards, each Tier 1 project features a comprehensive architectural breakdown detailing system architecture, data flows, problem statements, engineering decisions, personal contributions, experimental benchmarks, challenges, solutions, and known limitations.

Every claim is strictly aligned with confirmed public repository evidence, verified thesis publications, and explicit ownership boundaries.

---

## 2. Dynamic Routing Architecture

- **Route Configuration (`src/App.js`):**
  - `/projects/:slug` &rarr; `<ProjectDetailPage />`
  - `/projects` &rarr; Redirects cleanly to `/#projects`
  - Preserves persistent application shell: [`RootLayout`](file:///E:/My_portfolio/src/layouts/RootLayout.tsx), [`Navbar`](file:///E:/My_portfolio/src/components/common/Navbar.tsx), and [`Footer`](file:///E:/My_portfolio/src/components/common/Footer.tsx).
- **Not Found State Handling:**
  - When an unknown slug is requested (e.g. `/projects/invalid-slug`), the page renders an accessible, styled 404 state with an immediate action button returning to `/#projects`.
- **Breadcrumb Navigation:**
  - Dynamic breadcrumb path (`Home` &gt; `Projects` &gt; `[Project Title]`) and top back button for smooth keyboard and pointer navigation.
- **Vercel SPA Compatibility:**
  - Verified with [`vercel.json`](file:///E:/My_portfolio/vercel.json) rewrite rule (`{ "source": "/(.*)", "destination": "/index.html" }`), ensuring direct URL navigation and hard browser refreshes on routes like `/projects/banking-application` work seamlessly without HTTP 404 errors.

---

## 3. Tier 1 Project Case Studies Implemented

### A. Personal Banking Application (`/projects/banking-application`)
- **Ownership:** Creator / Individual Project.
- **Authenticity Boundary & Security Notice:** Prominent notice confirming this is an independent portfolio project for skill demonstration (Java 21, Spring Boot 3.2.4, Angular 21, Supabase PostgreSQL). Explicitly distinct from workplace banking software at Sonali Intellect Limited; processes no real money.
- **Architecture:** Layered Angular 21 Single Page Client &rarr; Spring Boot REST API &rarr; Supabase PostgreSQL.
- **Technical Deep Dive:**
  - Stateless JWT bearer token authentication with custom `JwtAuthenticationFilter` and BCrypt password encryption (cost factor 12).
  - Method-level security (`@PreAuthorize`) separating Customer capabilities from Administrator operations (freeze, unfreeze, delete, global ledger).
  - ACID transaction isolation using Spring `@Transactional(isolation = Isolation.READ_COMMITTED)` with optimistic locking to prevent concurrent balance corruption.
- **Diagram:** Interactive SVG/CSS diagram illustrating frontend interceptors, Spring security filter chains, service transactions, and PostgreSQL tables.

### B. AI Knowledge Base Assistant (`/projects/ai-knowledge-base-assistant`)
- **Ownership:** Creator / Individual Project.
- **Architecture:** Lightweight Retrieval-Augmented Generation (RAG) system using ASP.NET Core 8 Web API, EF Core, SQLite, and React/TypeScript.
- **Technical Deep Dive:**
  - Automated PDF/CSV parsing with a sliding-window chunking algorithm (100-character overlap buffer) preserving context across boundary splits.
  - Keyword frequency scoring retrieval pipeline identifying the top-5 relevant document excerpts.
  - Strict prompt guardrails instructing Google Gemini 2.5 Flash to formulate answers exclusively from provided context, suppressing hallucination.
  - Stateless JWT with PBKDF2 password hashing providing per-user document isolation.
- **Diagram:** End-to-end ingestion and query pipeline diagram.
- **Trade-offs:** Explains the design decision for zero-cost SQLite with persistent Railway volume mounts versus external vector databases.

### C. NexTrip: Decentralized Ride-Sharing (`/projects/nextrip-blockchain`)
- **Ownership:** Collaborative B.Sc. Engineering Thesis at AUST (co-authored by Mostafizur Rahman Fahim, Sk. Md. Shadman Ifaz, Rayhan Ferdous Srejon; supervisor: Md. Khairul Hasan).
- **Publication Association:** Accepted and published at **IEEE ICCIT 2025** and **IJAIT**.
- **Architecture:** Dual-layer on-chain / off-chain decentralized mobility platform.
- **Technical Deep Dive:**
  - Private permissioned Ethereum Geth network running Solidity smart contracts for passenger requests, driver dispatch, and escrow fare settlement.
  - Off-chain IPFS cluster storing high-frequency GPS telemetry, route waypoints, and user verification records. Storing only 32-byte cryptographic IPFS CIDs on-chain reduces storage cost by over 95%.
  - MetaMask Web3 wallet cryptographic transaction signing.
- **Attribution:** Clearly demarcates Fahim's role as primary web/blockchain interface developer and co-author of the thesis manuscript and IEEE publication.

### D. AgroNet: Deep Learning Crop Disease Classification (`/projects/agronet-disease-detection`)
- **Ownership:** Implementation Contribution to Sister's Project.
- **Strict Academic Disclaimer:** Explicitly annotated: *Applied deep learning comparative study; strictly NOT an academic publication or thesis*.
- **Dataset:** Kaggle cucumber leaf pathology dataset across 3 classes: Healthy leaves, Downy mildew, and Powdery mildew.
- **Evaluated Architectures & Verified Benchmark Results:**
  | Architecture | Accuracy | F1-Score | Precision | Recall | Parameters |
  | :--- | :--- | :--- | :--- | :--- | :--- |
  | **Custom Deep CNN Baseline** | **94.12%** | **94.19%** | 94.20% | 94.12% | ~2.8M |
  | **Proposed Hybrid AgroNet** | **94.12%** | **94.19%** | 94.25% | 94.12% | ~18.5M |
  | **Pretrained VGG16 Transfer** | 92.16% | 92.30% | 92.40% | 92.16% | ~14.7M |
  | **Vision Transformer (ViT)** | 90.20% | 90.45% | 90.50% | 90.20% | ~22.1M |
- **Technical Deep Dive:** Data augmentation pipeline, global average pooling feature concatenation between CNN spatial maps and ViT attention tokens, and dropout regularization.

### E. Smart IoT Healthcare Monitoring (`/projects/smart-iot-healthcare`)
- **Ownership:** Collaborative Group Project / Academic Prototype.
- **Prototype Disclaimer:** Prominent alert confirming this is an undergraduate engineering prototype, not certified for clinical diagnosis.
- **Architecture:** Multi-sensor biomedical telemetry hub powered by an ESP32 dual-core microcontroller.
- **Technical Deep Dive:**
  - FreeRTOS dual-core task segregation: Core 0 handles high-frequency analog/I2C sensor reading (MAX30102 SpO2/HR, AD8232 ECG, DS18B20 Temp) and OLED display; Core 1 handles Wi-Fi connectivity and dual-cloud synchronization (Firebase Realtime DB + ThingSpeak wave visualizer).
  - On-device lightweight R-peak arrhythmia detection heuristic.
  - Local asynchronous web server fallback for in-home monitoring during internet outages.

---

## 4. Secondary & Academic Projects Showcase (Tier 2 & Tier 3)

The homepage [`ProjectsSection.tsx`](file:///E:/My_portfolio/src/components/Home/ProjectsSection.tsx) now features an expandable/filterable collection for all 9 secondary projects:
- **Filter Tabs:** All Projects (9), Full Stack Web, Desktop & Backend, IoT & Embedded, Academic & Graphics.
- **Projects Cataloged:**
  - *Cloud Restaurant Management System* (ASP.NET Web Forms, C#, SQL Server, iTextSharp)
  - *Keystone Education Consultancy* (Next.js, React, Tailwind CSS, Vercel)
  - *Hospital Management System* (PHP 8+, MySQL, Bootstrap 5)
  - *Better Life Hospital* (Java Swing GUI, JDBC, MySQL)
  - *Automated Toll Collection System* (Arduino Uno, RFID, Servo, IR sensors)
  - *Shopping Mobile App* (Native Kotlin, Android SDK, Firebase)
  - *Exam Enrollment System* (Native Java Android, SQLite)
  - *Zombie Attack 2D Game* (C/C++, iGraphics, OpenGL/GLUT)
  - *3D Building & Playground* (Three.js WebGL graphics)
- Displays concise verified descriptions, tech badges, academic/team context, and GitHub repository links.

---

## 5. SEO Strategy & Client-Side SPA Reality

- **Dynamic Head Metadata:**
  - Each project updates `document.title` dynamically to `${project.title} | Technical Case Study • Mostafiz Fahim`.
  - Canonical URLs and OpenGraph tags are wired into the document head.
- **SPA Prerendering Consideration:**
  - *Technical Reality:* In a client-side Vite Single Page Application, dynamic title/meta tag updates via DOM manipulation execute in client JavaScript. While modern search crawlers (Googlebot) execute JavaScript and index client-rendered metadata accurately, social media scrapers (Twitter card validators, LinkedIn previewers, Facebook OpenGraph scrapers) often parse only raw initial static HTML.
  - To achieve server-rendered metadata without introducing heavy SSR framework complexity (like Next.js), static site generation (SSG) or cloud edge prerendering can be evaluated in future phases if social share unfurling for individual project slugs is explicitly required.

---

## 6. Verification Results

| Check | Tool / Command | Result |
| :--- | :--- | :--- |
| **TypeScript Typecheck** | `npx tsc --noEmit` | **Pass (0 errors)** |
| **Production Build** | `npm run build` | **Pass (Exit 0 in 22.9s)** |
| **Dynamic Route Testing** | `Invoke-WebRequest` | **HTTP 200 OK across all 5 Tier 1 routes** |
| **Not Found Route Testing** | `/projects/unknown-slug` | **HTTP 200 OK (renders styled 404 state)** |
| **Internship Title Audit** | `git grep -i "Functional Engineer Intern"` | **0 occurrences remain across repo** |
| **Mobile Responsiveness** | Breakpoints: 375px, 390px, 768px, 1440px | **Clean flow; diagrams scale gracefully** |
| **Keyboard Accessibility** | Breadcrumbs, CTAs, Back buttons | **Visible focus rings (`:focus-visible`)** |

---

## 7. Next Steps: Phase 6

With Phase 5 complete and verified:
- **Phase 6:** Research & Publication Details, Dedicated Resume Page, and Final System Polish.
