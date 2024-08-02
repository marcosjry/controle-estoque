import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosHeaderComponent } from './produtos-header.component';

describe('ProdutosHeaderComponent', () => {
  let component: ProdutosHeaderComponent;
  let fixture: ComponentFixture<ProdutosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
