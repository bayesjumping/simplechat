import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent from './components/application/application';
import MessageComponent from './components/message/message';
import { FormsModule }   from '@angular/forms';
import {WebSocketService} from './services/web-socket-service';

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ApplicationComponent, MessageComponent],
    providers:    [WebSocketService],
    bootstrap:    [ApplicationComponent]
})
export class AppModule { }