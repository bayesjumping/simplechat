import { Observable } from 'rxjs/Rx';

export class WebSocketService {
    ws: WebSocket = new WebSocket('ws://localhost:8585');
    
    createObservableSocket(): Observable<any> {
        return new Observable(
            observer => {
                this.ws.onmessage = (event) => observer.next(event.data);
                this.ws.onerror = (event) => observer.error(event);
                this.ws.onclose = (event) => observer.complete();
            }
        );
    }

    sendMessage(message: any) { 
        this.ws.send(message); 
    }
}