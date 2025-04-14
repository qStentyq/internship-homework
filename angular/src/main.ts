/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {UserProfile} from './app/app.component';

bootstrapApplication(UserProfile, {providers: [provideProtractorTestingSupport()]}).catch((err) =>
  console.error(err),
);
