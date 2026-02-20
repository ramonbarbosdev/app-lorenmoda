import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoriesform } from './categoriesform';

describe('Categoriesform', () => {
  let component: Categoriesform;
  let fixture: ComponentFixture<Categoriesform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categoriesform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categoriesform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
