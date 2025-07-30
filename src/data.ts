export const data = [
  {
    id: 0,
    title: "SEA Catering",
    logo: "./projects/sea-catering-logo.svg",
    type: "Submition",
    role: "Fullstack",
    year: 2025,
    techUsed: ["React", "Tailwind", "Redux", "Express", "MySQL", "Figma", "YAML"],
    linkToFESite: "https://fe-sea-catering.netlify.app/",
    linkToFEGithub: "https://github.com/ahmadhilmandani/fe-sea-catering",
    linkToBEGithub: "https://github.com/ahmadhilmandani/be-sea-catering",
    shortDesc:
      "A healthy meal ordering website with customizable subscriptions and nutrition tracking, built as a concept for SEA Catering.",
    overview: `SEA Catering is a conceptual web platform for a healthy meal delivery service, designed to reflect the core vision of “Healthy meals, delivered anywhere.” Although the project serves as a dummy prototype, it mimics the real-world functionalities of a full-featured catering business.

    Built with a focus on user experience, SEA Catering allows customers to explore a curated menu of nutritious meals, view detailed nutritional information, and place orders with ease. The core highlight of the platform is its smart subscription system, which enables users to automate their meal plans according to their schedule and preferences—helping them stay committed to a healthy lifestyle without hassle.

    From the business side, an admin dashboard is integrated to track performance metrics like Monthly Recurring Revenue (MRR), new subscriptions, and reactivated users—those who paused and later resumed their subscription. This makes SEA Catering not just a user-friendly experience for customers, but also a valuable analytical tool for business growth.`,
    keyFeatures: [
      {
        title: "Order Healthy Meals Online (Customer)",
        desc: "Browse through a list of healthy, chef-crafted meals and place orders for delivery with just a few clicks.",
      },
      {
        title: "View Complete Nutritional Info (Customer)",
        desc: `Every meal comes with a full breakdown of macronutrients and calories, helping users make informed dietary choices.`,
      },
      {
        title: "Subscription System with Custom Scheduling (Customer)",
        desc: `Users can subscribe to recurring meal plans, choosing the exact days and meals they want delivered each week. This eliminates the need to order repeatedly.`,
      },
      {
        title: "Pause or Cancel Subscription Anytime (Customer)",
        desc: `Subscriptions are flexible—users can pause their deliveries for a specific time or cancel them entirely with no friction.`,
      },
      {
        title: "View Monthly Recurring Revenue (Admin)",
        desc: `Real-time data on total recurring income from active subscriptions to evaluate business health.`,
      },
      {
        title: "Monitor New Subscriptions (Admin)",
        desc: `Keep track of the latest users who join the subscription service.`,
      },
      {
        title: "Track Reactivations (Admin)",
        desc: `Identify users who previously paused their subscriptions and chose to re-activate them—useful for retention analytics and marketing.`,
      },
    ],
    lessonLearn: `SEA Catering was a deeply meaningful project for me—not just technically, but also personally. It marked the very first time I built and completed a full-stack web application entirely on my own, from start to finish. Unlike my previous experiences, where I worked in a team and responsibilities were distributed, this time I handled everything: design, frontend, backend, and deployment.

    That independence challenged me in ways I hadn’t fully anticipated. I was forced out of my comfort zone and into roles I had only partially experienced before. Designing the UI/UX gave me a deeper appreciation for layout, usability, and accessibility. Building the frontend taught me to think in components, manage state effectively, and integrate dynamic data smoothly. On the backend, I built RESTful APIs, handled authentication, managed databases, and set up subscription logic. These were things I had done in parts before, but never all at once—and never fully under my control.

    One of the most fulfilling moments in this journey was being able to deploy both the frontend and backend successfully using DOM Cloud. It may sound simple, but for me, it was special. Previously, deployment was something handled by someone else in the team—or it was partial, like frontend only. This time, it was me, end-to-end. Seeing the entire application live and working felt like a real milestone.

    Along the way, I also encountered and learned new technologies and concepts, one of which was YAML. I had heard of it before, but SEA Catering was my first real hands-on experience using it—particularly in configuration files for deployment or service integration. Understanding how indentation and structure define the behavior of your setup was both frustrating and eye-opening. But once it clicked, YAML became an invaluable part of my toolset.

    In short, SEA Catering wasn’t just a project to showcase features—it became a personal proof of capability. It taught me discipline, responsibility, and confidence as a developer. It reminded me that I can build real, complete things from the ground up. And more than anything, it fueled my motivation to keep learning and pushing forward.
    `
  },
  {
    id: 1,
    title: "Camaba",
    logo: "./projects/logo_camaba.svg",
    type: "Competition",
    role: "Frontend Web",
    year: 2024,
    techUsed: ["Vue", "Tailwind", "Pinia"],
    linkToFESite: "https://camaba.netlify.app/",
    linkToFEGithub: "https://github.com/ahmadhilmandani/fe-idcamp24-challenge",
    linkToBEGithub: null,
    shortDesc:
      "A web platform to discover skills and recommend suitable college majors through a series of aptitude-based questions.",
    overview: `Camaba is an intelligent web-based application designed to assist prospective college students in identifying their natural skills, talents, and potential academic paths. By presenting users with a curated set of questions that assess various cognitive abilities, interests, and aptitudes, Camaba analyzes the responses using a scoring and classification system to determine the user's dominant strengths.
    
    Once the evaluation is complete, Camaba generates personalized recommendations for college majors that align with the user's skill profile. The goal is to empower students—especially those uncertain about their future—to make informed decisions about their academic journey and career aspirations.
    
    Built with user experience in mind, Camaba features a clean, accessible interface and intuitive navigation.The system can be used by individuals or educational institutions looking to guide students during the college admission process.Ultimately, Camaba bridges the gap between self- awareness and academic planning, offering meaningful insights for a more confident and purposeful future.`,
    keyFeatures: [
      {
        title: "Skill Assessment",
        desc: "Camaba provides a structured aptitude test consisting of multiple questions across various categories, such as logical reasoning, verbal ability, numerical skills, visual-spatial awareness, and personality traits. Based on user responses, the system analyzes patterns to identify dominant skills or natural inclinations. The results offer insights into the user’s core strengths, helping them understand which areas they excel in.",
      },
      {
        title: "Major Recommendation Based on Identified Skills",
        desc: `After the skill assessment, Camaba maps the identified strengths to a curated list of college majors that typically align with those skills. For example, a user with high scores in analytical thinking may be recommended majors such as Computer Science, Engineering, or Mathematics. The recommendation is designed to match academic paths with the user’s potential, making it easier to choose a field of study that suits their talents and interests.
        
        Each recommended major includes a brief explanation and rationale, helping users connect their personal strengths with real academic and career options. This ensures the recommendations are not only relevant but also actionable.`,
      },
    ],
  },
  {
    id: 2,
    title: "Quiz App",
    logo: "./projects/game-app-logo.svg",
    type: "Personal Project",
    role: "Frontend Web",
    year: 2024,
    techUsed: ["React", "Tailwind", "Redux"],
    linkToFESite: "https://quiz-app-ahmadhilmandani.netlify.app/",
    linkToFEGithub: "https://github.com/ahmadhilmandani/quiz-react-redux",
    linkToBEGithub: null,
    shortDesc:
      "A fun and interactive trivia web app to test knowledge across various categories and challenge your thinking.",
    overview: `Quiz App is a dynamic, browser-based trivia platform designed to entertain and educate users by challenging their knowledge across a wide range of topics. Whether you're a casual learner or a trivia enthusiast, Quiz App provides an engaging experience through carefully crafted multiple-choice questions in categories like General Knowledge, Science, History, Pop Culture, and more.

    The application features a clean and responsive user interface, making it accessible on both desktop and mobile devices. Users can choose a category, set the difficulty level, and start the quiz instantly. Each session provides real-time feedback, tracks the user’s score, and displays the correct answers to enhance learning.

    To encourage repeat engagement, Quiz App can also support features like leaderboards, timed quizzes, and user progress tracking (optional depending on implementation). It's perfect for individuals looking to sharpen their knowledge, students preparing for competitive exams, or groups seeking an enjoyable educational activity.

    With its lightweight structure and intuitive design, Quiz App is more than just a game—it’s a gateway to fun learning.`,
    keyFeatures: [
      {
        title: "Answering Trivia Questions",
        desc: `Quiz App allows users to engage with a set of multiple-choice trivia questions. Users can select a topic or difficulty level (if available), and the app will present a series of questions one by one. Each question has several answer options, and users must choose the one they believe is correct. This interactive format helps keep users focused and entertained while testing their knowledge.`,
      },
      {
        title: "Scoring System",
        desc: `After each answer is submitted, the app provides immediate feedback—indicating whether the user answered correctly or not. At the end of the quiz, the app displays the final score, typically as the number of correct answers out of the total questions. This scoring system helps users track their performance, measure improvement over time, and stay motivated to try again.`,
      },
    ],
  },
  {
    id: 3,
    title: "To Do List",
    logo: "./projects/react-simple-planner-logo.svg",
    type: "Submition",
    role: "Frontend Web",
    year: 2024,
    techUsed: ["React", "Tailwind"],
    linkToFESite: "https://to-do-list-ahmadhilmandani.netlify.app/",
    linkToFEGithub:
      "https://github.com/ahmadhilmandani/Frontendmentor-Hilman/tree/to-do-list-part-2",
    linkToBEGithub: null,
    shortDesc:
      "A simple and responsive to-do list web app built with React, created for a Frontend Mentor coding challenge.",
    overview: `To Do List is a minimalist and interactive task management web application developed using React, as part of a submission for the Frontend Mentor To-Do App Challenge. The goal of this project is to build a fully functional and visually appealing to-do list interface that supports essential task operations while demonstrating proficiency in frontend development best practices.

    The app allows users to create, manage, and organize daily tasks in a clean and distraction-free interface. With a responsive design, it adapts beautifully across desktop and mobile screens. It also includes support for dark and light themes, enhancing usability and aesthetic consistency.

    Designed to prioritize user experience and simplicity, this project focuses on both functionality and polished UI, making it a great example of building real-world applications using modern frontend frameworks like React.`,
    keyFeatures: [
      {
        title: "Add New Task",
        desc: `Users can enter a new to-do item using the input field at the top of the list. Once submitted, the task appears immediately in the list of items to be completed.`,
      },
      {
        title: "Mark Task as Completed",
        desc: `Each task includes a checkbox. Clicking the checkbox marks the task as completed, visually updating the item with a strikethrough or dimmed appearance to indicate it's done.`,
      },
      {
        title: "Delete Task",
        desc: `Tasks can be easily removed from the list using a delete (usually ×) icon next to each item. This helps users maintain a clean and focused to-do list.`,
      },
    ],
  },
  {
    id: 4,
    title: "Calculator App",
    logo: "./projects/calculator-app-logo.svg",
    type: "Submition",
    role: "Frontend Web",
    year: 2024,
    techUsed: ["HTML", "CSS", "JS"],
    linkToFESite:
      "https://ahmadhilmandani.github.io/Frontendmentor-Hilman/calculator/",
    linkToFEGithub:
      "https://github.com/ahmadhilmandani/Frontendmentor-Hilman/tree/main/calculator",
    linkToBEGithub: null,
    shortDesc:
      "A modern web-based calculator with essential functions and three visually distinct themes for a customizable user experience.",
    overview: `Calculator App is a sleek, responsive, and theme-switchable web calculator built with a modern design approach. The project focuses on delivering a smooth and intuitive user experience while covering all the essential arithmetic functions you'd expect from a standard calculator—addition, subtraction, multiplication, and division.

    What sets this calculator apart is its built-in theme customization feature. Users can switch between three different color themes (e.g., dark, light, and vibrant modes), offering a personalized interface that suits individual visual preferences or lighting conditions. The calculator adapts responsively to various screen sizes, making it equally usable on desktop and mobile devices.

    Whether you're crunching numbers for work, school, or daily tasks, the Calculator App combines functionality and aesthetics to make the experience more pleasant and engaging.
    `,
    keyFeatures: [
      {
        title: "Basic Calculator Functions",
        desc: `Perform standard operations such as addition, subtraction, multiplication, and division with a clear and easy-to-use interface.`,
      },
    ],
  },
];
