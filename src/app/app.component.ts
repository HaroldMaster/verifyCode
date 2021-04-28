import { Component } from '@angular/core';
import { CodeGeneratorService } from './services/code-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'verifyCode';
  codeGen: any;
  constructor(private codeGeneratorService : CodeGeneratorService){
  }
  
  codeGenerator(){
    this.codeGen= this.codeGeneratorService.generateRandomNumber();
    return this.codeGen;
  }
}
