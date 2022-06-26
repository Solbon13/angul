import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRegComponent } from './table-reg.component';

describe('TableRegComponent', () => {
  let component: TableRegComponent;
  let fixture: ComponentFixture<TableRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
