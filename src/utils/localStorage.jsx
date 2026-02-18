const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "Arjun123@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve issue where login button is unresponsive.",
        date: "2025-09-17",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update homepage banner",
        description: "Change hero section banner image for festive offer.",
        date: "2025-09-19",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Test checkout flow",
        description:
          "Perform end-to-end testing of checkout with cash on delivery.",
        date: "2025-09-20",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 2,
    firstName: "Isha",
    email: "Isha123@gmail.com",
    password: "123",
    tasks: [
      {
        title: "API integration",
        description: "Integrate product API with frontend search.",
        date: "2025-09-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code review",
        description: "Review pull requests for bug fixes.",
        date: "2025-09-19",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Optimize images",
        description: "Compress product images for faster loading.",
        date: "2025-09-22",
        category: "Performance",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix footer links",
        description: "Update privacy policy and terms of service links.",
        date: "2025-09-23",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: { active: 1, newTask: 2, completed: 2, failed: 0 },
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "Kabir123@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Design new logo",
        description: "Create a modern logo for branding refresh.",
        date: "2025-09-21",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare presentation",
        description: "Make slides for client meeting.",
        date: "2025-09-25",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug triage",
        description: "Sort and categorize open GitHub issues.",
        date: "2025-09-24",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: { active: 1, newTask: 2, completed: 1, failed: 0 },
  },
  {
    id: 4,
    firstName: "Meera",
    email: "Meera123@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Database migration",
        description: "Move old user data to new schema.",
        date: "2025-09-18",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Security audit",
        description: "Check for vulnerabilities in authentication flow.",
        date: "2025-09-20",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Improve search filter",
        description: "Add category and price range filters.",
        date: "2025-09-26",
        category: "Feature",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Analytics setup",
        description: "Enable Google Analytics on product pages.",
        date: "2025-09-27",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: { active: 1, newTask: 2, completed: 1, failed: 1 },
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "Rohan123@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Customer feedback survey",
        description: "Design and launch post-purchase survey.",
        date: "2025-09-19",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Mobile responsiveness",
        description: "Fix alignment issues on checkout page for small screens.",
        date: "2025-09-22",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Blog article",
        description: "Write article on best payment practices.",
        date: "2025-09-23",
        category: "Content",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: { active: 1, newTask: 2, completed: 1, failed: 0 },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

