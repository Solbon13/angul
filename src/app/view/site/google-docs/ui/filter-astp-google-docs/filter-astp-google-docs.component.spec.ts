import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAstpGoogleDocsComponent } from './filter-astp-google-docs.component';

describe('FilterAstpGoogleDocsComponent', () => {
  let component: FilterAstpGoogleDocsComponent;
  let fixture: ComponentFixture<FilterAstpGoogleDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAstpGoogleDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAstpGoogleDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
