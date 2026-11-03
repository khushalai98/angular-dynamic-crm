import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksspaceComponent } from './worksspace.component';

describe('WorksspaceComponent', () => {
  let component: WorksspaceComponent;
  let fixture: ComponentFixture<WorksspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
