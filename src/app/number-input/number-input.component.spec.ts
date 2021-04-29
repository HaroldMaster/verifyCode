import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Button } from 'selenium-webdriver';

import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit event when focus number box', () => {
    //given
    const button = fixture.debugElement.query(By.css('.number'));
    const buttonClickSpy = spyOn(component.boxFocus, 'emit');
    //when
    button.nativeElement.focus();
    //expect
    expect(buttonClickSpy).toHaveBeenCalled();
  });
  it('should emit event when number box change', () => {
    //given
    const input = fixture.debugElement.query(By.css('#number__1'));
    const boxClickSpy = spyOn(component.boxChange, 'emit');
    //when
    input.nativeElement.dispatchEvent(new Event('input', {target: {value: '1'}} as any));
    //expect
    expect(boxClickSpy).toHaveBeenCalled();
  });
  it('should show values', () => {
    //given
    const input = fixture.debugElement.query(By.css('#number__1'));
    //when;
    input.nativeElement.value = 1;
    //expect
    expect(input.nativeElement.value).toEqual('1');
  });
});
