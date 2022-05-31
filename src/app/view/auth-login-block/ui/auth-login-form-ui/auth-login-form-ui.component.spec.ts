import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginFormUiComponent } from './auth-login-form-ui.component';

describe('AuthLoginFormUiComponent', () => {
  let component: AuthLoginFormUiComponent;
  let fixture: ComponentFixture<AuthLoginFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLoginFormUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
