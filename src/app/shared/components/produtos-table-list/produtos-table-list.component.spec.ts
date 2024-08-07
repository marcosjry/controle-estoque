import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosTableListComponent } from './produtos-table-list.component';

describe('ProdutosTableListComponent', () => {
  let component: ProdutosTableListComponent;
  let fixture: ComponentFixture<ProdutosTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosTableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
