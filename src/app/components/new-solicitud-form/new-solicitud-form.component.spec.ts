import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSolicitudFormComponent } from './new-solicitud-form.component';

describe('NewSolicitudFormComponent', () => {
  let component: NewSolicitudFormComponent;
  let fixture: ComponentFixture<NewSolicitudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSolicitudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSolicitudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
