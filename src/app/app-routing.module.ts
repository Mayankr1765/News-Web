import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { PostNewsComponent } from './post-news/post-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';
import { SelectedNewsComponent } from './selected-news/selected-news.component';

const routes: Routes = [
  // {path:'',component: AppComponent, exact: true},
  {path:'about' , component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'news', component:NewsComponent},
  {path:'admin', component:AdminComponent},
  {path:'headline', component:NewsHeadlinesComponent},
  {path:'admin/addnews', component:AddNewsComponent},
  {path:'news/selectednews' , component: SelectedNewsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
