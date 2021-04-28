import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})

export class NumberInputComponent {
 
  onInputEntry(event:any, id:any, InputIndex:any) {
    let nexInput = +InputIndex + 1;
    let newID = id + nexInput;
    let nextBox = document.getElementById(newID);
    if(event.data){
      if(!/^[0-9]/.test(event.data)){
        let actualInput = <HTMLInputElement>document.getElementById(id+InputIndex);
        if(actualInput){
          actualInput.value="";
          return;
        }
      }
    }
    this.focusNextBox(nextBox, event);
  }

  private focusNextBox(nextBox: HTMLElement | null, event: any) {
    if (nextBox) {
      console.log(event);
      if (event.data) {
        if (event.data.length == event.target.attributes.maxlength.value) {
          nextBox.focus();
        }
      }
    }
  }

  replaceWhenValue(id:any) {
    const input = <HTMLInputElement> document.getElementById(id);
    if(input){
      input.focus();
      input.setSelectionRange(0,1);
    } 
  }
}
