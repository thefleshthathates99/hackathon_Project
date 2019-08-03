import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmploymentPostCreationPage } from './employment-post-creation.page';

const routes: Routes = [
  {
    path: '',
    component: EmploymentPostCreationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmploymentPostCreationPage]
})
export class EmploymentPostCreationPageModule {}
