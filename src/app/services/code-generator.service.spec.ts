import { TestBed } from '@angular/core/testing';

import { CodeGeneratorService } from './code-generator.service';

describe('CodeGeneratorService', () => {
  let service: CodeGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should generate a random number of 4 digits', () => {
    //given
    //when
    let randomCode = service.generateRandomNumber()+'';
    //expect
    console.log(randomCode);
    expect(randomCode.length).toEqual(4);
  });
});
