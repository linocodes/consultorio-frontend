import { AppService } from './app.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  constructor(private _service: AppService) { }

  method1Call(): void {
    this._service.getAll().subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('fim');
      }
    );
  }

/*
  method2Call(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/user12').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      }
    );
  }

  method3Call(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/comments?postId=1').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      }
    );
  }
  */



}
