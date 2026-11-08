# Portfolio Public Repository Audit

**Author / Profile:** Mostafizur Rahman Fahim (`https://github.com/MostafizFahim`)  
**Audit Date:** March 2026 / Local Workspace Audit  
**Auditor:** Senior Technical Architect & Career Branding Consultant  
**Status:** Complete Public Repository Audit (Phase 0)  

---

## 1. Audit Scope & Methodology

This audit evaluates all publicly accessible repositories under the GitHub profile `https://github.com/MostafizFahim`. 

### Audit Rules & Ethical Constraints:
1. **Evidence-Based Evaluation:** Technical capabilities, project ownership, and architecture are determined strictly from actual repository contents (code, README files, dependency manifests, directory structures, and reports), **never** inferred from repository titles alone.
2. **Confidentiality:** No attempts were made to access private repositories. Private projects mentioned by the user (Banking RAG Copilot, Orbikit, Asset Tagging System, Task Management System, and wedding invitations) are evaluated purely based on authorized user descriptions and confidentiality parameters.
3. **Strict Categorization:** Repositories are classified into **Tier 1 (Featured)**, **Tier 2 (Secondary / Expandable)**, **Tier 3 (Additional Academic)**, or **Excluded**.

---

## 2. Public Repository Audit Matrix

| Repository Name | Primary Stack | Nature of Project | Recommended Tier | Live Demo / Evidence |
| :--- | :--- | :--- | :--- | :--- |
| `ai-knowledge-base-assistant` | ASP.NET Core, React, TS, SQLite, Gemini API | Personal / Applied AI | **Tier 1 (Featured)** | Deployed on Vercel & Railway |
| `banking-microservices` | Java 21, Spring Boot, Angular, PostgreSQL | Personal / Backend | **Tier 1 (Featured)** | Deployed on Vercel & Railway |
| `Ride-Sharing-Dapp-Web-Thesis-project` | Ethereum, Solidity, IPFS, React, Node.js | Academic (B.Sc. Thesis) | **Tier 1 (Featured)** | Video demo, Thesis report |
| `NexTrip-Ride-Sharing-Dapp-Mobile` | React Native, Expo | Academic (Thesis Mobile) | **Tier 1 (Featured - Sub)**| Paired with Thesis Web |
| `NexTrip-ride-sharing-web-app-version2` | Express, Socket.IO, Prisma, Postgres, Redis | Personal Learning | **Tier 1 (Featured - Sub)**| Paired with Thesis Web |
| `AgroNet-Cucumber-Leaf-Disease-Classification` | Python, TensorFlow/Keras, CNN, VGG16, ViT | Implementation Contribution | **Tier 1 (Featured)** | Jupyter Notebook & Metrics |
| `Smart-IoT-Healthcare-...-ESP32` | ESP32, MAX30102, AD8232, Firebase, ThingSpeak | Collaborative Group Project | **Tier 1 (Featured)** | Hardware Prototype & Circuit |
| `Cloud-Restaurant` | ASP.NET Web Forms, C#, MS SQL, .NET 4.8 | Academic Group Project | **Tier 2 (Secondary)** | Full Report & Screenshots |
| `keystone-education` | Next.js, React, Tailwind CSS | Web Development | **Tier 2 (Secondary)** | Deployed on Vercel |
| `Hospital-Management-System` | Plain PHP 8+, MySQL, Bootstrap 5 | Educational / Full-Stack | **Tier 2 (Secondary)** | Multi-role schema & screenshots |
| `Better-Life-Hospital` | Java Swing, MySQL, JDBC | Educational Desktop | **Tier 2 (Secondary)** | Desktop application code & SQL |
| `Automated-Toll-Collection-System-Arduino` | Arduino Uno, RFID MFRC522, Servo, LCD | Academic Hardware Prototype| **Tier 2 (Secondary)** | Full Report, Video & Circuit |
| `Shopping-App-Android-Studio-Kotlin-Firebase` | Kotlin, Android Studio, Firebase | Mobile Exploration | **Tier 2 (Secondary)** | Android source files |
| `Exam-Enrollment-System-Android` | Java, Android SDK | Academic Mobile Project | **Tier 2 (Secondary)** | Android source files |
| `Zombie-Attack-i-graphics` | C/C++, iGraphics, OpenGL/GLUT | Academic Game Development | **Tier 3 (Academic)** | Visual Studio C++ Solution |
| `A-building-and-A-playground-Three.js-project` | Three.js, JavaScript, WebGL | Academic Graphics Project | **Tier 3 (Academic)** | Three.js 3D scene code |
| `my-portfolio` | React 17, React-Bootstrap, CRA | Portfolio (Current Repo) | **Active Modernization** | Cloned repository |

