import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsettingComponent } from './navsetting.component';

describe('NavsettingComponent', () => {
  let component: NavsettingComponent;
  let fixture: ComponentFixture<NavsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavsettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
