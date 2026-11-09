import { Education } from '../types/education.types';

export const educationData: Education = {
  degree: 'Bachelor of Science in Computer Science and Engineering',
  field: 'Computer Science and Engineering (CSE)',
  institution: 'Ahsanullah University of Science and Technology',
  institutionShort: 'AUST',
  location: 'Dhaka, Bangladesh',
  period: 'December 2021 – December 2025',
  graduationDate: 'December 2025',
  cgpa: '3.105 / 4.00',
  thesis: {
    title:
      'NexTrip: A Permissioned Ethereum + IPFS Powered Decentralized & Privacy-Preserving Ride-Sharing Mobility Platform',
    description:
      'Designed and benchmarked a hybrid on-chain/off-chain decentralized architecture integrating private Ethereum Geth smart contracts, IPFS distributed storage, and RAFT consensus for privacy-preserving transit telemetry.',
    supervisor: 'Mr. Md. Khairul Hasan (Associate Professor, Department of CSE, AUST)',
    publications: [
      'IEEE ICCIT 2025 Conference Paper',
      'International Journal of Advanced Information Technology (IJAIT) Journal Paper',
    ],
  },
  relevantCoursework: [
    'Software Engineering & System Design',
    'Database Management Systems',
    'Object-Oriented Programming (Java & C++)',
    'Data Structures & Algorithms',
    'Distributed Systems',
    'Computer Networks',
    'Operating Systems',
    'Artificial Intelligence & Machine Learning',
    'Computer Graphics & Web Technologies',
    'Microprocessors & Embedded Systems',
  ],
};
