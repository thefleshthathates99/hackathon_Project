import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-employment-post-creation',
  templateUrl: './employment-post-creation.page.html',
  styleUrls: ['./employment-post-creation.page.scss'],
})
export class EmploymentPostCreationPage implements OnInit {


  constructor(public alertController: AlertController) { }
  publisher: "";
  details: "";
  title: "";
  degree: "";

  dummySubmit() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'CREATED',
      subHeader: 'Post Created',
      message: this.publisher + " has created the event: " + this.title + ". This alert will be presented to students of the " + this.degree + " degree",
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
