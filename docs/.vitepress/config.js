module.exports = {
  title: "GAPS Project Documentation",
  themeConfig: {
    logo: "https://gaps.hawkai.online/GAPS_JAPAN.png",
    siteTitle: "GAPS Technical Documentation",
    nav: [
      { text: "Home", link: "/src/index.md" },
      { text: "Dashboard", link: "/" },
      { text: "Student", link: "/src/students" },
    ],
    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "Introduction", link: "/src/introduction" },
          { text: "Features of GAPS", link: "/src/features" }
      ],
       
      },
      {
        text: "Student",
        collapsible: true,
        items: [
          { text: "Student Group", link: "/src/studentgroup" },
          { text: "Proficiency Test", link: "/src//proficiency" },
        ],
      },
      {
        text: "University",
        collapsible: false,
        items: [
          { text: "Adding University", link: "src/university" },
          { text: "Assign Student to University", link: "src/adduniversisty" },
        ],
      },
      {
        text: "Company",
        collapsible: true,
        items: [
          { text: "Work Type", link: "src/worktype" },
          { text: "Creating Company", link: "src/addcompany" },
          { text: "Company Assign", link: "src/assigncompany" },
        ],
      },
      {
        text: "Fee Structure",
        collapsible: true,
        items: [{ text: "Fee Structure", link: "/src/feestructure" }],
      },
      {
        text: "Mental Ability Questions",
        collapsible: true,
        items: [
          { text: "Mental Ability Questions", link: "/src/mentalability" },
        ],
      },
      {
        text: "Attendance",
        collapsible: true,
        items: [{ text: "Attendance", link: "/src/attendance" }],
      },
      {
        text: "Class",
        collapsible: true,
        items: [{ text: "Course", link: "/src/course" }],
      },
      {
        text: "Event",
        collapsible: true,
        items: [
          { text: "External Exam", link: "/src/external-exam" },
          { text: "Internal Exam", link: "/src/internal-exam" },
          { text: "Event", link: "/src/event" },
          { text: "Result", link: "/src/result" },
        ],
      },
      {
        text: "Instructor Part",
        collapsible: true,
        items: [
          {
            text: "Edit Class",
            link: "src/instructor/editClass",
          },
          {
            text: "Add Resource",
            link: "src/instructor/addResource",
          },
        ],
      },
    ],
  },
};
