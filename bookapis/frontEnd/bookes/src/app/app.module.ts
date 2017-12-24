import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

// import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { books } from '../pages/book/books.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//services

import { AlertMessageService } from './services/core/message.services';
import { BookServices } from './services/HttpServices/BooksServices';
import { globalVariable } from './global.variable';


//local services


@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    books
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    books
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertMessageService,
    BookServices,
    globalVariable,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
