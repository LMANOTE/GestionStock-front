import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailCmdComponent } from './deatail-cmd.component';

describe('DeatailCmdComponent', () => {
  let component: DeatailCmdComponent;
  let fixture: ComponentFixture<DeatailCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailCmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatailCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