---

## 3. Detailed Repository Audit Records

### 3.1 `ai-knowledge-base-assistant`
* **Repository URL:** `https://github.com/MostafizFahim/ai-knowledge-base-assistant`
* **README Description:** Cost-free starter MVP for an AI-powered personal knowledge base using ASP.NET Core Web API, EF Core, SQLite, JWT authentication, React, Vite, TypeScript, Tailwind CSS, and simple keyword retrieval.
* **Main Technologies Identified:**
  - Backend: C#, ASP.NET Core 8 Web API, Entity Framework Core, SQLite, PBKDF2 password hashing, JWT bearer tokens, Dockerfile.
  - Frontend: React 18/Vite, TypeScript, Tailwind CSS, Axios.
  - AI: Google Gemini API integration (`gemini-2.5-flash`).
* **Project Purpose:** Ingest PDF and CSV documents, perform automatic text chunking, retrieve top-5 contextually matching chunks via keyword search, and construct context-aware prompts for Gemini chat.
* **Evidence of Implementation:**
  - Complete backend layered architecture (`Controllers/`, `Data/`, `DTOs/`, `Entities/`, `Services/`).
  - Implemented endpoints: `/api/auth/register`, `/api/auth/login`, `/api/documents/upload`, `/api/chat/ask`, `/api/chat/history`.
  - Frontend routes: `/login`, `/dashboard`, `/documents`, `/chat`, `/history`.
  - Verified Live Deployments:
    - Frontend: `https://ai-knowledge-base-assistant-nu.vercel.app`
    - Backend API: `https://ai-knowledge-base-assistant-production.up.railway.app`
    - Health check: `https://ai-knowledge-base-assistant-production.up.railway.app/health`
* **Classification:** Personal / Applied AI Application.
* **Recommended Tier:** **Tier 1 (Featured on Homepage + Dedicated Detail Page)**.
* **Confirmation / Verification Needed:**
  - Confirm whether the Railway backend deployment is currently active or sleeping on a free plan.

---

### 3.2 `banking-microservices`
* **Repository URL:** `https://github.com/MostafizFahim/banking-microservices`
* **README Description:** A full-stack banking application built with Spring Boot and Angular. It includes JWT authentication, role-based access control, account management, transaction processing, analytics charts, CSV export, an H2 development database, and a Supabase PostgreSQL production database deployed with Railway and Vercel.
* **Main Technologies Identified:**
  - Backend: Java 21, Spring Boot 3.2.4, Spring Security, Spring Data JPA / Hibernate, H2 (dev), PostgreSQL (Supabase), Maven, Docker.
  - Frontend: Angular 21, TypeScript, Angular Router, HTTP Interceptors, Reactive Forms, Bootstrap 5, Chart.js, ngx-toastr.
* **Project Purpose:** Provide retail banking capabilities: account opening, deposit/withdrawal transactions, transaction history, CSV audit exports, and role-based customer/admin workflows.
* **Evidence of Implementation:**
  - Layered Spring Boot module structure (`account-service/src/main/java/com/banking/account/`).
  - Unit tests present (`JUnit`, `Mockito`).
  - Angular standalone components and route guards.
  - Verified Live Deployments:
    - Frontend: `https://banking-microservices-eta.vercel.app/login`
    - Backend: `https://banking-api-production-247d.up.railway.app`
