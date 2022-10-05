import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelMaterielComponent } from './nouvel-materiel.component';

describe('NouvelMaterielComponent', () => {
  let component: NouvelMaterielComponent;
  let fixture: ComponentFixture<NouvelMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
