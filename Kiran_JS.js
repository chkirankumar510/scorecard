const apiURL = 'http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521';

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const progressList = data.Response.ProgressList;
        const examMasters = progressList.ExamMasters;
        const stGrades = progressList.stGrades;
        const internalMarks = progressList['1stInternal'];
        const studentInfo = progressList['1stStudentInfo'];


    })
    .catch(error => console.error(error));
window.onscroll = function() {
    var logo = document.querySelector('img');
    if (window.pageYOffset > 0) {
        logo.style.position = 'fixed';
    } else {
        logo.style.position = 'absolute';
    }
};
const apiUrl = 'http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports';
const schoolID = 123;
const sectionID = 456;
const eXamMasID = 789;
const students = 'Alice,Bob,Charlie';

const fullUrl = `${apiUrl}?schoolID=${schoolID}&sectionID=${sectionID}&eXamMasID=${eXamMasID}&students=${students}`;

fetch(fullUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('There was a problem with the network request:', error);
  });
