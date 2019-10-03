import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BriefingCardsComponent } from "./expenses/briefing-cards/briefing-cards.component";
import { ExpenseListComponent } from "./expenses/expense-list/expense-list.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { HistoryComponent } from './expenses/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    BriefingCardsComponent,
    ExpenseListComponent,
    HomeComponent,
    HistoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}