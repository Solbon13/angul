import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAssignComponent } from './table-assign.component';

describe('TableAssignComponent', () => {
  let component: TableAssignComponent;
  let fixture: ComponentFixture<TableAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
