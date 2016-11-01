import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
//import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UnitsComponent } from './components/units/units.component';
import { AdminComponent } from './components/admin/admin.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {
    GridModule 
} from '@progress/kendo-angular-grid';
import {DataTableModule} from "angular2-datatable";
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ReportsComponent,
        UnitsComponent,
        AdminComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        GridModule,
        DataTableModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'reports', component: ReportsComponent },
            { path: 'units', component: UnitsComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
        
    ]
})
export class AppModule {
}
