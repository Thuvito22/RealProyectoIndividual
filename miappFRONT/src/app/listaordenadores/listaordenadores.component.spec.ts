import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaordenadoresComponent } from './listaordenadores.component';

describe('ListaordenadorComponent', () => {
  let component: ListaordenadoresComponent;
  let fixture: ComponentFixture<ListaordenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaordenadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaordenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
