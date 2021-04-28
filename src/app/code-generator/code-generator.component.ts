import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';


@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss']
})
export class CodeGeneratorComponent implements OnInit {
  @Input() code: any;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  constructor(){
  }

  ngOnInit(): void {
  }
  emitClickButton(): void {
    this.buttonClick.emit();
  }
  
}
