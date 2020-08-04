import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDvhV0K7N23GZ5ma_k0Ke6_1sXNELfCJ5U',
      authDomain: 'angularfirebasedemo-78f9d.firebaseapp.com',
      databaseURL: 'https://angularfirebasedemo-78f9d.firebaseio.com',
      projectId: 'angularfirebasedemo-78f9d',
      storageBucket: 'angularfirebasedemo-78f9d.appspot.com',
      messagingSenderId: '969217117335',
      appId: '1:969217117335:web:2abe3cebc284a03dd9add2',
      measurementId: 'G-H3L3YKSZ1E'
    }),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