* **Classification:** Personal / Enterprise Backend Application.
* **Recommended Tier:** **Tier 1 (Featured on Homepage + Dedicated Detail Page)**.
* **Naming Correction:** Present on portfolio as **"Banking Application"** (as opposed to claiming distributed microservices).
* **Confirmation / Verification Needed:**
  - Confirm whether production Supabase database connection and Railway service are currently active.

---

### 3.3 `Ride-Sharing-Dapp-Web-Thesis-project` (NexTrip)
* **Repository URL:** `https://github.com/MostafizFahim/Ride-Sharing-Dapp-Web-Thesis-project`
* **README Description:** NexTrip – Decentralized & Privacy-Preserving Ride-Sharing System. A Permissioned Ethereum + IPFS Powered Mobility Platform developed as part of the B.Sc. Engineering Thesis at Ahsanullah University of Science and Technology (AUST).
* **Main Technologies Identified:**
  - Blockchain: Permissioned Ethereum (Geth private network), Solidity smart contracts.
  - Decentralized Storage: IPFS (InterPlanetary File System).
  - Web Frontend & Backend: React, Node.js, Web3.js, MetaMask, Material UI.
* **Project Purpose:** Eliminate centralized ride-sharing intermediaries, protect passenger/driver trip data via decentralized off-chain storage (IPFS), and automate trip booking and payments via smart contracts.
* **Evidence of Implementation:**
  - Documented Geth bootnode setup, contract deployment scripts, and MetaMask transaction handling.
  - Full screenshot set (Landing page, driver dashboard, admin panel, system architecture).
  - Walkthrough demonstration video on Google Drive.
  - Authored by: Mostafizur Rahman Fahim, Sk. Md. Shadman Ifaz, Rayhan Ferdous Srejon; Supervised by Md. Khairul Hasan (AUST).
  - Associated with IEEE ICCIT 2025 and IJAIT publications.
* **Classification:** Academic Research / B.Sc. Engineering Thesis.
* **Recommended Tier:** **Tier 1 (Featured on Homepage + Dedicated Detail Page)**.
* **Confirmation / Verification Needed:**
  - Confirm relationship between this repository and the companion repos `NexTrip-Ride-Sharing-Dapp-Mobile` and `NexTrip-ride-sharing-web-app-version2` (recommend combining into one portfolio showcase).

---

### 3.4 `AgroNet-Cucumber-Leaf-Disease-Classification`
* **Repository URL:** `https://github.com/MostafizFahim/AgroNet-Cucumber-Leaf-Disease-Classification`
* **README Description:** Design and Development of AgroNet: A Hybrid CNN–VGG16–ViT Model for Cucumber Leaf Disease Detection and Classification.
* **Main Technologies Identified:**
  - Machine Learning: Python, TensorFlow / Keras, Custom CNN, VGG16 (ImageNet pretrained), Vision Transformer (ViT), NumPy, Pandas, Matplotlib.
* **Project Purpose:** Classify cucumber leaf pathologies into 3 categories (`Healthy_leaves`, `Downy_mildew`, `Powdery_mildew`) using image augmentation and feature fusion.
* **Evidence of Implementation:**
  - Jupyter notebook: `notebooks/design-and-development-of-agronet.ipynb`.
  - Confusion matrices and classification reports in repository structure.
  - Explicit experimental comparison:
    - AgroNet Custom CNN: **94.12% accuracy**, 94.19% F1-score
    - AgroNet VGG16: 92.16% accuracy, 92.20% F1-score
    - AgroNet ViT: 90.20% accuracy, 90.20% F1-score
    - AgroNet Hybrid (CNN+VGG16+ViT): **94.12% accuracy**, 94.19% F1-score
  - Explicit note in README: *"Hybrid AgroNet matched the best CNN result and outperformed standalone VGG16 and ViT models. Avoid claiming that the Hybrid model outperformed all models."*
