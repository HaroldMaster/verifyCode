import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompareCodeService } from './services/compare-code.service';
import { VerifyCodeService } from './services/verify-code.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let serviceCompare: CompareCodeService;
  let serviceCode: VerifyCodeService;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
     serviceCompare = TestBed.inject(CompareCodeService);
     serviceCode = TestBed.inject(VerifyCodeService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'verifyCode'`, () => {
    expect(component.title).toEqual('verifyCode');
  });
  it(`should exist codeGenerator function `, () => {
    expect(component.codeGenerator()).toBeDefined;
  });
  it(`should recive a 4 digit code `, () => {
    //when
    let code = component.codeGenerator()+'';
    //expect
    expect(code.length).toEqual(4);
  });
  it(`should emit an event when focus `, () => {
    //given
    const boxClickSpy = spyOn(serviceCode, 'replaceWhenValue');
    //when
    const input = fixture.debugElement.query(By.css('.card-test'));
    input.nativeElement.dispatchEvent(new Event('boxFocus'));
    //expect
    expect(boxClickSpy).toHaveBeenCalled();
  });
  it(`should emit an event when change `, () => {
    //given
    const boxClickSpy = spyOn(serviceCode, 'onInputEntry');
    //when
    const input = fixture.debugElement.query(By.css('.card-test'));
    input.nativeElement.dispatchEvent(new Event('boxChange'));
    //expect
    expect(boxClickSpy).toHaveBeenCalled();
  });
  it(`should emit an event when click send `, () => {
    //given
    const boxClickSpy = spyOn(serviceCompare, 'compareCode');
    //when
    const input = fixture.debugElement.query(By.css('.card-test'));
    input.nativeElement.dispatchEvent(new Event('clickSend'));
    //expect
    expect(boxClickSpy).toHaveBeenCalled();
  });

});
