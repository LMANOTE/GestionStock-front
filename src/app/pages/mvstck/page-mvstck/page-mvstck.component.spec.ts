import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMvstckComponent } from './page-mvstck.component';

describe('PageMvstckComponent', () => {
  let component: PageMvstckComponent;
  let fixture: ComponentFixture<PageMvstckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMvstckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMvstckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
