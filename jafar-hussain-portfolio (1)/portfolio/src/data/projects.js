export const categories = ['All', 'AI/ML', 'Full Stack', 'Web App']

export const projects = [
  {
    id: 1,
    title: 'Real-Time Road Accident Detection',
    description:
      'A computer vision system that detects road accidents from live CCTV/RTSP feeds in real time and triggers automated SMS alerts within the "golden hour" to speed up emergency response.',
    tech: ['YOLOv8', 'CNN', 'OpenCV', 'Python', 'Twilio', 'Flask'],
    category: 'AI/ML',
    github: 'https://github.com/hussainjafar1338ali/AI-Based-Accident-Detection-System',
    demo: ' /acciden detection.mp4',
    image: 'accident-demo.png',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Attendance System',
    description:
      'Face-recognition based attendance system that identifies students from a live camera feed and logs attendance automatically to a database, removing manual roll calls.',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'MySQL'],
    category: 'AI/ML',
    github: 'https://github.com/jafarhussain/ai-attendance-system',
    demo: '#',
    image: 'attendance',
  },
  {
    id: 3,
    title: 'Weather Forecast Web App',
    description:
      'A responsive weather application that fetches live forecasts by city or geolocation, with animated weather states and a clean, glanceable UI.',
    tech: ['React', 'Tailwind CSS', 'OpenWeather API'],
    category: 'Web App',
    github: 'https://github.com/jafarhussain/weather-app',
    demo: '#',
    image: 'weather',
  },
  {
    id: 4,
    title: 'E-Commerce Website',
    description:
      'A full-featured online store with product catalog, cart, coupon codes, and checkout flow, built with a focus on a smooth, conversion-friendly shopping experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/jafarhussain/ecommerce-site',
    demo: '#',
    image: 'ecommerce',
    featured: true,
  },
  {
    id: 5,
    title: 'Student Management System',
    description:
      'A CRUD-based system for managing student records, attendance, and grades, built for a college administration workflow with role-based access.',
    tech: ['Java', 'MySQL', 'JavaFX'],
    category: 'Full Stack',
    github: 'https://github.com/jafarhussain/student-management-system',
    demo: '#',
    image: 'student',
  },
  {
    id: 6,
    title: 'Expense Tracker',
    description:
      'A personal finance tracker that visualizes income and spending trends over time with category-wise breakdowns and monthly summaries.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'Full Stack',
    github: 'https://github.com/jafarhussain/expense-tracker',
    demo: '#',
    image: 'expense',
  },
  {
    id: 7,
    title: 'AI Chatbot',
    description:
      'A context-aware chatbot for answering FAQs and guiding users, built on an NLP pipeline with intent classification and a lightweight web widget.',
    tech: ['Python', 'NLP', 'Flask', 'JavaScript'],
    category: 'AI/ML',
    github: 'https://github.com/jafarhussain/ai-chatbot',
    demo: '#',
    image: 'chatbot',
  },
  {
    id: 8,
    title: 'Portfolio Website',
    description:
      'This site — a dark, glassmorphic personal portfolio built to showcase projects and skills with smooth motion and a fast, responsive UI.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web App',
    github: 'https://github.com/jafarhussain/portfolio',
    demo: '#',
    image: 'portfolio',
  },
]
