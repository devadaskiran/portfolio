import DummyImage from 'assets/images/users/1.jpg';

export const airBnb = [
  {
    id: '1',
    label: 'Project developed manually, no external plugins used.'
  },
  {
    id: '2',
    label: 'React components boost efficiency & maintainability.'
  },
  {
    id: '3',
    label: 'SCSS used for easy color customization with variables.'
  },
  {
    id: '4',
    label: 'Codebase publicly available on GitHub for anyone to access.'
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Jo Jo Joseph',
    designation: 'Architect',
    organisation: 'ABC',
    image: DummyImage,
    linkedinLink: 'https://linkedin.com/',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    id: '1',
    name: 'Jo Jo Joseph',
    designation: 'Architect',
    organisation: 'ABC',
    image: DummyImage,
    linkedinLink: 'https://linkedin.com/',
    message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam '
  },
];

export const experience = [
  {
    id: 1,
    startDate: 'August 2018',
    endDate: 'Present',
    designation: 'Designation',
    organisation: 'Organisation',
    orgUrl: 'https://www.ust.com/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    skills: ['React JS', 'Javascript', 'HTML', 'CSS', 'SCSS', 'Reusable Components', 'Adobe XD', 'Adobe Photoshop'],
  },
  {
    id: 2,
    startDate: 'July 2017',
    endDate: 'August 2018',
    designation: 'Designation',
    organisation: 'Organisation',
    orgUrl: 'https://www.aot-technologies.com/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    skills: ['Javascript', 'jQuery','HTML' ,'CSS', 'SCSS', 'Adobe XD', 'Adobe Photoshop']
  },
  {
    id: 3,
    startDate: 'September 2016',
    endDate: 'June 2017',
    designation: 'Designation',
    organisation: 'Organisation',
    orgUrl: 'https://www.onetikk.org/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    skills: ['Javascript', 'jQuery','HTML' ,'CSS', 'Adobe Photoshop']
  },
  {
    id: 4,
    startDate: 'April 2014',
    endDate: 'June 2016',
    designation: 'Designation',
    organisation: 'Organisation',
    orgUrl: 'https://softlandindia.co.in/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    skills: ['HTML' ,'CSS', 'Adobe Photoshop', 'Graphic Design']
  },
];

const calculateTotalExperience = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Add 1 to get the current month (January is 0)
  let totalYears = 0;
  let totalMonths = 0;

  experience.forEach((expItem) => {
    let startDateParts = expItem.startDate.split(' ');
    let endDateParts = expItem.endDate.split(' ');

    let startYear = parseInt(startDateParts[1]);
    let endYear = endDateParts[0] === 'Present' ? currentYear : parseInt(endDateParts[1]);
    let startMonth = getMonthNumber(startDateParts[0]);
    let endMonth = endDateParts[0] === 'Present' ? currentMonth : getMonthNumber(endDateParts[0]);

    let diffYears = endYear - startYear;
    let diffMonths = endMonth - startMonth;

    if (diffMonths < 0) {
      diffYears -= 1;
      diffMonths += 12;
    }

    totalYears += diffYears;
    totalMonths += diffMonths;
  });

  // Adjust the total years if months exceed 12
  totalYears += Math.floor(totalMonths / 12);
  totalMonths = totalMonths % 12;

  return { totalYears, totalMonths };
};

const getMonthNumber = (monthName) => {
  return new Date(`${monthName} 1, 2000`).getMonth() + 1;
};

const { totalYears, totalMonths } = calculateTotalExperience();

const numberOfOrganisations = experience.length;

export const strings = {
  projectName: "Portfolio - Kiran",
  firstName: "Kiran",
  lastName: "Devadas",
  designation: "UI Developer | UI/UX Designer",
  about: "This is my personal website where I showcase my online portfolio. I have more than " + totalYears + " years of experience in UI development and design. The purpose of this website is to display my professional experience and skills in an organized manner.",
  detailedDescription: "I am Kiran, hailing from Trivandrum, Kerala, India. With over " + totalYears + " years of experience in the IT industry, I have specialized knowledge in UI Development and UI Design. My career commenced as a Graphic Designer at Softland India Ltd, and eventually, I transitioned to focus on UI Development and Design. \n\n My academic qualifications encompass a Bachelor's degree in Computer Applications from Madras University, along with another Bachelor's Degree in Arts from the Kerala University. These diverse educational backgrounds have enriched my skill set. \n\n My passion lies in staying abreast of the latest UI development technologies and design trends. This website has been created to showcase my professional journey, skills, and experiences in an organized manner. Moreover, it serves as a means to express my capabilities and interests to recruiters who visit this platform.",
  expDescription: "Throughout my " + totalYears + " years of experience, I have had the opportunity to work at " + numberOfOrganisations+" different companies, each contributing significantly to my knowledge and skill development. Colleagues and leaders at these organizations have played a vital role in enhancing my expertise and continuous improvement."
};

export const description = [
  {
    id: '1',
    label: ' This is my personal website where I showcase my online portfolio.'
  },
  {
    id: '2',
    label: ' I have more than 8 years of experience in UI development and design.'
  },
  {
    id: '3',
    label: ' The purpose of this website is to display my professional experience'
  },
  {
    id: '4',
    label: ' and skills in an organized manner.'
  },
];