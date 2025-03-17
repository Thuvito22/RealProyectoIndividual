import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioordenadorComponent } from './formularioordenador.component';

describe('FormularioordenadorComponent', () => {
  let component: FormularioordenadorComponent;
  let fixture: ComponentFixture<FormularioordenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioordenadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
