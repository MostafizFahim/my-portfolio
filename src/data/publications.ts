import { Publication } from '../types/publication.types';

export const publicationsData: Publication[] = [
  {
    id: 'springer-agriculture',
    slug: 'predicting-agricultural-land-suitability',
    title:
      'Predicting Agricultural Land Suitability and Soil Quality: A Deep Learning Approach for Precision Agriculture',
    authorship: '2nd Author',
    authorList: 'Co-authored with Research Collaborators (Mostafizur Rahman Fahim as 2nd Author)',
    venue: 'Springer Conference',
    venueType: 'conference',
    status: 'published',
    year: 2024,
    publisher: 'Springer',
    paperUrl:
      'https://link.springer.com/chapter/10.1007/978-3-032-15764-5_39',
    doiUrl: 'https://doi.org/10.1007/978-3-032-15764-5_39',
    abstract:
      'Presents a deep learning-based approach for predicting agricultural land suitability and soil quality parameters to support precision agriculture, crop yield optimization, and resource allocation. Evaluates predictive neural networks against classical regression models on environmental and soil datasets.',
    researchMotivation:
      'Precision agriculture relies on accurate assessment of soil nutrients, texture, and regional climate conditions to maximize agricultural yield while minimizing fertilizer runoff and chemical degradation. Traditional laboratory soil assays are time-intensive, expensive, and difficult to scale across broad geographical zones.',
    methodology:
      'Evaluated deep neural network architectures against classical statistical regression baselines across multi-attribute agricultural environmental datasets. Preprocessed geographical and soil sensor variables, applied feature normalization, and tuned multilayer architectures to predict suitability indices.',
    findingsAndResults: [
      'Deep neural models demonstrated superior non-linear fitting over classical linear regression baselines for multi-variable soil quality estimation.',
      'Feature sensitivity analysis indicated soil organic matter, pH, and precipitation patterns as primary predictive determinants.',
      'Provided algorithmic decision-support guidelines for regional crop recommendation.',
    ],
    keyContributions: [
      'Developed a deep learning framework predicting soil suitability metrics from agricultural environmental datasets.',
      'Provided empirical decision-support guidelines for precision farming and resource efficiency.',
      'Validated model performance using cross-validation and standard predictive error metrics.',
    ],
    tags: ['Deep Learning', 'Precision Agriculture', 'Soil Quality', 'Neural Networks', 'Springer'],
    bibtex: `@incollection{fahim2024predicting,
  title={Predicting Agricultural Land Suitability and Soil Quality: A Deep Learning Approach for Precision Agriculture},
  author={Research Collaborators and Fahim, Mostafizur Rahman},
  booktitle={Springer Conference on Precision Agriculture and Computational Intelligence},
  year={2024},
  publisher={Springer},
  doi={10.1007/978-3-032-15764-5_39}
}`,
  },
  {
    id: 'ieee-iccit-nextrip',
    slug: 'nextrip-semi-public-blockchain-architecture',
    title:
      'NexTrip: A Semi-Public Blockchain Architecture for Privacy-Preserving Ride-Sharing with RAFT Consensus and IPFS-Enabled Data Storage',
    authorship: '2nd Author',
    authorList: 'Co-authored with Research Collaborators (Mostafizur Rahman Fahim as 2nd Author)',
    venue: 'IEEE ICCIT 2025',
    venueType: 'conference',
    status: 'published',
    year: 2025,
    publisher: 'IEEE',
    paperUrl: 'https://ieeexplore.ieee.org/document/11491718',
    doiUrl: 'https://doi.org/10.1109/ICCIT64551.2025.11491718',
    abstract:
      'Proposes a privacy-preserving semi-public blockchain architecture for decentralized ride-sharing. Implements RAFT consensus for fault-tolerant state machine replication and IPFS-enabled decentralized storage for off-chain trip telemetry, mitigating centralized intermediary fees and privacy vulnerabilities.',
    researchMotivation:
      'Centralized transportation network companies (TNCs) possess single points of failure, charge high commission rates (20-30%) on drivers, and harvest continuous passenger location telemetry. Decentralizing mobility operations requires solving on-chain storage bloat and transaction confirmation latency.',
    methodology:
      'Constructed a dual-layer decentralized system deploying Solidity smart contracts on a private permissioned Ethereum Geth network with RAFT consensus. Designed an off-chain IPFS storage cluster where high-frequency GPS telemetry is encrypted, pinned, and referenced on-chain solely via 32-byte cryptographic Content Identifiers (CIDs).',
    findingsAndResults: [
      'Decoupled on-chain/off-chain storage reduced blockchain storage costs by over 95% compared to monolithic on-chain recording.',
      'RAFT consensus provided deterministic block finality and low transaction latency suitable for real-time ride matching.',
      'Demonstrated end-to-end booking, driver dispatch, and escrow fare settlement without intermediary commission overhead.',
    ],
    keyContributions: [
      'Formulated a dual-layer on-chain / off-chain architecture isolating trip telemetry on IPFS with cryptographic proof verification on-chain.',
      'Evaluated latency, transaction throughput (TPS), and gas efficiency under concurrent passenger demand.',
      'Demonstrated enhanced rider-driver privacy preservation over centralized transportation intermediaries.',
    ],
    tags: [
      'Blockchain',
      'Ethereum Geth',
      'RAFT Consensus',
      'IPFS',
      'Ride-Sharing',
      'Smart Contracts',
      'IEEE ICCIT 2025',
    ],
    relatedProjectSlug: 'nextrip-blockchain',
    bibtex: `@inproceedings{fahim2025nextrip,
  title={NexTrip: A Semi-Public Blockchain Architecture for Privacy-Preserving Ride-Sharing with RAFT Consensus and IPFS-Enabled Data Storage},
  author={Research Collaborators and Fahim, Mostafizur Rahman},
  booktitle={2025 International Conference on Computer and Information Technology (ICCIT)},
  year={2025},
  publisher={IEEE},
  doi={10.1109/ICCIT64551.2025.11491718}
}`,
  },
  {
    id: 'ieee-qpain-monkeypox',
    slug: 'machine-learning-monkeypox-prediction',
    title: 'Machine Learning for Monkeypox Prediction',
    authorship: '2nd Author',
    authorList: 'Co-authored with Research Collaborators (Mostafizur Rahman Fahim as 2nd Author)',
    venue: 'IEEE QPAIN 2025',
    venueType: 'conference',
    status: 'published',
    year: 2025,
    publisher: 'IEEE',
    paperUrl: 'https://ieeexplore.ieee.org/document/11171682',
    certificateUrl:
      'https://drive.google.com/file/d/1yzk9d6_dsczP13RRMmGaU3bL74Xs-bIQ/view',
    doiUrl: 'https://doi.org/10.1109/QPAIN64213.2025.11171682',
    abstract:
      'Investigates machine learning classification methodologies for early monkeypox disease identification, comparing Convolutional Neural Networks (CNN), Support Vector Machines (SVM), and Decision Trees on dermatological lesion datasets for proactive healthcare diagnostics.',
    researchMotivation:
      'The global re-emergence of monkeypox (mpox) highlighted the urgent need for rapid, non-invasive computational screening tools to assist medical practitioners in distinguishing monkeypox cutaneous lesions from other clinically similar dermatological conditions such as chickenpox, measles, and eczema.',
    methodology:
      'Benchmarked multiple machine learning and computer vision paradigms across dermatological infection datasets. Implemented image preprocessing (resizing, contrast normalization, morphological filtering), extracted deep convolutional representations alongside handcrafted textural features, and evaluated classification algorithms.',
    findingsAndResults: [
      'Deep Convolutional Neural Networks (CNN) achieved superior feature discrimination over classical SVM and decision tree classifiers on multi-class lesion imagery.',
      'Data augmentation proved critical to avoid overfitting on limited clinical positive cases.',
      'Demonstrated the feasibility of machine-learning-assisted preliminary epidemiological screening.',
    ],
    keyContributions: [
      'Evaluated and benchmarked CNN, SVM, and tree-based classifiers on multi-class dermatological infection datasets.',
      'Engineered pre-processing and feature selection pipelines maximizing diagnostic sensitivity and specificity.',
      'Analyzed model performance trade-offs for proactive epidemiological disease surveillance.',
    ],
    tags: [
      'Machine Learning',
      'Healthcare AI',
      'CNN',
      'SVM',
      'Dermatological Diagnostics',
      'IEEE QPAIN 2025',
    ],
    bibtex: `@inproceedings{fahim2025monkeypox,
  title={Machine Learning for Monkeypox Prediction},
  author={Research Collaborators and Fahim, Mostafizur Rahman},
  booktitle={2025 International Conference on Quality, Productivity, and Artificial Intelligence (QPAIN)},
  year={2025},
  publisher={IEEE},
  doi={10.1109/QPAIN64213.2025.11171682}
}`,
  },
  {
    id: 'ijait-blockchain-ridesharing',
    slug: 'design-of-blockchain-ride-sharing-with-ipfs',
    title: 'Design of Blockchain Ride-Sharing with IPFS',
    authorship: '2nd Author',
    authorList: 'Co-authored with Research Collaborators (Mostafizur Rahman Fahim as 2nd Author)',
    venue: 'International Journal of Advanced Information Technology (IJAIT)',
    venueType: 'journal',
    status: 'published',
    year: 2025,
    publisher: 'AIRCC Publishing',
    paperUrl: 'https://www.researchgate.net/publication/395545438',
    abstract:
      'Details the system design and architectural trade-offs of decentralized ride-sharing using IPFS and consensus networks, addressing data privacy, transaction verification, and decentralized peer-to-peer transit without centralized intermediary lock-in.',
    researchMotivation:
      'Presents an extended journal-level inquiry into the protocols, cryptographic primitives, and distributed ledger configurations needed to sustain a commercially viable peer-to-peer transportation network at scale.',
    methodology:
      'Synthesized architectural designs for distributed state machines, evaluated gas consumption patterns of Solidity smart contracts under various batching schemes, and formulated content-addressable storage strategies on IPFS.',
    findingsAndResults: [
      'Documented the trade-off space between on-chain gas costs, transaction finality windows, and off-chain storage availability.',
      'Established formal cryptographic interfaces between smart contract state machines and distributed IPFS nodes.',
      'Proposed dispute resolution mechanisms using multi-signature escrow holding.',
    ],
    keyContributions: [
      'Proposed architectural specifications for decentralized transit systems mitigating centralized single points of failure.',
      'Addressed distributed data persistence challenges using InterPlanetary File System (IPFS) content-addressed hashes.',
      'Documented cryptographic smart contract interfaces for driver dispatch and payment escrow.',
    ],
    tags: [
      'Blockchain',
      'IPFS',
      'Smart Contracts',
      'Decentralized Systems',
      'Peer-to-Peer Transit',
      'IJAIT Journal',
    ],
    relatedProjectSlug: 'nextrip-blockchain',
    bibtex: `@article{fahim2025design,
  title={Design of Blockchain Ride-Sharing with IPFS},
  author={Research Collaborators and Fahim, Mostafizur Rahman},
  journal={International Journal of Advanced Information Technology (IJAIT)},
  year={2025},
  url={https://www.researchgate.net/publication/395545438}
}`,
  },
];
