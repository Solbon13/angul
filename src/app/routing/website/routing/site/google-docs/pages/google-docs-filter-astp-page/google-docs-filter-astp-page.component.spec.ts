import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDocsFilterAstpPageComponent } from './google-docs-filter-astp-page.component';

describe('GoogleDocsFilterAstpPageComponent', () => {
  let component: GoogleDocsFilterAstpPageComponent;
  let fixture: ComponentFixture<GoogleDocsFilterAstpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleDocsFilterAstpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDocsFilterAstpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
