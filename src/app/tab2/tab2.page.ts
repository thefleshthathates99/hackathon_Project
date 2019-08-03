import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    usernameDisplay = "";
    loginCheck = "";

  constructor(private storage: Storage) {
    storage.get("username").then(val => {
        this.usernameDisplay = val;
      });
      storage.get("checkLogin").then(val => {
        this.loginCheck = val;
      });
  }

  newsData = [
    {
        eventTitle: "Study Sesh",
        userPosted: "Derrick McGowan",
        details: "event details data here",
        relevantDegree: "bIT"
    },
    {
      eventTitle: "Alumni Soiree",
      userPosted: "Allan McCuen",
      details: "event details data here",
      relevantDegree: "bComputerScience"
  },
  {
      eventTitle: "Looking for Tutour",
      userPosted: "Geoffery CuddleTrousers",
      details: "I am bad at study, plz halp",
      relevantDegree: "bLanguage"
  },
  {
      eventTitle: "Hackathon",
      userPosted: "Yogg'Sathtoth",
      details: "Looking for a team for the Hackathon",
      relevantDegree: "bEngineering"
  }
  ];


}
