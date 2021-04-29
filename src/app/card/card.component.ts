import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  @Input() code: any;
  @Output() boxChange: EventEmitter<any> = new EventEmitter();
  @Output() boxFocus: EventEmitter<any> = new EventEmitter();
  @Output() clickSend: EventEmitter<any> = new EventEmitter();
  numberId: string='';
  event: any;
  constructor() { }

  focusBox(numberId : any){
    this.boxFocus.emit(numberId);
  }
  changeBox(data : any){
    this.boxChange.emit({numberId : data.idTag, event: data.event});
  }
  clickBox(){
    this.clickSend.emit(this.code);
  }

}
