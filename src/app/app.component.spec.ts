import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
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

});
