import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.page.html',
  styleUrls: ['./event-creation.page.scss'],
})
export class EventCreationPage implements OnInit {

  
  date: "";
  title: "";
  degree: "";
  
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }


  eventSubmit() {
    console.log("AHHHHHH");

    this.callAlert();
  }

  async callAlert() {
    const alert = await this.alertController.create({
      header: 'CREATED',
      subHeader: 'Post Created',
      message: "An event was created for the date: " + this.date + " with the Title: " + this.title + " and will be targetted to students of the " +  this.degree + " degree.",
      buttons: ['OK']
    });
    await alert.present();
}
}
