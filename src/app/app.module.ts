import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';


import 'hammerjs';

 /*importing components */
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';

import {AppRoutingModule} from './app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [DishService, PromotionService, LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
