import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})

export class NumberInputComponent {
  @Output() boxChange: EventEmitter<any> = new EventEmitter();
  @Output() boxFocus: EventEmitter<any> = new EventEmitter();
  constructor(){
  }

  ngOnInit(): void {
  }
  emitFocusBox(idTag:string): void {
    //console.log('focus emmited')
    this.boxFocus.emit(idTag);
  }
  emitChangeBox(event : any, idTag:string): void {
    console.log('event', event)
    this.boxChange.emit({event, idTag});
  }
}
