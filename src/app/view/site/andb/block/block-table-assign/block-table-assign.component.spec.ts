import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTableAssignComponent } from './block-table-assign.component';

describe('BlockTableAssignComponent', () => {
  let component: BlockTableAssignComponent;
  let fixture: ComponentFixture<BlockTableAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockTableAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTableAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
