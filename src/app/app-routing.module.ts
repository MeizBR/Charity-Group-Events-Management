import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member/member.component';
import { DescriptionComponent } from './description/description/description.component';
import { ActionComponent } from './action/action/action.component';
import { ContactUsComponent } from './contact-us/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: DescriptionComponent},
  {path: 'members', component: MemberComponent},
  {path: 'actions', component: ActionComponent},
  {path: 'contact us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
