import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTechnisienComponent } from './page-technisien.component';

describe('PageTechnisienComponent', () => {
  let component: PageTechnisienComponent;
  let fixture: ComponentFixture<PageTechnisienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTechnisienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTechnisienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
