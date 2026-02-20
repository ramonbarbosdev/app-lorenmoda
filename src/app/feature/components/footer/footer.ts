import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FooterColumn {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

    readonly footerColumns: FooterColumn[] = [
    {
      title: 'Institucional',
      links: ['Sobre Nós', 'Nossa História', 'Sustentabilidade', 'Carreiras']
    },
    {
      title: 'Ajuda',
      links: ['FAQ', 'Trocas e Devoluções', 'Frete e Entrega', 'Formas de Pagamento']
    },
    {
      title: 'Categorias',
      links: ['Masculino', 'Feminino', 'Acessórios', 'Promoções']
    }
  ];
}
