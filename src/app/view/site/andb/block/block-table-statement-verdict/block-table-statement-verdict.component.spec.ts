import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTableStatementVerdictComponent } from './block-table-statement-verdict.component';

describe('BlockTableStatementVerdictComponent', () => {
  let component: BlockTableStatementVerdictComponent;
  let fixture: ComponentFixture<BlockTableStatementVerdictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockTableStatementVerdictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTableStatementVerdictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
