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
    { title: "Fullstack Engineer", hirer: "Microsoft", description: "The Operations Applications Group within the Cloud + AI Business Applications Group specializes in best in class solutions enabling businesses to run their end to end operations for the Dynamics 365 line of Enterprise Resource and Planning (ERP) in a Mobile-First/Cloud-First world. Our goal is to enable customers to effectively run their business using the Dynamics 365 products, delivering complete solutions that target the increasing demands of midsize and larger companies. Whether deployed to the cloud or on premise, Dynamics 365 integrates several Microsoft technologies to create a large-scale application. Our culture is inclusive, casual and high energy; our team members come from diverse backgrounds and grounded in our customer needs. Our team is accountable and provides its members a variety of opportunities to learn and grow their careers.",
responsibilities: ["Design, develop, test & support features, experiences & solutions for end-to-end business scenarios over the full stack using modern development technologies", "Collaborate across diverse engineering teams to solve challenging problems for large-scale business SaaS applications", "Accountability for the quality, usability & performance of features", "Debug and handle customer reported issues"] },
    { title: "Testing Engineer", hirer: "Google", description: "New Position"},
    { title: "Frontend Developer", hirer: "AWS", description: "New Position"},
    { title: "Backend Developer", hirer: "Redhat", description: "New Position"},
    { title: "Systems Engineer", hirer: "Alatassian", description: "New Position"},
];



selectedJob = {};

async presentModal(i: number) {
  this.selectedJob = this.jobs[i];
  const modal = await this.modalController.create({
    component: JobModalPage,
    componentProps: {
     job: this.selectedJob

    }
  });
  return await modal.present();
}

}
