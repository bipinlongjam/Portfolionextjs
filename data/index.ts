export const navItems = [
    {name:"<Bipin/>", link:"#"},
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#exprience" },
    { name: "About", link: "#about" },
    { name: "Resume", link: "#about" },
    { name: "Skills", link: "#skills" },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Chit-Chat (Chat Application)",
      des: "Users can have real-time chats with a messaging app built with Zustand for state management, and Socket.io and React Context for real-time messaging and online status.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/bipinlongjam/chat-app",
      link1:'https://chit-chat-6hqw.onrender.com'
    },
    {
      id: 2,
      title: "MarketNest - E-commerce",
      des:"The e-commerce website offers user authentication and personalized cart management, efficiently managing state with the Context API.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/bipinlongjam/happyshop",
      link1:"https://marketnest.netlify.app/"
    },
    {
      id: 3,
      title: "Mail Box Client",
      des:"The Mailbox Client is a user-friendly app for sending and receiving emails. Each user has their own account with separate sent items and inboxes.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/bipinlongjam/mailbox",
    },
  ];
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineer Trainee",
      company:'Cloudberry360 Technologies Pvt. , Bangalore',
      period:"June 2022 - March 2023",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web-Development Intern",
      company:"Dot Square Academy, Jaipur",
      period:"May 2018 - July 2018", 
      desc: "Learn web development with small projects for college",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];