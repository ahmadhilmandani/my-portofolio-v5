export const data = [
  {
    id: 1,
    title: "Camaba",
    logo: "./projects/logo_camaba.svg",
    type: "Personal Project",
    role: "Frontend Web",
    year: 2024,
    isPrimaryButtonToSite: true,
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
    id: 1,
    title: "Quiz App",
    logo: "./projects/game-app-logo.svg",
    type: "Personal Project",
    role: "Frontend Web",
    year: 2024,
    isPrimaryButtonToSite: true,
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
];
