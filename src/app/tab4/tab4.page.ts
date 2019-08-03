import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JobModalPage } from '../job-modal/job-modal.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }
  jobs = [
    { title: "Full-stack Engineer", hirer: "Microsoft", description: "New Position"},
    { title: "Testing Engineer", hirer: "Google", description: "New Position"},
    { title: "Front-end Developer", hirer: "AWS", description: "New Position"},
    { title: "Back-end Developer", hirer: "Redhat", description: "New Position"},
    { title: "Systems Engineer", hirer: "Alatassian", description: "New Position"},
];

selectedJob = {};

async presentModal(i: number) {
  console.log(i);
  this.selectedJob = this.jobs[i];
  console.log(this.selectedJob);


  const modal = await this.modalController.create({
    component: JobModalPage,
    componentProps: {
     job: this.selectedJob

    }
  });
  return await modal.present();
}

}
