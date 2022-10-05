import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaterielComponent } from './page-materiel.component';

describe('PageMaterielComponent', () => {
  let component: PageMaterielComponent;
  let fixture: ComponentFixture<PageMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
