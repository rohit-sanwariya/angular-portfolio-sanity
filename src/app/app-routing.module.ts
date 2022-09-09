import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',loadChildren:()=>import('./Pages/home/home.module').then(m=>m.HomeModule),
  },
  {
    path:'work',loadChildren:()=>import('./Pages/work/work.module').then(m=>m.WorkModule),
  },
  {
    path:'skills',loadChildren:()=>import('./Pages/skills/skills.module').then(m=>m.SkillsModule),
  },
  {
    path:'about',loadChildren:()=>import('./Pages/about/about.module').then(m=>m.AboutModule),
  },
  {
    path:'contact',loadChildren:()=>import('./Pages/contact/contact.module').then(m=>m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
