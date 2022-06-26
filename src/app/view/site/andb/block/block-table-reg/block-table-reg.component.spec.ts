import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTableRegComponent } from './block-table-reg.component';

describe('BlockTableRegComponent', () => {
  let component: BlockTableRegComponent;
  let fixture: ComponentFixture<BlockTableRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockTableRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTableRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
