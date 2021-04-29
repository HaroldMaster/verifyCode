import { Component } from '@angular/core';
import { CodeGeneratorService } from './services/code-generator.service';
import { CompareCodeService } from './services/compare-code.service';
import { VerifyCodeService } from './services/verify-code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'verifyCode';
  codeGen: any;
  numberId: string='';
  inputEvent : any;
  constructor(private codeGeneratorService : CodeGeneratorService, private verifyCodeService: VerifyCodeService, 
    private compareCodeService: CompareCodeService){
  }
  
  codeGenerator(){
    this.codeGen= this.codeGeneratorService.generateRandomNumber();
    return this.codeGen;
  }

  focus(event: any){
    console.log('focus service', event)
    //this.verifyCodeService.onInputEntry(event, this.numberId);
    this.verifyCodeService.replaceWhenValue(event);
  }
  change(event:any){
    this.verifyCodeService.onInputEntry(event.event, event.numberId);
  }
  send(event:any){
    this.compareCodeService.compareCode(event);
  }
}
