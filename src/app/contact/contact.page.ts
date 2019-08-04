import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactees = [
    {name: "Jerrad Butler", position: "Employment Officer - Microsoft", status: "Online - Message Anytime"},
    {name: "McKayla Nickleberg", position: "CEO - Ironbark Software", status: "Offline"},
    {name: "Derrek", position: "Griffith Alumni", status: "Inactive"},
    {name: "Allan McGrewin", position: "Level 3/4 Service Desk - 3 years experience", status: "Private"},
    {name: "Alexa Applebaum", position: "HRM Manager - Griffith Lecturer", status: "Online - Message Anytime"}
  ]
}
