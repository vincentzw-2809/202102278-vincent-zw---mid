import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderbordComponent } from './leaderbord/leaderbord.component';
import { TournamentComponent } from './tournament/tournament.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'leaderborad',component:LeaderbordComponent},
  {path:'tournament',component:TournamentComponent},
  {path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
