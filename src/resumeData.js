let resumeData = {
  imagebaseurl: '',
  name: 'Adrian Michot',
  role: 'Full Stack Developer',
  linkedinId: 'amichot',
  skypeid: 'Your skypeid',
  roleDescription:
    'I am a full-stack developer with a deep passion for creating amazing things. I specialize in all things JavaScript especially React and Node.',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amichot/',
      className: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'https://github.com/amichot/',
      className: 'fa fa-github',
    },
  ],
  aboutme:
    "I am a Full Stack Developer for a software company in the education/safety space. I've been in my current position for 2 years and I am ready to take the next step in my career. I completed the Thinkful program in 2019: a 6 month, 8+ hours a day, deep dive into JavaScript and modern frameworks and technologies surrounding it.",
  address: 'adrian_michot@yahoo.com',
  website: '(985) 414-4836',
  education: [
    {
      UniversityName: 'Thinkful',
      specialization: 'Full Stack Flex',
      MonthOfPassing: 'June',
      YearOfPassing: '2019',
    },
    {
      UniversityName: 'Nicholls State University',
      specialization:
        'Interdisciplinary Studies, Concentration in Business and Government',
      MonthOfPassing: 'May',
      YearOfPassing: '2014',
    },
  ],
  work: [
    {
      CompanyName: 'Alliance Safety Council',
      specialization: 'Full Stack Developer',
      MonthOfLeaving: 'Aug 2019 - Current',
      YearOfLeaving: '',
      Achievements:
        'Leading the transition from a Visual Basic app to React components built as micro-services. Improved the performance of the existing stack. Improving the developer experience by migrating to modern technologies and streamlining the workflow process. Maintaining existing software in Visual Basic, JavaScript, and SQL.',
    },
  ],
  skillsDescription: '',
  skills: [
    {
      skillname: 'JavaScript',
    },
    {
      skillname: 'Visual Basic',
    },
    {
      skillname: 'React',
    },
    {
      skillname: 'Node',
    },
    {
      skillname: 'SQL',
    },
    {
      skillname: 'AWS',
    },
    {
      skillname: 'Bash',
    },
  ],
  portfolio: [
    {
      name: 'Student Reports',
      description:
        'A five report system for the user to view student data. The frontend consists of a JavaScript/React application that utilizes AG Grid to search and display large complex datasets. The backend is built in AWS using NodeJS and Microsoft SQL.',
      imgurl: 'build/images/portfolio/StudentReports.png',
    },
    {
      name: 'Email Template Editor',
      description:
        'Uses custom variables to create and edit email templates for mass email sending to students.',
      imgurl: 'build/images/portfolio/EmailTemplateCreator.png',
    },
    {
      name: 'Course Category Add Edit',
      description:
        'A complex category system that ultimately determines which categories show up for company websites. It is composed of Javascript/Jquery along with .Net',
      imgurl: 'build/images/portfolio/CourseCategoryAddEdit.png',
    },
    {
      name: 'PhotoUploader',
      description: 'A drag and drop photo uploader for users to upload profile pictures.',
      imgurl: 'build/images/portfolio/PhotoUploader.png',
    },
    {
      name: 'Student Check-In',
      description:
        'A service app used by front office to check students into classes. I worked on adding new features and fixing bugs through the full stack.',
      imgurl: 'build/images/portfolio/StudentCheckIn.png',
    },
  ],
  testimonials: [
    {
      description:
        `My name is Doug Lubey, and I am the IT Director at ASC. It is my privilege to recommend Adrian Michot. He has worked for Alliance Safety Council (ASC) for the last 18 months as a Developer. During his time here, I have developed respect for him personally and professionally.
        
        ` +
        'Adrian values learning and growing as an individual. Adrian has been assigned various projects at Alliance. He started his career at Alliance Safety Council working on small enhancements to our .net web application platform (iLEVEL). This domain experience has allowed him to grow our application into the Amazon Web Service (AWS) environments. His most recent project included building new APIs and wiring these endpoints into a React Application. This project experience demonstrates his ability to acquire the needed skills to make him an asset within ASC technology team.' +
        ' ' +
        'Adrian also works well within our Agile team. He can express himself at the sprint retro and on our departmental meetings. His ability to communicate with others is very professional. Our team respects his knowledge, comments, and suggestions. He is also accepting of other individuals’ feelings and reacts appropriately when handling tough situations. ' +
        ' ' +
        'Adrian’s work ethic has those qualities which allow others to be open while getting the job done correctly the first time.',
      name: 'Doug Lubey Director of Technology',
    },
  ],
};

export default resumeData;
