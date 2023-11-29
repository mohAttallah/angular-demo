import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { CounterComponent } from './counter/counter.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        SharedModule,
        BrowserModule,

    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }