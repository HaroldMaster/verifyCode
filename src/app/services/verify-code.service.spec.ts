import { DOCUMENT } from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { from } from 'rxjs';
import { VerifyCodeService } from './verify-code.service';


describe('VerifyCodeService', () => {
  let service: VerifyCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DOCUMENT,
          useValue: document
        }
      ]
    });
    service = TestBed.inject(VerifyCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return only numbers', () => {
    //given 
    let event : object = {
      data: 's',
      target: {attributes: {maxlength: {value: 1}}}
    }
    let id = 'number__1'
    let innerHTMLElement = service.document.createElement('div')
      innerHTMLElement.innerHTML = `
      <input class="number" id="number__1" placeholder="2"  
      maxlength=1 (focus)="emitFocusBox('number__1')" 
      (input)="emitChangeBox($event,'number__1')" value="1">
    `
    service.document.body.appendChild(innerHTMLElement);
    //when
    console.log(service.document.body) //?
    let input = <HTMLInputElement>service.document.getElementById("number__1");
    if(input)
    console.log(input.value)//? 

    service.onInputEntry(event, id);
    //expect
    expect(input.value).toEqual('');
  });

  it('should return focus next', () => {
    const inputValue = "5";
    //given 
    let event : object = {
      data: inputValue,
      target: {attributes: {maxlength: {value: inputValue.length}}}
    }
    let id = 'number__1'
    //when
    service.document.body.innerHTML = `
    <input  class="number" id="number__1" placeholder="2"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="${inputValue}">
  `;
    console.log(service.document.getElementById("number__1")) //
    let input = <HTMLInputElement>service.document.getElementById("number__1");
    if(input)
    console.log(input.value)//? 

    service.onInputEntry(event, id);
    //expect
    expect(input.value).toEqual('5');
  });
  it('should replace the value of input when focus', (doneFn) => {
    const inputValue = "5";
    //given 
    let event : object = {
      data: "2",
      target: {attributes: {maxlength: {value: inputValue.length}}}
    }
    let event2 : object = {
      data: "3",
      target: {attributes: {maxlength: {value: inputValue.length}}}
    }
    
    let id = 'number__1'
    //when
    service.document.body.innerHTML = `
    <input  class="number" id="number__1" placeholder="2"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="545454">
    <input  class="number" id="number__2" placeholder="2"  
    maxlength=1 (focus)="emitFocusBox('number__1')" 
    (input)="emitChangeBox($event,'number__1')" value="2">
  `;
    console.log(service.document.getElementById("number__1")) //
    let input = <HTMLInputElement>service.document.getElementById("number__1");

    input.addEventListener('keydown', (event) => {
      console.log(input.value) //?
      input.value = event.key; 
      expect(input.value).toEqual('3');
      doneFn();
    })


    console.log(input) //?
    if(input)
    console.log(input.value)//? 

    service.onInputEntry(event, id);
    
    service.replaceWhenValue("number__1");
    console.log(service.document.getSelection()?.toString())//?
  
    const eventKeyup = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      shiftKey: true,
      key: '3'
    });
    input.dispatchEvent(eventKeyup);
    //expect
    
  });
  it('should focus next', () => {
    //given 
    let event : object = {
      data: '9',
      target: {attributes: {maxlength: {value: 1}}}
    }
    let id = 'number__1';
    let innerHTMLElement = service.document.createElement('div')
      innerHTMLElement.innerHTML = `
      <input class="number" id="number__1" placeholder="2"  
      maxlength=1 (focus)="emitFocusBox('number__1')" 
      (input)="emitChangeBox($event,'number__1')" value="1">
      <input  class="number" id="number__2" placeholder="2"  
      maxlength=1 (focus)="emitFocusBox('number__1')" 
      (input)="emitChangeBox($event,'number__1')" value="2">
    `
    //when
    service.document.body.appendChild(innerHTMLElement);
    let input = <HTMLInputElement>service.document.getElementById("number__1");
    service.onInputEntry(event, id);
    let nextInput = <HTMLInputElement>service.document.getElementById("number__2");
    let isFocused = (document.activeElement === nextInput);
    //expect
    expect(isFocused).toEqual(true);
  });
});
