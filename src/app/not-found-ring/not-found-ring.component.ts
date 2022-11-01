import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-not-found-ring',
  templateUrl: './not-found-ring.component.html',
  styleUrls: ['./not-found-ring.component.css']
})
export class NotFoundRingComponent implements OnInit {
  @Input() visible:boolean = false;
  @Input() notFoundMessage:string = "Nothing found!";
  @Input() resetLinkText:string = "Reset";
  @Input() resetLinkRoute:string = "/";
 


  constructor() { }

  ngOnInit(): void {
  }

}
