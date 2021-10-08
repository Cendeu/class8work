import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BobComponent } from "./about/bob/bob.component";
import { SusanComponent } from "./about/susan/susan.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";



const appRoute = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, children: [
    {path: 'bob', component: BobComponent},
    {path: 'susan', component: SusanComponent}
  ]},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
