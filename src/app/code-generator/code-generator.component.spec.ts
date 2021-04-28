import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CodeGeneratorComponent } from './code-generator.component';

describe('CodeGeneratorComponent', () => {
  let component: CodeGeneratorComponent;
  let fixture: ComponentFixture<CodeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit event when click button', () => {
    //given
    const button = fixture.debugElement.query(By.css('.code-box__button'));
    const buttonClickSpy = spyOn(component.buttonClick, 'emit');
    //when
    button.nativeElement.click();
    //expect
    expect(buttonClickSpy).toHaveBeenCalled();
  });
  it('should show a number of 4 digits', () => {
    //given
    component.code = '1234';
    const button = fixture.debugElement.query(By.css('.code-box__button'));
    const code = fixture.debugElement.query(By.css('.random-number'));
    //when
    button.nativeElement.click();
    fixture.detectChanges();
    //expect
    expect(code.nativeElement.innerHTML).toEqual('1234');
  });

});
