import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStatementVerdictComponent } from './table-statement-verdict.component';

describe('TableStatementVerdictComponent', () => {
  let component: TableStatementVerdictComponent;
  let fixture: ComponentFixture<TableStatementVerdictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStatementVerdictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStatementVerdictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
