import {TestBed} from '@angular/core/testing';

import {AuthInterceptor} from './auth.interceptor';

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptor
    ]
  }));

  it('should add auth headers', () => {
  });

  it('should not change a request if there is no auth data', () => {
  });

  it('should not change a request for other APIs', () => {
  });
});
