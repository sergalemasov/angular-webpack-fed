import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { 
  AppComponent,
  CategoriesComponent,
  CategoryComponent,
  NoContentComponent,
  HeaderComponent,
  FooterComponent,
  LogoComponent
} from './components';
import { CategoriesService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    NoContentComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { };
