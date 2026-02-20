import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorieslist } from './categorieslist';

describe('Categorieslist', () => {
  let component: Categorieslist;
  let fixture: ComponentFixture<Categorieslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorieslist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorieslist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
