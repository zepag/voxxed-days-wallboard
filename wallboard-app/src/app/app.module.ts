import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ScheduleService} from "./schedule.service";
import {RoomScheduleComponent} from './room-schedule.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RoomsListComponent} from './rooms-list.component';
import {RouterModule, Routes} from "@angular/router";
import {SlotDetailsComponent} from './slot-details.component';

const appRoutes: Routes = [
    {path: 'rooms', component: RoomsListComponent},
    {path: 'room/:id', component: RoomScheduleComponent},
    {
        path: '',
        redirectTo: '/rooms',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        RoomScheduleComponent,
        RoomsListComponent,
        SlotDetailsComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: false}),
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [ScheduleService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule {
}
