import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndbFullPageComponent } from './andb-full-page.component';

describe('AndbFullPageComponent', () => {
  let component: AndbFullPageComponent;
  let fixture: ComponentFixture<AndbFullPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndbFullPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndbFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
