import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LevelsComponent } from "./levels/levels.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, LevelsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
