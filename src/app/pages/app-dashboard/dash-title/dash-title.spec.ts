import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTitle } from './dash-title';

describe('DashTitle', () => {
  let component: DashTitle;
  let fixture: ComponentFixture<DashTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
