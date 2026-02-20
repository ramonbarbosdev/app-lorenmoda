import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighligthSection } from './highligth-section';

describe('HighligthSection', () => {
  let component: HighligthSection;
  let fixture: ComponentFixture<HighligthSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighligthSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighligthSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
