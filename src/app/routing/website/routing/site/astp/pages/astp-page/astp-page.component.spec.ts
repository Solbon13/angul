import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstpPageComponent } from './astp-page.component';

describe('AstpPageComponent', () => {
  let component: AstpPageComponent;
  let fixture: ComponentFixture<AstpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
