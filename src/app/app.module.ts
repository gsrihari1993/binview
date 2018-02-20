import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import { LoggedinPage} from '../pages/loggedin/loggedin';
import { ContactPage} from '../pages/contact/contact';
import { AboutPage} from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

const firebaseAuth = {
    apiKey: "AIzaSyCNjbGMPtQiJyqKj4bGQ3T6skYz2Ax5VK8",
    authDomain: "binview-1b9a6.firebaseapp.com",
    databaseURL: "https://binview-1b9a6.firebaseio.com",
    projectId: "binview-1b9a6",
    storageBucket: "binview-1b9a6.appspot.com",
    messagingSenderId: "135022941640"
  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    TabsPage,
    AboutPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    TabsPage,
    AboutPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
