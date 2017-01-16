import { Component, ViewEncapsulation } from '@angular/core';
import { WebSocketService } from '../../services/web-socket-service';

@Component({
    selector: 'message',
    templateUrl: 'app/components/message/message.html',
    styleUrls: ['app/components/message/message.css'],
    providers: [ WebSocketService ], 
    encapsulation: ViewEncapsulation.None
})
export default class MessageComponent {
    publishMessage: string;
    subscribeMessage: string;

    constructor(private wsService: WebSocketService) { 
        this.wsService.createObservableSocket()
        .subscribe(data => { 
            this.subscribeMessage = data; 
        }, err => console.log(err), 
        () => console.log('complete'));
    }

    change() {
        console.log("Sending message to WebSocket server: " + this.publishMessage);
        this.wsService.sendMessage(this.publishMessage);
    }
}