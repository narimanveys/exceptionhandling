import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent implements OnInit {

  constructor(private requestService: RequestsService ) { }

  ngOnInit(): void {
  }

  sendRequest(){
    this.requestService.fetch().subscribe(result => {
      if (!result){
        return;
      }
      console.log(result);
    });
  }
}
