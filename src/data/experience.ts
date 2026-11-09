import { Experience } from '../types/experience.types';

export const experienceData: Experience = {
  id: 'sonali-intellect',
  company: 'Sonali Intellect Limited',
  companyShort: 'SIL',
  location: 'Dhaka, Bangladesh',
  companyContext:
    'Leading enterprise financial technology and core banking software provider for Sonali Bank and Rupali Bank.',
  roles: [
    {
      title: 'Functional Engineer',
      type: 'permanent',
      period: 'August 2026 – Present',
      startDate: '2026-08',
      endDate: 'Present',
      summary:
        'Engineering and maintaining enterprise banking backend services, transaction workflows, and secure API integrations.',
      responsibilities: [
        'Developing and maintaining enterprise backend services using Java 17/21, Spring Boot, Spring MVC, and relational databases.',
        'Contributing to core banking software modules, focusing on financial transaction workflows, secure authentication, and data consistency.',
        'Designing relational database queries, schema optimizations, and transaction handling across MySQL and MS SQL Server.',
        'Integrating frontend banking portal components using Angular, TypeScript, and JWT-authenticated REST APIs.',
        'Participating in enterprise software maintenance, bug fixing, regression testing, and code review processes.',
      ],
    },
    {
      title: 'Java Developer Intern',
      type: 'internship',
      period: 'February 2026 – July 2026',
      startDate: '2026-02',
      endDate: '2026-07',
      summary:
        'Completed a 6-month formal engineering internship delivering internal enterprise systems and gaining hands-on exposure to banking backend systems.',
      responsibilities: [
        'Contributed to Java-related enterprise software development, testing, and database integrations.',
        'Gained hands-on experience in production banking workflows, relational database query tuning, and MVC design patterns.',
        'Implemented internal tools for task allocation and company asset tracking.',
      ],
      deliverables: [
        {
          name: 'Task Management System',
          description:
            'Built a full MVC web application implementing user authentication, role-based workflows, input validation, and relational database operations.',
          technologies: ['Java', 'JSP', 'Servlets', 'MVC', 'MySQL'],
        },
        {
          name: 'Asset Tagging System',
          description:
            'Developed an internal enterprise asset tracking tool for registering, categorizing, and monitoring organizational hardware and digital assets.',
          technologies: ['Java', 'SQL', 'Relational Database'],
        },
      ],
    },
  ],
  technologies: [
    'Java 17/21',
    'Spring Boot',
    'Spring MVC',
    'REST APIs',
    'MySQL',
    'MS SQL Server',
    'Angular',
    'TypeScript',
    'JSP/Servlet',
    'JWT',
  ],
};
