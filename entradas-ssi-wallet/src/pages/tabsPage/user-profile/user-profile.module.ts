import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UserProfilePage} from './user-profile';
import {AppModule} from "../../../app/app.module";
import {BrowserModule} from "@angular/platform-browser";
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    declarations: [
        UserProfilePage
    ],
    imports: [
        IonicPageModule.forChild(UserProfilePage),
        ComponentsModule,
    ],
    exports: [
        UserProfilePage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class UserProfilePageModule {
}
