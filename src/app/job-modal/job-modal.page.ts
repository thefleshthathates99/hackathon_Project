import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.page.html',
  styleUrls: ['./job-modal.page.scss'],
})
export class JobModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