* **Classification:** **Implementation Contribution to Sister's Project**.
* **Publication Status:** **No publication associated with AgroNet.**
* **Recommended Tier:** **Tier 1 (Featured in Applied AI/ML on Homepage + Dedicated Detail Page)**.
* **Confirmation / Verification Needed:**
  - Confirm sister's acknowledgment wording and verify whether model inference demo or Kaggle notebook link can be linked.

---

### 3.5 `Smart-IoT-Healthcare-Real-Time-Vital-Sign-Tracking-and-ECG-Arrhythmia-Detection-Using-ESP32`
* **Repository URL:** `https://github.com/MostafizFahim/Smart-IoT-Healthcare-Real-Time-Vital-Sign-Tracking-and-ECG-Arrhythmia-Detection-Using-ESP32`
* **README Description:** IoT-based Smart Patient Health Monitoring System developed using the ESP32 Dev Kit integrating biomedical sensors for real-time monitoring, cloud synchronization, and arrhythmia detection.
* **Main Technologies Identified:**
  - Hardware: ESP32 Dev Kit, MAX30102 (Heart Rate / SpO2), AD8232 (ECG), DS18B20 (Body Temp), DHT11 (Ambient), SSD1306 OLED.
  - Cloud & Web: Firebase Realtime Database, ThingSpeak, ESP32 asynchronous web server.
* **Project Purpose:** Remote patient health telemetry and on-device lightweight ECG arrhythmia irregularity detection.
* **Evidence of Implementation:**
  - Circuit schematics, prototype breadboard photographs, mobile web dashboard views.
  - Authors listed: Mostafizur Rahman Fahim, Asadut Jaman, Naeema Jannat, Sayeda Fatema Nimu, Amrita Dewanjee.
  - Reference to paper: *Smart IoT Healthcare: Real-Time Vital Sign Tracking and ECG Arrhythmia Detection Using ESP32*.
* **Classification:** **Collaborative Group Project**.
* **Important Disclaimer:** Must be presented as an academic engineering prototype, not a clinical medical diagnostic device.
* **Recommended Tier:** **Tier 1 (Featured on Homepage + Dedicated Detail Page)**.
* **Confirmation / Verification Needed:**
  - Confirm the user's specific individual contribution (e.g., firmware development, sensor interfacing, or cloud dashboard).

---

### 3.6 `Cloud-Restaurant`
* **Repository URL:** `https://github.com/MostafizFahim/Cloud-Restaurant`
* **README Description:** Cloud Restaurant is an online food ordering and management system built with ASP.NET Web Forms.
* **Main Technologies Identified:**
  - C#, ASP.NET Web Forms, .NET Framework 4.8, Microsoft SQL Server, T-SQL Stored Procedures, Bootstrap, iTextSharp.
* **Project Purpose:** Food ordering and restaurant management platform with user cart/ordering and comprehensive admin management.
* **Evidence of Implementation:**
  - Full Visual Studio solution (`Cloud Restaurant.sln`).
  - Comprehensive SQL database restore scripts (`CloudDB_All_In_One_Restore.sql`).
  - 14 screenshots documenting user interface and admin dashboards.
  - Developed for Course CSE 3224 (Information System Design & Software Engineering Lab at AUST, July 2024).
  - Contributors: Naeema Jannat, Mostafiz Fahim, Asadut Jaman.
* **Classification:** Academic Group Project.
* **Recommended Tier:** **Tier 2 (Secondary Engineering Project / Expandable Grid)**.
* **Confirmation / Verification Needed:**
  - None required; project status is fully documented.

---

### 3.7 `keystone-education`
* **Repository URL:** `https://github.com/MostafizFahim/keystone-education`
* **README Description:** Next.js marketing and services web platform for Keystone Education Consultancy.
* **Main Technologies Identified:**
  - Next.js (App Router), React, Tailwind CSS, Geist font, Vercel deployment.
* **Project Purpose:** Consultancy agency web application presenting study abroad counseling, destination guides, and student inquiries.
* **Evidence of Implementation:**
  - Complete Next.js application codebase deployed on Vercel (`https://keystone-education.vercel.app/`).
