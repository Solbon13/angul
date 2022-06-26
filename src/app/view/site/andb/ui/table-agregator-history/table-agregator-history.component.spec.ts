import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgregatorHistoryComponent } from './table-agregator-history.component';

describe('TableAgregatorHistoryComponent', () => {
  let component: TableAgregatorHistoryComponent;
  let fixture: ComponentFixture<TableAgregatorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAgregatorHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAgregatorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
