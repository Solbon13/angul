import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginBlockComponent } from './auth-login-block.component';

describe('AuthLoginBlockComponent', () => {
  let component: AuthLoginBlockComponent;
  let fixture: ComponentFixture<AuthLoginBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLoginBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