* **Classification:** Web Application.
* **Recommended Tier:** **Tier 2 (Secondary Engineering Project)**.

---

### 3.8 `Hospital-Management-System` (PHP)
* **Repository URL:** `https://github.com/MostafizFahim/Hospital-Management-System`
* **README Description:** A plain PHP, Bootstrap, and MySQL Hospital Management System built for learning raw PHP before moving to Laravel.
* **Main Technologies Identified:**
  - PHP 8+, MySQL / MariaDB, Bootstrap 5, jQuery.
* **Project Purpose:** Multi-portal hospital workflow managing appointments, doctor reviews, consultations, prescriptions, and billing.
* **Evidence of Implementation:**
  - Full relational database dump (`hmsdb.sql`).
  - Separate workspaces for `admin/`, `doctor/`, `patient/`.
  - Comprehensive screenshots documenting role-based access.
* **Classification:** Educational / Full-Stack Project.
* **Recommended Tier:** **Tier 2 (Secondary Engineering Project)**.

---

### 3.9 `Better-Life-Hospital` (Java Swing)
* **Repository URL:** `https://github.com/MostafizFahim/Better-Life-Hospital`
* **README Description:** Java Swing based hospital management desktop application backed by a MySQL database.
* **Main Technologies Identified:**
  - Java, Java Swing (GUI), JDBC, MySQL.
* **Project Purpose:** Desktop medical office management for patient registration, doctor appointments, drug inventory, and billing.
* **Evidence of Implementation:**
  - Java source files (`src/`), build scripts (`scripts/run.ps1`, `scripts/build.ps1`), and SQL dump (`betterlifehospital.sql`).
* **Classification:** Educational Desktop Application.
* **Recommended Tier:** **Tier 2 (Secondary Engineering Project)**.

---

### 3.10 `Automated-Toll-Collection-System-Arduino`
* **Repository URL:** `https://github.com/MostafizFahim/Automated-Toll-Collection-System-Arduino`
* **README Description:** Arduino-based automatic toll collection prototype using RFID card authentication, IR sensors, servo gate, keypad recharge, buzzer alerts, and LCD.
* **Main Technologies Identified:**
  - Arduino C/C++, MFRC522 RFID, Servo, LiquidCrystal_I2C, SPI.
* **Project Purpose:** Automated vehicle identification, toll debiting from RFID card, and barrier gate control.
* **Evidence of Implementation:**
  - Arduino sketch code, circuit schematics, hardware photographs, demonstration video, and final academic project report.
* **Classification:** Academic Hardware Prototype.
* **Recommended Tier:** **Tier 2 (Secondary Engineering Project / IoT)**.

---

### 3.11 `Shopping-App-Android-Studio-Kotlin-Firebase`
* **Repository URL:** `https://github.com/MostafizFahim/Shopping-App-Android-Studio-Kotlin-Firebase`
* **README Description:** [No README found].
* **Main Technologies Identified:**
  - Kotlin, Android Studio, Firebase Realtime Database / Auth.
* **Project Purpose:** Native Android e-commerce application.
* **Classification:** Mobile Application Exploration.
* **Recommended Tier:** **Tier 2 (Secondary Engineering Project)**.
* **Confirmation / Verification Needed:**
  - Confirm whether a brief 2-sentence description and screenshot are available.

---

### 3.12 `Exam-Enrollment-System-Android`
* **Repository URL:** `https://github.com/MostafizFahim/Exam-Enrollment-System-Android`
* **README Description:** [No README found].
* **Main Technologies Identified:**
  - Java, Android Studio, Android SDK.
* **Project Purpose:** Student exam enrollment and course registration mobile client.
* **Classification:** Academic Mobile Application.
* **Recommended Tier:** **Tier 2 (Secondary Engineering Project)**.

---

