import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { SocketService } from '../shared/socket.service';

@Component({
    moduleId: module.id,
    selector: 'ng-home',
    styleUrls: ['home.styles.css'],
    templateUrl: 'home.template.html'
})

export class HomeComponent implements OnInit {

    constructor(private: _socketService: SocketService) { }

    ngOnInit() {
        this._socketService.emit('event1', {
            msg: 'Client to server, can you hear me server?'
        });

        this._socketService.on('event2', (data:any) => {
            console.log(data.msg, " << msg from event2");
            this._socketService.emit('event3', {
                msg: "Yes, all systems GO!"
            })
        })

        this._socketService.on('event4', (data:any) => {
            console.log(data.msg, " << msg from event4");
        })
    }

}
