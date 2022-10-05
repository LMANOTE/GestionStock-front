import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailCmdCltFrsComponent } from './deatail-cmd-clt-frs.component';

describe('DeatailCmdCltFrsComponent', () => {
  let component: DeatailCmdCltFrsComponent;
  let fixture: ComponentFixture<DeatailCmdCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailCmdCltFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatailCmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
