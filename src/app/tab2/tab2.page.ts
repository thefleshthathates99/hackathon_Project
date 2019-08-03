import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  newsData = [
    {
        eventTitle: "Study Sesh",
        userPosted: "Derrick McGowan",
        details: "event details data here",
    },
    {
      eventTitle: "Alumni Soiree",
      userPosted: "Allan McCuen",
      details: "event details data here",
  },
  {
      eventTitle: "Looking for Tutour",
      userPosted: "Geoffery CuddleTrousers",
      details: "I am bad at study, plz halp",
  },
  {
      eventTitle: "Hackathon",
      userPosted: "Yogg'Sathtoth",
      details: "Looking for a team for the Hackathon",
  }
  ];
}
