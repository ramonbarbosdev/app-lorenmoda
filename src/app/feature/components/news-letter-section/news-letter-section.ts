import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-news-letter-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './news-letter-section.html',
  styleUrl: './news-letter-section.scss',
})
export class NewsLetterSection {

  email = signal('');

  submit() {
    console.log('Email cadastrado:', this.email());
  }
}
