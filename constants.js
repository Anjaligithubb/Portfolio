// Personal Information
const PERSONAL_INFO = {
    name: "Anjali K V",
    role: "Java Developer",
    fullRole: "Full Stack Java Developer",
    email: "anjalikvcse2024@gmail.com",
    phone: "+91 9380154082",
    location: "Bangalore, India",
    resumeLink: "https://drive.google.com/file/d/1Jjizcx6ynqa_NL_DOcgYH6KaBot8pn1h/view?usp=drivesdk",
    description: "Aspiring full stack developer skilled in frontend (HTML,CSS) and backend (Java) development.Proficient in building responsive,high performance web applications.passionate about clean coding,problem solving,and continuous learning,ready for entry level software development roles.Currently student at Tap Academy."

};

// Social Links
const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/anjali-kv-a16361223/",
    github: "https://share.google/En5mgEQWPP8Q0mJQH",
    instagram: "https://www.instagram.com/anjali_virupaksh?igsh=MWl3aWN6MWFnbDc2dw==&utm_source=ig_contact_invite"
};

// Typing Animation Texts
const TYPING_TEXTS = [
    "Java Developer",
    "Full Stack Web Developer",
    "Problem Solver",
    "Code Enthusiast"
];

// Code Board Content for Hero Section
const CODE_LINES = [
    {
        lineNumber: 1,
        content: 'public class Developer {',
        tokens: [
            { text: 'public class', type: 'keyword' },
            { text: ' ', type: 'text' },
            { text: 'Developer', type: 'variable' },
            { text: ' {', type: 'text' }
        ]
    },
    {
        lineNumber: 2,
        content: '  String name = "Anjali K V";',
        tokens: [
            { text: '  ', type: 'text' },
            { text: 'String', type: 'property' },
            { text: ' name = ', type: 'text' },
            { text: '"Anjali K V"', type: 'string' },
            { text: ';', type: 'text' }
        ]
    },
    {
        lineNumber: 3,
        content: '  String[] skills = {"Java", "HTML", "CSS"};',
        tokens: [
            { text: '  ', type: 'text' },
            { text: 'String[]', type: 'property' },
            { text: ' skills = {', type: 'text' },
            { text: '"Java"', type: 'string' },
            { text: ', ', type: 'text' },
            { text: '"HTML"', type: 'string' },
            { text: ', ', type: 'text' },
            { text: '"CSS"', type: 'string' },
            { text: '};', type: 'text' }
        ]
    },
    {
        lineNumber: 4,
        content: '  boolean passionate = true;',
        tokens: [
            { text: '  ', type: 'text' },
            { text: 'boolean', type: 'property' },
            { text: ' passionate = ', type: 'text' },
            { text: 'true', type: 'keyword' },
            { text: ';', type: 'text' }
        ]
    },
    {
        lineNumber: 5,
        content: '  // Ready to code amazing projects!',
        tokens: [
            { text: '  ', type: 'text' },
            { text: '// Ready to code amazing projects!', type: 'comment' }
        ]
    },
    {
        lineNumber: 6,
        content: '}',
        tokens: [
            { text: '}', type: 'text' }
        ]
    }
];

// Projects Data
const PROJECTS = [
    {
        id: 1,
        title: "Book management system",
        description: "Developed a full stack web application for managing a collection of books.It allows users to track book details like title,author,genere and reducing the time spent manually managing inventory.It offers a centralized platform that is easy to navigate,improving user experience for readers.",
        technologies: ["Java", "Spring Boot", "HTML", "CSS","JavaScript","MySQL", "REST API"],
        githubLink: "https://github.com/Anjaligithubb/BMS-project.git"
        
    },
    {
        id: 2,
        title: "Tic-Tac-Toe game",
        description: "Developed a Tic-Tac-Toe game using java.Player vs. Player mode,easy to use interfaceImproved logic and design by implementing algorithms for game stratergy.",
        technologies: ["Java", "OOPS concepts"],
        githubLink: "https://github.com/Anjaligithubb/Tic-Tac-Toe.git"
        
    },
    {
        id: 3,
        title: "Personal Portfolio website",
        description: "Designed and developed a responsive portfolio website showcasing skills,projects and achievements.Implemented clean ,user friendly UI with reusable components and smooth navigation for enhanced user experience.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "anjaligithubb.github.io/Portfolio/"
        
    }
];

// Education & Experience Timeline
const TIMELINE = [
    {
        id: 1,
        type: "education",
        title: "Full Stack Web Development",
        institution: "Tap Academy",
        location: "Bangalore",
        date: "2025 - 2025",
        icon: "🎓"
    },
    {
        id: 2,
        type: "experience",
        title: "Bachelor of Engineering",
        institution: "The Oxford College of Engineering",
        location: "Bangalore",
        date: "2020 - 2024",
        icon: "🎓"
        
    },
    {
        id: 3,
        type: "experience",
        title: "PUC",
        institution: "JSS INDP PU College",
        location: "Haranahalli",
        date: "2018-2020",
        icon: "🎓"
    },
    {
        id: 4,
        type: "certification",
        title: "SSLC",
        institution: "Sri Basavarajendra High School",
        location: "Arasikere",
        date: "2015-2018",
        icon: "🎓"
    }
];

// Skills Data
const SKILLS = [
    {
        name: "HTML/CSS",
        icon: "🎨",
        category: "web"
    },
    {
        name: "JavaScript",
        icon: "⚡",
        category: "programming"
    },
    {
        name: "Java",
        icon: "☕",
        category: "programming"
    },
    {
        name: "JDBC",
        icon: "🔗",
        category: "framework"
    },
    {
        name: "Hibernate",
        icon: "🛠️",
        category: "framework"
    },
    {
        name: "Servlet",
        icon: "⚙️",
        category: "web"
    },
    {
        name: "MySQL",
        icon: "🗃️",
        category: "database"
    },
    {
        name: "Git",
        icon: "🌿",
        category: "tools"
    }
];

// Statistics
const STATS = {
    projectsCompleted: 3,
    yearsExperience: 0,
    technologiesLearned: 7,
    certificationsEarned: 3
};

// Contact Information
const CONTACT_INFO = {
    email: PERSONAL_INFO.email,
    phone: PERSONAL_INFO.phone,
    location: PERSONAL_INFO.location,
    availability: "Available for new opportunities"
};

// Export all constants (for module systems)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PERSONAL_INFO,
        SOCIAL_LINKS,
        TYPING_TEXTS,
        PROJECTS,
        TIMELINE,
        SKILLS,
        STATS,
        CONTACT_INFO
    };
}
