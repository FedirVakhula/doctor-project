import { TestBed, inject } from '@angular/core/testing';

import { LoginSevice } from './login-sevice.service';

describe('LoginSevice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSevice]
    });
  });

  it('should be created', inject([LoginSevice], (service: LoginSevice) => {
    expect(service).toBeTruthy();
  }));
});
