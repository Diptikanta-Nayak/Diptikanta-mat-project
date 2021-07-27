import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserstripperComponent } from './userstripper/userstripper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StripperStepOneComponent } from './stripper-step-one/stripper-step-one.component';
import { StripperStetTwoComponent } from './stripper-stet-two/stripper-stet-two.component';
import { StripperStepThreeComponent } from './stripper-step-three/stripper-step-three.component';
import { StripperStepFourComponent } from './stripper-step-four/stripper-step-four.component';
import { StripperStepFiveComponent } from './stripper-step-five/stripper-step-five.component';
import { StripperStepSixComponent } from './stripper-step-six/stripper-step-six.component';

@NgModule({
  declarations: [
    AppComponent,
    UserstripperComponent,
    StripperStepOneComponent,
    StripperStetTwoComponent,
    StripperStepThreeComponent,
    StripperStepFourComponent,
    StripperStepFiveComponent,
    StripperStepSixComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
