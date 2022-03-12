import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sarkv';
  status = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Status>('https://halfmemories.com/ping').subscribe((data) => {
      if (data.message === 'pong!') {
        this.status = true;
      }
    });
  }


}

export interface Status {
  message: string;
}
