import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    loginCheck = "";

  constructor(private storage: Storage) { 
    storage.get("checkLogin").then(val => {
        this.loginCheck = val;
      });
  }
  degree: "";

  eventsData = [
    {
        eventTitle: "IT Stakeholder Networking Seminar",
        userPosted: "6th August 2019",
        details: "event details data here",
        relevantDegree: "bIT",
        recent: "danger"
    },
    {
      eventTitle: "Computer Science Alumni Meetings",
      userPosted: "8th August 2019",
      details: "event details data here",
      relevantDegree: "bComputerScience",
      recent: "danger"
  },
  {
      eventTitle: "SEEK.COM International Employability Seminar",
      userPosted: "15 August 2019",
      details: "Website attempts to explain employability",
      relevantDegree: "bLanguage"
  },
  {
      eventTitle: "InfoMechatronics Industry Meetings",
      userPosted: "29th August 2019",
      details: "Robot builders welcomed, and indeed expected",
      relevantDegree: "bEngineering"
  }
  ];
  



}


