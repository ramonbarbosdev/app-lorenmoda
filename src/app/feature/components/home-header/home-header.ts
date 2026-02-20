import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-home-header',
  imports: [CommonModule],
  templateUrl: './home-header.html',
  styleUrl: './home-header.scss',
  animations: [
    trigger('mobileMenu', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        transform: 'translateY(-10px)'
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('closed <=> open',
        animate('300ms cubic-bezier(.16,1,.3,1)')
      )
    ])
  ]

})
export class HomeHeader {

  navLinks:any[] = []

  ngOnInit() {
    this.navLinks = [
      "Início",
      "Novidades",
      "Masculino",
      "Feminino",
      "Acessórios",
      "Promoções",
      "Contato"
    ];
  }

  menuOpen = false;
  scrolled = false;

  constructor(public theme: ThemeService) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }

}
