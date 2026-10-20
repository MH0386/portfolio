export const intro = {
  location: "Giza, Egypt",
  name: "Mohamed Hisham Abdelzaher",
  summary:
    "AI and data science enthusiast. I studied computer science at Cairo University and have built personal projects in artificial intelligence and machine learning.",
};

export type Project = {
  title: string;
  dates?: string;
  summary?: string;
  href?: string;
};

export type Experience = {
  role: string;
  dates: string;
  text: string;
};

export type Education = {
  dates: string;
  heading: string;
  text: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  issued: string;
  href: string;
};

export const projects: Project[] = [
  { title: "Seismic Detection", dates: "Oct 2024" },
  { title: "Hexapod Robot", dates: "Nov 2023 – Present" },
  { title: "Chatacter", dates: "Oct 2023 – Present" },
  { title: "Facial Emotions Detection", dates: "Jul 2023 – Present" },
  { title: "Digit Recognizer", dates: "Aug 2023" },
  {
    title: "Titanic Classification",
    dates: "Aug 2023",
    summary: "Titanic - Machine Learning from Disaster",
  },
  { title: "Face Recognition", dates: "Jul 2023" },
  { title: "Handwritten Recognition", dates: "Jul 2023" },
  { title: "Product Recommendation", dates: "Jul 2023" },
  { title: "Spam Detection", dates: "Jul 2023" },
  {
    title: "Car Price Prediction",
    dates: "Apr 2023 – May 2023",
    summary:
      "AI-powered used cars price predictions with linear regression. Final project at the Google Developer Student Club Cairo University. Applied linear regression on a 10-column and 72,435-row dataset of used cars.",
  },
  {
    title: "Logistic Regression",
    dates: "Apr 2023",
    summary:
      "Implemented logistic regression from scratch. Applied 10-fold validation with 0.1, 0.01, 0.001, and 0.0001 learning rates from scratch. The model with the learning rate of 0.1 achieved the highest accuracy.",
  },
  {
    title: "Medical Insurance Cost Prediction",
    dates: "Feb 2023",
    summary:
      "Applied data analysis to the Medical Cost Personal dataset. The work showed how data analysis can clarify medical costs.",
  },
  {
    title: "Motorcycle Data Analysis",
    dates: "Feb 2023",
    summary:
      "Analyzed a motorcycle dataset of 1,061 columns and 7 rows. The data was cleaned and processed using Python and Pandas.",
  },
  {
    title: "Iris Classification",
    dates: "Dec 2022",
    summary:
      "Three-person team. Classified iris flowers into Setosa, Versicolor, and Virginica. Trained on 150 flowers and reached 97.7% accuracy.",
  },
  {
    title: "Game Rental",
    dates: "May 2022",
    summary:
      "Game rental store application. Used C# and Microsoft SQL Server LocalDB. Five-person team, finished in one week.",
  },
  {
    title: "MH0386.github.io",
    summary: "Personal website, built with Flutter.",
    href: "https://mh0386.github.io",
  },
];

export const experience: Experience[] = [
  {
    role: "Participant",
    dates: "Oct 2024",
    text: "NASA Space Apps Cairo. Cairo, Egypt.",
  },
  { role: "Attendant", dates: "Nov 2023", text: "DotPy." },
  {
    role: "Artificial Intelligence Intern",
    dates: "Aug 2023",
    text: "Science Land. Cairo, Egypt. Artificial intelligence bootcamp.",
  },
  {
    role: "Machine Learning Intern",
    dates: "Jul 2023",
    text: "Coding Raja Technologies. Hyderabad, India. One-month machine learning workshop. Worked on 3 projects.",
  },
  {
    role: "Intern",
    dates: "Jun 2023",
    text: "Creativa Hub Aswan. Aswan, Egypt. Career development bootcamp.",
  },
  {
    role: "Machine Learning Intern",
    dates: "Feb 2023 – Apr 2023",
    text: "DSC Cairo University. Giza, Egypt. Three-month machine learning workshop on data analysis and machine learning techniques, including time with instructors in the field. Worked on 5 projects.",
  },
];

export const education: Education[] = [
  {
    dates: "2020 – 2024",
    heading: "Bachelor's degree, Computer Science",
    text: "Cairo University. Machine learning internship at the Google Developer Student Club.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Dart Functions Framework",
    issuer: "Coursera",
    issued: "Aug 2022",
    href: "https://coursera.org/verify/X3R4PWA6F6DU",
  },
  {
    title: "Dart: Introducing Class Abstraction",
    issuer: "Coursera",
    issued: "Aug 2022",
    href: "https://coursera.org/verify/CBTJ62YWD3K7",
  },
  {
    title: "Dart: Using Functions with Lists and Maps",
    issuer: "Coursera",
    issued: "Aug 2022",
    href: "https://coursera.org/verify/XNCT9EVVDSN6",
  },
  {
    title: "Dart: Variables, Data Structures, Objects, and Conditionals",
    issuer: "Coursera",
    issued: "Aug 2022",
    href: "https://coursera.org/verify/ZPR9YGTJKDSM",
  },
  {
    title: "Introduction to Dart",
    issuer: "Coursera",
    issued: "Jul 2022",
    href: "https://coursera.org/verify/ZBJPMK8L47M2",
  },
  {
    title: "Introduction to Java",
    issuer: "Coursera",
    issued: "May 2022",
    href: "https://coursera.org/verify/UTPHVJYUDJV5",
  },
  {
    title: "Java Basics: Selection and Iteration",
    issuer: "Coursera",
    issued: "Apr 2022",
    href: "https://coursera.org/verify/JTM9KQJRRVPX",
  },
  {
    title: "SQL",
    issuer: "Sololearn",
    issued: "Apr 2022",
    href: "https://www.sololearn.com/certificates/CT-D0OEQKTQ",
  },
  {
    title: "C++ Basics: Selection and Iteration",
    issuer: "Coursera",
    issued: "Sep 2021",
    href: "https://coursera.org/verify/XBZVNYQD2ULL",
  },
  {
    title: "Python Programming Basics",
    issuer: "Information Technology Institute (ITI)",
    issued: "Jan 2021",
    href: "https://maharatech.gov.eg/badges/badge.php?hash=cdd36d5d43a2643e0b4b1ef117580488dc81fee7",
  },
];
