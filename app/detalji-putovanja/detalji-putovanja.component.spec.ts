import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiPutovanjaComponent } from './detalji-putovanja.component';

describe('DetaljiPutovanjaComponent', () => {
  let component: DetaljiPutovanjaComponent;
  let fixture: ComponentFixture<DetaljiPutovanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljiPutovanjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaljiPutovanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
