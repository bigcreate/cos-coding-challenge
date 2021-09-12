import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have "userId" and "password" fields', () => {
  });

  it('should emit the form data', () => {
  });

  it('should set "invalid" css class for fields after clicking on "Login" button if the form is invalid', () => {
  });
});
