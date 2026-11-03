import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostspentComponent } from './costspent.component';

describe('CostspentComponent', () => {
  let component: CostspentComponent;
  let fixture: ComponentFixture<CostspentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostspentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostspentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
