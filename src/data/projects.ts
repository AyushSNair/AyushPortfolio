export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  overview: string;
  features: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  architecture: string;
  challenges: string;
  learnings: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress' | 'research';
  highlight?: boolean;
  tags: string[];
  color: string;
  icon: string;
  metrics?: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: 'fall-detection',
    title: 'Fall Detection System',
    tagline: 'Real-time AI-powered fall detection for elder care',
    category: 'AI / Computer Vision',
    year: '2024–2025',
    overview:
      'A real-time fall detection system developed at IISER Mohali that leverages YOLOv8-OBB (Oriented Bounding Boxes) combined with MediaPipe pose estimation to detect human falls with high accuracy. The system reduces false positives by 60% compared to baseline methods and integrates a healthcare monitoring module with caregiver alert notifications to reduce emergency response latency.',
    features: [
      'Real-time video stream analysis with YOLOv8-OBB detection',
      'MediaPipe skeletal pose estimation for precise body orientation',
      '60% reduction in false positives over baseline models',
      '20% improvement in overall system reliability',
      'Integrated caregiver alert notification system via REST API',
      'Healthcare monitoring module for continuous patient tracking',
      'Multi-camera support for comprehensive coverage',
      'Configurable alert thresholds and sensitivity settings',
    ],
    techStack: [
      { category: 'AI / ML', items: ['YOLOv8-OBB', 'MediaPipe', 'TensorFlow', 'OpenCV'] },
      { category: 'Backend', items: ['Python', 'Flask', 'REST API'] },
      { category: 'Infrastructure', items: ['Linux/Ubuntu', 'Docker'] },
    ],
    architecture:
      'The system processes live video frames through a multi-stage pipeline: (1) Frame capture from camera feeds, (2) YOLOv8-OBB detection of human subjects with oriented bounding boxes, (3) MediaPipe pose landmark extraction for body orientation analysis, (4) Custom fall classification algorithm combining bounding box angle + pose keypoints, (5) Alert dispatcher sending notifications via REST API to caregiver devices.',
    challenges:
      'The primary challenge was reducing false positives caused by sitting, bending, or lying-down activities that visually resemble falls. This was solved by combining YOLOv8-OBB orientation data with MediaPipe hip-to-ankle vector analysis.',
    learnings: [
      'Oriented bounding boxes significantly outperform axis-aligned boxes for human pose analysis',
      'Fusing multiple detection modalities dramatically reduces error rates',
      'Real-world deployment requires careful calibration per-environment',
      'Alert latency optimization is as critical as detection accuracy in life-safety systems',
    ],
    github: 'https://github.com/AyushSNair',
    status: 'completed',
    highlight: true,
    tags: ['YOLOv8', 'MediaPipe', 'OpenCV', 'Flask', 'Python', 'Computer Vision'],
    color: 'from-violet-600 to-indigo-600',
    icon: '🧠',
    metrics: [
      { label: 'False Positive Reduction', value: '60%' },
      { label: 'System Reliability Gain', value: '20%' },
      { label: 'Response Latency', value: 'Real-time' },
    ],
  },
  {
    id: 'vaniconnect',
    title: 'VaniConnect',
    tagline: 'Sign Language Transcriber bridging communication gaps',
    category: 'AI / NLP',
    year: '2024',
    overview:
      'VaniConnect is an AI-powered sign language transcription system that recognizes Indian Sign Language (ISL) and American Sign Language (ASL) gestures in real-time using computer vision and deep learning. Achieved 85% gesture recognition accuracy across 200+ ISL and ASL patterns. Won 1st place among 60+ teams in the college Summer Project Competition.',
    features: [
      '85% gesture recognition accuracy across 200+ ISL & ASL patterns',
      'Real-time hand landmark detection using MediaPipe',
      'Support for both ISL (Indian) and ASL (American) sign languages',
      'TensorFlow-based LSTM classifier for temporal gesture sequences',
      'Text output with sentence construction capability',
      'Low-latency inference suitable for live conversation',
      '🏆 1st Place — Summer Project Competition (60+ teams)',
    ],
    techStack: [
      { category: 'AI / ML', items: ['TensorFlow', 'Keras', 'MediaPipe', 'LSTM'] },
      { category: 'Computer Vision', items: ['OpenCV', 'NumPy'] },
      { category: 'Language', items: ['Python'] },
    ],
    architecture:
      'The pipeline captures webcam frames → MediaPipe extracts 21 hand landmarks per frame (63 coordinates) → Sequences of 30 frames are fed into an LSTM network → The model outputs one of 200+ gesture classes → A sentence builder accumulates recognized words into coherent output.',
    challenges:
      'Handling variations in hand size, skin tone, lighting, and camera angle. Solved by augmenting training data with synthetic transforms and normalizing hand landmarks relative to wrist position.',
    learnings: [
      'Temporal sequence modeling (LSTM) is crucial for gesture recognition vs. static pose classification',
      'MediaPipe hand landmarks provide a powerful, lightweight feature representation',
      'Data augmentation is essential for robust real-world performance',
      'Accessibility-focused projects have massive societal impact potential',
    ],
    github: 'https://github.com/AyushSNair',
    status: 'completed',
    highlight: true,
    tags: ['TensorFlow', 'MediaPipe', 'OpenCV', 'LSTM', 'Python', 'ISL', 'ASL'],
    color: 'from-emerald-600 to-teal-600',
    icon: '🤝',
    metrics: [
      { label: 'Recognition Accuracy', value: '85%' },
      { label: 'Gesture Patterns', value: '200+' },
      { label: 'Competition Rank', value: '1st / 60+' },
    ],
  },
  {
    id: 'delta-investments',
    title: 'Delta Investments',
    tagline: 'AI-powered full-stack investment & portfolio tracking platform',
    category: 'Full Stack / FinTech',
    year: '2024',
    overview:
      'Delta Investments is a full-stack MERN investment platform featuring real-time stock data feeds, AI-driven risk analysis via Google Gemini API, portfolio tracking, and intelligent alert generation. Designed for retail investors who want data-driven insights without Wall Street-level complexity.',
    features: [
      'Real-time stock price feeds via market data APIs',
      'AI-driven risk analysis and investment insights using Gemini API',
      'Portfolio dashboard with P&L tracking and allocation charts',
      'Automated alert generation for price thresholds and risk events',
      'User authentication and secure session management',
      'Interactive charts powered by Recharts',
      'Responsive design for mobile and desktop trading',
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'REST API'] },
      { category: 'Database', items: ['MongoDB', 'Mongoose'] },
      { category: 'AI', items: ['Google Gemini API'] },
    ],
    architecture:
      'MERN stack: React frontend → Express REST API → MongoDB for user/portfolio data. Real-time stock data is fetched from a market API and cached in Redis. Gemini API processes portfolio data to generate natural language risk summaries and recommendations.',
    challenges:
      'Integrating real-time data feeds efficiently without overwhelming API rate limits. Solved with intelligent caching and polling strategies.',
    learnings: [
      'Building production-ready MERN applications with proper state management',
      'LLM integration for domain-specific financial analysis',
      'Real-time data architecture with caching for performance',
      'Financial data visualization and UX for complex datasets',
    ],
    github: 'https://github.com/AyushSNair',
    status: 'completed',
    highlight: true,
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Gemini AI', 'MERN'],
    color: 'from-amber-500 to-orange-600',
    icon: '📈',
    metrics: [
      { label: 'Stack', value: 'MERN' },
      { label: 'AI Integration', value: 'Gemini API' },
      { label: 'Data Type', value: 'Real-time' },
    ],
  },
  {
    id: 'hexavision',
    title: 'HexaVision',
    tagline: 'AI-powered wirebond inspection desktop app for TIFR',
    category: 'Computer Vision / Desktop',
    year: '2025',
    overview:
      'HexaVision is a production-grade PyQt5 desktop application developed at TIFR (Tata Institute of Fundamental Research) for automated wirebond inspection. Uses ORB-RANSAC homography for alignment and a custom RF-DETR object detection model for gold pad inspection across 92 step-holes per board. Reduced QC review time by 80%.',
    features: [
      'ORB-RANSAC homography-based board alignment pipeline',
      'CLAHE upscaling for enhanced image quality',
      'Custom RF-DETR object detection model for gold pad inspection',
      'REST API deployment of ML model for real-time inference',
      'Automated PDF/CSV report generation for inspection results',
      'Multi-threaded processing with real-time progress tracking',
      'PyQt5 desktop GUI adopted daily by lab engineers',
      '80% reduction in QC review time across 92 step-holes per board',
    ],
    techStack: [
      { category: 'Computer Vision', items: ['OpenCV', 'ORB-RANSAC', 'CLAHE', 'RF-DETR'] },
      { category: 'Desktop App', items: ['PyQt5', 'Python', 'Multi-threading'] },
      { category: 'ML Serving', items: ['REST API', 'PyTorch'] },
      { category: 'Reporting', items: ['PDF Generation', 'CSV Export'] },
      { category: 'Platform', items: ['Linux/Ubuntu'] },
    ],
    architecture:
      'Image acquisition → ORB feature extraction → RANSAC homography estimation → CLAHE preprocessing → RF-DETR model inference via REST API → Result overlay on board image → Automated PDF/CSV report generation → Multi-threaded UI updates via PyQt5 signals.',
    challenges:
      'Handling extreme variation in lighting and camera position between inspection sessions. ORB-RANSAC homography provided a robust solution for board alignment without manual calibration.',
    learnings: [
      'Production ML deployment in regulated lab environments requires robust error handling',
      'Multi-threaded GUI development in PyQt5 with signal/slot patterns',
      'ORB-RANSAC is highly effective for feature matching under perspective distortion',
      'Automated report generation significantly improves adoption of AI tools',
    ],
    github: 'https://github.com/AyushSNair',
    status: 'completed',
    highlight: false,
    tags: ['Python', 'PyQt5', 'OpenCV', 'RF-DETR', 'REST API', 'Computer Vision'],
    color: 'from-sky-600 to-blue-700',
    icon: '🔬',
    metrics: [
      { label: 'QC Time Reduction', value: '80%' },
      { label: 'Step-holes per Board', value: '92' },
      { label: 'Deployment', value: 'Production' },
    ],
  },
  {
    id: 'oss-tracker',
    title: 'Open Source Tracker',
    tagline: 'Real-time analytics dashboard for GitHub contributions',
    category: 'Full Stack / Developer Tools',
    year: '2024',
    overview:
      'A real-time analytics dashboard that tracks open source contributions across 20+ GitHub repositories. Features shareable developer profiles, trend visualizations, contribution heatmaps, and multi-repo analytics — built for developers who want to showcase and analyze their GitHub impact.',
    features: [
      'Real-time contribution tracking across 20+ GitHub repositories',
      'Shareable developer profile pages with custom URLs',
      'Contribution trend visualizations and heatmaps',
      'Repository analytics with issue, PR, and commit breakdowns',
      'GitHub REST API integration for live data fetching',
      'MongoDB storage for contribution history and caching',
      'React dashboard with interactive charts',
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Recharts'] },
      { category: 'Backend', items: ['Node.js', 'Express.js'] },
      { category: 'Database', items: ['MongoDB'] },
      { category: 'APIs', items: ['GitHub REST API'] },
    ],
    architecture:
      'React SPA → Node.js/Express API → GitHub REST API (with OAuth token auth) → MongoDB for caching/history. Webhook listeners for real-time updates on contribution events.',
    challenges: 'GitHub API rate limiting and keeping data fresh across many repositories.',
    learnings: [
      'GitHub REST API rate limit management strategies',
      'Building developer-centric analytics products',
      'MongoDB schema design for time-series contribution data',
      'Webhook-driven real-time update architectures',
    ],
    github: 'https://github.com/AyushSNair',
    status: 'completed',
    highlight: false,
    tags: ['React', 'Node.js', 'MongoDB', 'GitHub API', 'TypeScript'],
    color: 'from-pink-600 to-rose-600',
    icon: '📊',
    metrics: [
      { label: 'Repos Tracked', value: '20+' },
      { label: 'Data Source', value: 'GitHub API' },
      { label: 'Storage', value: 'MongoDB' },
    ],
  },
];

export default projects;
