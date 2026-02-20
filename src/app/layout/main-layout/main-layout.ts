import { Component } from '@angular/core';
import { HomeHeader } from '../../feature/components/home-header/home-header';
import { HeroSection } from "../../feature/components/hero-section/hero-section";

@Component({
  selector: 'app-main-layout',
  imports: [HomeHeader, HeroSection],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
