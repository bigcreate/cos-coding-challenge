import {TestBed} from '@angular/core/testing';
import {AuthGuard} from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should return "true" if a user is logged in', () => {
  });

  it('should redirect to "/login" if a user is not logged in', () => {
  });
});
