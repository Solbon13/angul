import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePtkComponent } from './table-ptk.component';

describe('TablePtkComponent', () => {
  let component: TablePtkComponent;
  let fixture: ComponentFixture<TablePtkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePtkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePtkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
