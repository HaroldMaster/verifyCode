import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeGeneratorService {
  private code:number=9999;
  constructor() { }
  generateRandomNumber(){
    this.code = Math.floor(Math.random() * (9999 - 1000)+1000);
    return this.code;
  }
}
