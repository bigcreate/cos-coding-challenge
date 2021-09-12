import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  describe('login', () => {
    it('should set auth data', () => {
    });

    it('should return received data', () => {
    });

    it('should reset auth data if there is an error', () => {
    });
  });

  describe('isAuthorized', () => {
    it('should return "true" if there is correct auth data', () => {
    });

    it('should return "false" if there is no auth data', () => {
    });

    it('should return "false" if the user is not authenticated', () => {
    });

    it('should return "false" if the user doesn\'t have token', () => {
    });
  });

  describe('getAuthData', () => {
    it('should return auth data', () => {
    });
  });
});
