import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGoogleDocsComponent } from './table-google-docs.component';

describe('TableGoogleDocsComponent', () => {
  let component: TableGoogleDocsComponent;
  let fixture: ComponentFixture<TableGoogleDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGoogleDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGoogleDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
