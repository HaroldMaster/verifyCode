import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyCodeService {
  constructor(@Inject(DOCUMENT) public document: Document) { }

  onInputEntry(event:any, id:any) {
    console.log(event)
    let InputIndex = id.split('__')[1];
    let nexInput = +InputIndex + 1;
    let idBox = id.split('__')[0] + '__';
    let newID =  idBox + nexInput;
    console.log(newID)
    let nextBox = this.document.getElementById(newID);
    console.log(newID)
    if(event.data){
      console.log(event)
      if(!/^[0-9]/.test(event.data)){
        console.log(id);
        let actualInput = <HTMLInputElement>this.document.getElementById(id);
        if(actualInput){
          actualInput.value="";
          return;
        }
      }
    }

    this.focusNextBox(nextBox, event);
  }

  private focusNextBox(nextBox: HTMLElement | null, event: any) {
    console.log(nextBox) //?
    if (nextBox) {
      if (event.data) {
          console.log(event.data.length) //?
          console.log(event.target.attributes.maxlength.value) //?
        if (event.data.length == event.target.attributes.maxlength.value) {
          console.log(nextBox)
          nextBox.focus();
        }
      }
    }
  }

  replaceWhenValue(id:any) {
    const input = <HTMLInputElement> this.document.getElementById(id);
    if(input){
      input.focus();
      input.setSelectionRange(0,1);
    } 
  }
}
