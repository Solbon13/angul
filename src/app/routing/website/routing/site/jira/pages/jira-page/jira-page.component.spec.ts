import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraPageComponent } from './jira-page.component';

describe('JiraPageComponent', () => {
  let component: JiraPageComponent;
  let fixture: ComponentFixture<JiraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
