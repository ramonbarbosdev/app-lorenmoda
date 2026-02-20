import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterSection } from './news-letter-section';

describe('NewsLetterSection', () => {
  let component: NewsLetterSection;
  let fixture: ComponentFixture<NewsLetterSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLetterSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLetterSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
