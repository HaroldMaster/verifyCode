import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareCodeService {
  constructor(@Inject(DOCUMENT) public document: Document) { }
  compareCode(code: string){
    let inputCode : string[]=[];
    for(let i=1; i<5; i++){
      let index = 'number__'+i;
      let numberBoxValue = <HTMLInputElement> document.getElementById(index);
      console.log(numberBoxValue)
      inputCode.push(numberBoxValue.value);
    }
    let screenCode =  inputCode.join('');
    let success = <HTMLInputElement> document.getElementById("success");
    let deny = <HTMLInputElement> document.getElementById("deny");
    if(screenCode == code){
      success.style.display= 'block';
      deny.style.display= 'none';
    }
    else {
      success.style.display= 'none';
      deny.style.display= 'block';
    }
  }
}
