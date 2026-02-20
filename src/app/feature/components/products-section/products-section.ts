import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-section',
  imports: [CommonModule],
  templateUrl: './products-section.html',
  styleUrl: './products-section.scss',
})
export class ProductsSection {


  products = [
    { name: "Casaco Lã Premium", price: "R$ 1.290", image: "assets/product-1.jpg", tag: "Novo" },
    { name: "Bolsa Tote Couro", price: "R$ 890", image: "assets/product-2.jpg", tag: null },
    { name: "Blusa Seda Natural", price: "R$ 490", image: "assets/product-3.jpg", tag: "Novo" },
    { name: "Calça Alfaiataria", price: "R$ 650", image: "assets/product-4.jpg", tag: null },
    { name: "Relógio Clássico Dourado", price: "R$ 1.750", image: "assets/product-5.jpg", tag: "Destaque" },
    { name: "Tênis Minimalista", price: "R$ 520", image: "assets/product-6.jpg", tag: null },
    { name: "Blazer Oversized", price: "R$ 780", image: "assets/product-7.jpg", tag: "Novo" },
    { name: "Cinto Couro Premium", price: "R$ 320", image: "assets/product-8.jpg", tag: null },
  ];


}
