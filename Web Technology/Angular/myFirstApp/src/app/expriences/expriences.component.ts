import { Component } from '@angular/core';

@Component({
  selector: 'app-expriences',
  templateUrl: './expriences.component.html',
  styleUrls: ['./expriences.component.css'],
})
export class ExpriencesComponent {
  faculties = [
    {
      FacultyID: 1,
      FacultyName: 'Dr. Gopi Sanghani',
      FacultyDesignation: 'Dean - School of Computer Science',
      FacultyEducationQualification: 'Ph.D. , M.E. (CE)',
      FacultyExperience: '22+ Years',
      FacultyWorkingSince: 'Jul-2012',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/5---21-06-2021-10-50-15.jpg',
    },
    {
      FacultyID: 2,
      FacultyName: 'Dr. Nilesh Gambhava',
      FacultyDesignation: 'Professor',
      FacultyEducationQualification: 'Ph.D. , M.E. (CE)',
      FacultyExperience: '19+ Years',
      FacultyWorkingSince: 'Jul-2009',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg',
    },
    {
      FacultyID: 3,
      FacultyName: 'Dr. Pradyumansinh Jadeja',
      FacultyDesignation: 'Associate Professor',
      FacultyEducationQualification: 'Ph.D. , M.E. (CE)',
      FacultyExperience: '17+ Years',
      FacultyWorkingSince: 'Jul-2009',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/02CEPUJ_19042019_063653AM.jpg',
    },
    {
      FacultyID: 4,
      FacultyName: 'Prof. Maulik Trivedi',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (CSE)',
      FacultyExperience: '14+ Years',
      FacultyWorkingSince: 'Jun-2009',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/CEMDT01_25042019_022618PM.jpg',
    },
    {
      FacultyID: 5,
      FacultyName: 'Prof. Dixita Kagathara',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (Web Technology)',
      FacultyExperience: '13+ Years',
      FacultyWorkingSince: 'Jul-2009',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/9---20-06-2021-10-41-42.jpg',
    },
    {
      FacultyID: 6,
      FacultyName: 'Prof. Rupesh Vaishnav',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (CE)',
      FacultyExperience: '14+ Years',
      FacultyWorkingSince: 'May-2013',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/07CERGV_19042019_063838AM.jpg',
    },
    {
      FacultyID: 7,
      FacultyName: 'Prof. Swati Sharma',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (CSE)',
      FacultyExperience: '14+ Years',
      FacultyWorkingSince: 'May-2013',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/11---20-06-2021-10-40-26.jpg',
    },
    {
      FacultyID: 8,
      FacultyName: 'Prof. Arjun Bala',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (CSE)',
      FacultyExperience: '12+ Years',
      FacultyWorkingSince: 'Jul-2013',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/09CEAVB_19042019_063947AM.jpg',
    },
    {
      FacultyID: 9,
      FacultyName: 'Prof. Mayur Padia',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (CE)',
      FacultyExperience: '13+ Years',
      FacultyWorkingSince: 'Jul-2011',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/10CEMSP_19042019_064012AM.jpg',
    },
    {
      FacultyID: 10,
      FacultyName: 'Prof. Vijay Shekhat',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (CE)',
      FacultyExperience: '10+ Years',
      FacultyWorkingSince: 'Jun-2012',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/CEVMS01_19042019_082302AM.jpg',
    },
    {
      FacultyID: 11,
      FacultyName: 'Prof. Naimish Vadodariya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (CE)',
      FacultyExperience: '9+ Years',
      FacultyWorkingSince: 'Jun-2015',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/12CENRV_19042019_064035AM.jpg',
    },
    {
      FacultyID: 12,
      FacultyName: 'Prof. UmeshKumar Thoriya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (CSE)',
      FacultyExperience: '9+ Years',
      FacultyWorkingSince: 'Jul-2015',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/14CEUHT_19042019_070801AM.jpg',
    },
    {
      FacultyID: 13,
      FacultyName: 'Prof. Jayesh Vagadiya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E (CE)',
      FacultyExperience: '7+ Years',
      FacultyWorkingSince: 'Jul-2015',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/16CEJDV_19042019_064225AM.jpg',
    },
    {
      FacultyID: 14,
      FacultyName: 'Prof. Krunal Vyas',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech.(ICT), B.E. (EC)',
      FacultyExperience: '8+ Years',
      FacultyWorkingSince: 'Jul-2018',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/18CEKDV_19042019_064425AM.jpg',
    },
    {
      FacultyID: 15,
      FacultyName: 'Prof. Jay Dhamsaniya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (E.C.), B.Tech. (E.C.)',
      FacultyExperience: '10+ Years',
      FacultyWorkingSince: 'Jul-2012',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/46---20-06-2021-10-27-43.jpg',
    },
    {
      FacultyID: 16,
      FacultyName: 'Prof. Mehul Bhundiya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'BE (CE), ME (CE)',
      FacultyExperience: '8+ Years',
      FacultyWorkingSince: 'Aug-2018',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/CEMDB03_10022019_045347AM.JPG',
    },
  ];

  experienced(str: String) {
    var splitted = str.split('+', 1);
    var exprience = parseInt(splitted[0]);
    if (exprience >= 10) {
      return true;
    } else {
      return false;
    }
  }
}
