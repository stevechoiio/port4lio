let resumeData = {
  imagebaseurl: "../bg.jpg",
  name: "Steve Choi",
  role: "Full-stack Developer",
  linkedinId: "stevechoi93",
  skypeid: "Your skypeid",
  roleDescription: "",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/stevechoi93/",
      className: "fa fa-linkedin"
    },
    {
      name: "github",
      url: "http://github.com/stevechoiio",
      className: "fa fa-github"
    },
    {
      name: "email",
      url: "mailto:stevechoi93@gmail.com",
      className: "fa fa-envelope"
    }
  ],
  aboutme: "I",
  address: "Vancouver,BC",
  website: "github.com/stevechoiio",
  education: [
    {
      UniversityName: "University of British Columbia",
      UniversityURL: "https://www.ubc.ca/",
      specialization: "Major in Philosophy",
      MonthOfPassing: "May",
      YearOfPassing: "2017",
      Achievements: "Bachelor of Arts"
    }
  ],
  work: [
    {
        CompanyName: "Kater",
        specialization: "Backend Software Engineer",
        MonthOfLeaving: "01",
        YearOfLeaving: "2020",
        Achievements: "",
        url:"https://www.kater.com/"
      },
      {
        CompanyName: "Playr.GG",
        specialization: "Mobile Application Developer",
        MonthOfLeaving: "",
        YearOfLeaving: "2019",
        Achievements: "",
        url:"https://playr.gg/"
      },
    {
      CompanyName: "St.Andrew's Community Centre",
      specialization: "Assistant Python Instructor",
      MonthOfLeaving: "",
      YearOfLeaving: "2018",
      Achievements: "",
      url:"http://standrewkim.com/main/frame.php"
    }
  ],
  skillsDescription: "",
  skills: [
    {
      skillname: "Node"
    },
    {
      skillname: "React"
    },
    {
      skillname: "Python"
    },
    {
      skillname: "AWS"
    },
    {
      skillname: "GraphQL"
    },
    {
      skillname: "mongoDB"
    },
    {
      skillname: "PostgreSQL"
    }
  ],
  portfolio: [
    {
      name: "Cool IT!",
      description:
        "Mobile application designed for BC Sustainable Energy Association. I have implemented the backend of the app to allow users to login by authentication and log daily activites to track their habits.",
      imgurl: "images/portfolio/coolitlogo.jpg"
    },
    {
      name: "Loyal Flush",
      description:
        "It's the cleaniest washroom finder. This app has been built from scratch in a team of two developers. Beta currently available in App store! ",
      imgurl: "images/portfolio/loyalflush.jpg"
    },

    {
      name: "FitGO",
      description:
        "Mobile application designed to let local personal trainers connect with their clients. I have built the data and the functions to let clients filter and view personal trainers on Google Map, and favourite their trainers!",
      imgurl: "images/portfolio/fitgoLogo.jpg"
    }
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy"
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy"
    }
  ]
};

export default resumeData;
