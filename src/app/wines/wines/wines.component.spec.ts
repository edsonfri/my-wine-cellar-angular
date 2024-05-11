import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WinesComponent } from './wines.component';

describe('WinesComponent', () => {
  let component: WinesComponent;
  let fixture: ComponentFixture<WinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinesComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
