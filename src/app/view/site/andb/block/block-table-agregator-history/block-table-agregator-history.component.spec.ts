import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTableAgregatorHistoryComponent } from './block-table-agregator-history.component';

describe('BlockTableAgregatorHistoryComponent', () => {
  let component: BlockTableAgregatorHistoryComponent;
  let fixture: ComponentFixture<BlockTableAgregatorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockTableAgregatorHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTableAgregatorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
