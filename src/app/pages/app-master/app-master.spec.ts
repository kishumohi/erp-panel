import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMaster } from './app-master';

describe('AppMaster', () => {
  let component: AppMaster;
  let fixture: ComponentFixture<AppMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMaster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
