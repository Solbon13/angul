import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTablePtkComponent } from './block-table-ptk.component';

describe('BlockTablePtkComponent', () => {
  let component: BlockTablePtkComponent;
  let fixture: ComponentFixture<BlockTablePtkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockTablePtkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTablePtkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
