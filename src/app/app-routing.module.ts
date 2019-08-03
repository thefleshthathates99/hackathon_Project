import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
 

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'post-details', loadChildren: './post-details/post-details.module#PostDetailsPageModule' },
  { path: 'event-details', loadChildren: './event-details/event-details.module#EventDetailsPageModule' },
  { path: 'event-creation', loadChildren: './event-creation/event-creation.module#EventCreationPageModule' },
  { path: 'employment-post-creation', loadChildren: './employment-post-creation/employment-post-creation.module#EmploymentPostCreationPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
