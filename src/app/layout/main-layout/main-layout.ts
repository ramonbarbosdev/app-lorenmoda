import { Component } from '@angular/core';
import { HomeHeader } from '../../feature/components/home-header/home-header';
import { HeroSection } from "../../feature/components/hero-section/hero-section";
import { CategoriesSection } from "../../feature/components/categories-section/categories-section";
import { ProductsSection } from "../../feature/components/products-section/products-section";

@Component({
  selector: 'app-main-layout',
  imports: [HomeHeader, HeroSection, CategoriesSection, ProductsSection],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
