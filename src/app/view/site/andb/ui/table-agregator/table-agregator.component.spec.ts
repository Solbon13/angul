import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgregatorComponent } from './table-agregator.component';

describe('TableAgregatorComponent', () => {
  let component: TableAgregatorComponent;
  let fixture: ComponentFixture<TableAgregatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAgregatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAgregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
