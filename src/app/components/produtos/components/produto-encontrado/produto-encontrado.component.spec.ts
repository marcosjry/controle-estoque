import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEncontradoComponent } from './produto-encontrado.component';

describe('ProdutoEncontradoComponent', () => {
  let component: ProdutoEncontradoComponent;
  let fixture: ComponentFixture<ProdutoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoEncontradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
