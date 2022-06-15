import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderBlockComponent } from './sider-block.component';

describe('SiderBlockComponent', () => {
  let component: SiderBlockComponent;
  let fixture: ComponentFixture<SiderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
