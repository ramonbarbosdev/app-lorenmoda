import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-section',
  imports: [CommonModule],
  templateUrl: './categories-section.html',
  styleUrl: './categories-section.scss',
})
export class CategoriesSection {

    categories = [
    { name: "Masculino", image: "assets/cat-masculino.jpg" },
    { name: "Feminino", image: "assets/cat-feminino.jpg" },
    { name: "Acessórios", image: "assets/cat-acessorios.jpg" },
  ];
}
