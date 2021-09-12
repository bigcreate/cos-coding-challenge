import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginPageComponent} from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to "/auctions" if a user log in as a buyer', () => {
  });

  it('should show a error message if a user log in as a seller', () => {
  });

  it('should show a error message if  a user try to login with incorrect data', () => {
  });
});
