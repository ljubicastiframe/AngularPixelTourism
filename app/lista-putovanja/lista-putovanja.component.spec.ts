import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPutovanjaComponent } from './lista-putovanja.component';


describe('ListaPutovanjaComponent', () => {
  let component: ListaPutovanjaComponent;
  let fixture: ComponentFixture<ListaPutovanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPutovanjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPutovanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
