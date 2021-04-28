import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() code: any;
  constructor() { }

  ngOnInit(): void {
  }
  compareCode(){
    console.log(this.code);
    let inputCode : string[]=[];
    for(let i=1; i<5; i++){
      let index = 'number__'+i;
      let numberBoxValue = <HTMLInputElement> document.getElementById(index);
      inputCode.push(numberBoxValue.value);
    }
    let screenCode =  inputCode.join('');
    let success = <HTMLInputElement> document.getElementById("success");
    let deny = <HTMLInputElement> document.getElementById("deny");
    if(screenCode == this.code){
      success.style.display= 'block';
      deny.style.display= 'none';
    }
    else {
      success.style.display= 'none';
      deny.style.display= 'block';
    }
  }

}
