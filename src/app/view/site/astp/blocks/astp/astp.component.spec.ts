import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstpComponent } from './astp.component';

describe('AstpComponent', () => {
  let component: AstpComponent;
  let fixture: ComponentFixture<AstpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
