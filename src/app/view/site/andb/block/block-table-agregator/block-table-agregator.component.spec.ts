import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTableAgregatorComponent } from './block-table-agregator.component';

describe('BlockTableAgregatorComponent', () => {
  let component: BlockTableAgregatorComponent;
  let fixture: ComponentFixture<BlockTableAgregatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockTableAgregatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTableAgregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