### 3.13 `Zombie-Attack-i-graphics`
* **Repository URL:** `https://github.com/MostafizFahim/Zombie-Attack-i-graphics`
* **README Description:** A 2D zombie shooting game built with C/C++ and the iGraphics graphics library.
* **Main Technologies Identified:**
  - C/C++, iGraphics framework, OpenGL / GLUT, Visual Studio C++.
* **Project Purpose:** 2D arcade survival game with keyboard movement, collision detection, health tracking, animated zombies, and high scores.
* **Evidence of Implementation:**
  - Complete C++ source (`iMain.cpp`, `Variables.h`), solution files, and bitmap sprites.
* **Classification:** Academic Game Development / Graphics Work.
* **Recommended Tier:** **Tier 3 (Additional Academic Engineering Work)**.

---

### 3.14 `A-building-and-A-playground-Three.js-project`
* **Repository URL:** `https://github.com/MostafizFahim/A-building-and-A-playground-Three.js-project`
* **README Description:** A-building-and-A-playground-Three.js-project.
* **Main Technologies Identified:**
  - JavaScript, Three.js, WebGL.
* **Project Purpose:** Interactive 3D graphics scene rendering buildings and playground structures with shaders.
* **Classification:** Academic Computer Graphics Work.
* **Recommended Tier:** **Tier 3 (Additional Academic Engineering Work)**.

---

### 3.15 Companion / Versioned Repositories (To Consolidate under NexTrip)
* **`NexTrip-Ride-Sharing-Dapp-Mobile`:** Mobile frontend for the NexTrip thesis platform. (Consolidate under NexTrip project card).
* **`NexTrip-ride-sharing-web-app-version2`:** Node.js/Express, Socket.IO, Prisma, PostgreSQL, Redis learning implementation of NexTrip. (Consolidate as a related architectural iteration).

---

## 4. Non-Public & Professional Work Inventory (Strict Confidentiality)

The following four professional projects are confirmed for inclusion on the portfolio **without public repository links, internal documentation, proprietary screenshots, or confidential business details**:

1. **Banking RAG Copilot**
   - *Nature:* Ongoing Professional Engineering Work.
   - *Public Presentation Scope:* High-level architectural narrative focusing on Retrieval-Augmented Generation for enterprise banking knowledge bases, prompt compliance, context retrieval, and query security.
   - *Confidentiality Guarantee:* **No private repository link. No internal API endpoints. No internal documentation.**
2. **Orbikit**
   - *Nature:* Ongoing Professional Engineering Work on an existing enterprise system.
   - *Public Presentation Scope:* Summary of backend feature development, API maintenance, and component enhancements within a production enterprise codebase.
   - *Confidentiality Guarantee:* **No proprietary source code. No client identity disclosure. No private repository link.**
3. **Asset Tagging System**
   - *Nature:* Internship Engineering Project.
   - *Public Presentation Scope:* Conceptual overview of physical/digital asset identification, lifecycle tracking, and administrative dashboard design.
   - *Confidentiality Guarantee:* **No private repository link. No proprietary code.**
4. **Task Management System**
   - *Nature:* Internship Engineering Project.
   - *Public Presentation Scope:* Architecture of a JSP/Servlet, MVC-based enterprise task tracking system with role-based access.
   - *Confidentiality Guarantee:* **No private repository link. No internal company operational data.**

---

## 5. Non-Repository Collaborative Work

* **COVID-19 X-ray Pneumonia Classification**
  - *Nature:* Implementation contribution to a friend's collaborative project.
  - *Repository:* None (no public repository).
  - *Public Presentation Scope:* Concise technical summary of convolutional deep learning for medical radiography classification, once specific framework and dataset are confirmed. No clinical efficacy claims.

---

## 6. Projects Explicitly Excluded

1. **Private Wedding Invitation Repositories (2 Repositories):** Excluded completely per user instruction.
2. **Human-Virus Protein-Protein Interaction (PPI) Prediction:** Excluded completely per user instruction ("I do not recall doing this work").

---

*End of Repository Audit. Prepared for Mostafizur Rahman Fahim.*
