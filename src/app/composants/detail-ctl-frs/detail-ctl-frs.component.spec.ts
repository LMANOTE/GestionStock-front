import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCtlFrsComponent } from './detail-ctl-frs.component';

describe('DetailCtlFrsComponent', () => {
  let component: DetailCtlFrsComponent;
  let fixture: ComponentFixture<DetailCtlFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCtlFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCtlFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
