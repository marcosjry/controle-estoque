import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturedComponent } from './home-featured.component';

describe('HomeFeaturedComponent', () => {
  let component: HomeFeaturedComponent;
  let fixture: ComponentFixture<HomeFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFeaturedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
