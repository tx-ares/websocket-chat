import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
    moduleId: module.id,
    selector: 'ng-home'
    templateUrl: 'home.template.html'
})

export class HomeComponent implements OnInit {
    socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io.connect();
    }

    ngOnInit() {
        this.socket.emit('event1', {
            msg: 'Client to server, can you hear me server?'
        });

        this.socket.on('event2', (data:any) => {
            console.log(data.msg, " << msg from event2");
            this.socket.emit('event3', {
                msg: "Yes, all systems GO!"
            })
        })

        this.socket.on('event4', (data:any) => {
            console.log(data.msg, " << msg from event4");
        })
    }

}
