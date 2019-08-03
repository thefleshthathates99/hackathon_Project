import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  commentsData = [
    {
        eventTitle: "Plan to Attend",
        userPosted: "Derrick McGowan",
        details: "comment details data here"
    },
    {
      eventTitle: "Not very interesting, don't trust organisers",
      userPosted: "Allan McCuen",
      details: "comment details data here"
  },
  {
      eventTitle: "Organising, need volunteers, apply here: 'hyperlink'",
      userPosted: "Geoffery CuddleTrousers",
      details: "comment details data here"
  },
  {
    eventTitle: "Plan to Speak at Event, come see me there!",
      userPosted: "Yog-Sothoth",
      details: "comment details data here"
  }
  ];

}
