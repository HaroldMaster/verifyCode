import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { CompareCodeService } from './compare-code.service';

describe('CompareCodeService', () => {
  let service: CompareCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DOCUMENT,
          useValue: document
        }
      ]
    });
    service = TestBed.inject(CompareCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should show success div when same codes', () => {
    //given
    let code : string = '1234';
    service.document.body.innerHTML = `
    <input  class="number" id="number__1" placeholder="1"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="1">
    <input  class="number" id="number__2" placeholder="2"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="2">
    <input  class="number" id="number__3" placeholder="2"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="3">
    <input  class="number" id="number__4" placeholder="3"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="4">
    <div id="success"></div>
    <div id="deny"></div>
  `;
    //when
    service.compareCode(code);
    //
    let success = document.getElementById("success");
    let deny = document.getElementById("deny");
    if(success)
    expect(success.style.display).toEqual("block");
   // if(deny)
  //  expect(deny.style.display).toEqual("none");
  });
  it('should show deny div when same codes', () => {
    //given
    let code : string = '3234';
    service.document.body.innerHTML = `
    <input  class="number" id="number__1" placeholder="1"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="1">
    <input  class="number" id="number__2" placeholder="2"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="2">
    <input  class="number" id="number__3" placeholder="2"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="3">
    <input  class="number" id="number__4" placeholder="3"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="4">
    <div id="success"></div>
    <div id="deny"></div>
  `;
    //when
    service.compareCode(code);
    //expect
    let success = document.getElementById("success");
    let deny = document.getElementById("deny");
    //if(success)
    //expect(success.style.display).toEqual("none");
    if(deny)
    expect(deny.style.display).toEqual("block");
  });
});
