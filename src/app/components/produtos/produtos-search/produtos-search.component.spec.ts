import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosSearchComponent } from './produtos-search.component';

describe('ProdutosSearchComponent', () => {
  let component: ProdutosSearchComponent;
  let fixture: ComponentFixture<ProdutosSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
