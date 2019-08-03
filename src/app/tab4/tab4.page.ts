import { Component, OnInit } from '@angular/core';
// import { SettingsPage } from './../settings/settings.page';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  usersDummy = [
    {
      username: "Zane",
      password: "123",
      userType: "new"
  }
];

// navigateToSettings(): void {
//   this.navCtrl.push(SettingsPage);
// }

}
