import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDocsPageComponent } from './google-docs-page.component';

describe('GoogleDocsPageComponent', () => {
  let component: GoogleDocsPageComponent;
  let fixture: ComponentFixture<GoogleDocsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleDocsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDocsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
