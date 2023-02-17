import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';
import { ButtonsComponent } from './section/buttons/buttons.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    TimeDisplayComponent,
    ButtonsComponent,
  ],
  imports: [BrowserModule, LayoutModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
