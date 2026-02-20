import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

type TabKey = 'vendidos' | 'novidades' | 'lancamentos';

interface Tab {
  label: string;
  key: TabKey;
}

interface Product {
  name: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-highligth-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highligth-section.html',
  styleUrls: ['./highligth-section.scss']
})
export class HighligthSection {

  tabs: Tab[] = [
    { label: "Mais Vendidos", key: "vendidos" },
    { label: "Novidades", key: "novidades" },
    { label: "Lançamentos", key: "lancamentos" },
  ];

  activeTab = signal<TabKey>('vendidos');

  productsByTab: Record<TabKey, Product[]> = {
    vendidos: [
      { name: "Casaco Lã Premium", price: "R$ 1.290", image: "assets/product-1.jpg" },
      { name: "Relógio Clássico Dourado", price: "R$ 1.750", image: "assets/product-5.jpg" },
      { name: "Blusa Seda Natural", price: "R$ 490", image: "assets/product-3.jpg" },
      { name: "Blazer Oversized", price: "R$ 780", image: "assets/product-7.jpg" },
    ],
    novidades: [
      { name: "Tênis Minimalista", price: "R$ 520", image: "assets/product-6.jpg" },
      { name: "Cinto Couro Premium", price: "R$ 320", image: "assets/product-8.jpg" },
      { name: "Bolsa Tote Couro", price: "R$ 890", image: "assets/product-2.jpg" },
      { name: "Calça Alfaiataria", price: "R$ 650", image: "assets/product-4.jpg" },
    ],
    lancamentos: [
      { name: "Blazer Oversized", price: "R$ 780", image: "assets/product-7.jpg" },
      { name: "Relógio Clássico Dourado", price: "R$ 1.750", image: "assets/product-5.jpg" },
      { name: "Casaco Lã Premium", price: "R$ 1.290", image: "assets/product-1.jpg" },
      { name: "Blusa Seda Natural", price: "R$ 490", image: "assets/product-3.jpg" },
    ]
  };

  filteredProducts = computed<Product[]>(() =>
    this.productsByTab[this.activeTab()]
  );

  setTab(key: TabKey): void {
    this.activeTab.set(key);
  }

}