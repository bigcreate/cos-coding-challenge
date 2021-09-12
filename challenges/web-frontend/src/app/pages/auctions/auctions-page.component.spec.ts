import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuctionsPageComponent } from './auctions-page.component';

describe('AuctionsPageComponent', () => {
  let component: AuctionsPageComponent;
  let fixture: ComponentFixture<AuctionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should request a list of auctions after initialization', () => {
  });

  it('should request a list of auctions every 20 seconds', () => {
  });

  it('should show warning message if a request is failed', () => {
  });
});
