import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetatilMvtStkMaterielComponent } from './detatil-mvt-stk-materiel.component';

describe('DetatilMvtStkMaterielComponent', () => {
  let component: DetatilMvtStkMaterielComponent;
  let fixture: ComponentFixture<DetatilMvtStkMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetatilMvtStkMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetatilMvtStkMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
