import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrototipoService {

  constructor() { }

  tela = [
    {
      telaImg:"../../assets/img/tela1.png",
      telaTituloPreto:"Como o aplicativo funciona:",
      telaTitulo:"",
      telaDetalhes:""
    },
    {
      telaImg:"../../assets/img/tela2.png",
      telaTituloPreto:"",
      telaTitulo:"Venda seus produtos",
      telaDetalhes:"Venda seus produtos no Veganissimo"
    },
    {
      telaImg:"../../assets/img/tela3.png",
      telaTituloPreto:"",
      telaTitulo:"Explorar variedades",
      telaDetalhes:"Crie uma variedade de produtos no Veganissimo e lucre com eles"
    },
    {
      telaImg:"../../assets/img/tela4.png",
      telaTituloPreto:"",
      telaTitulo:"Sua venda",
      telaDetalhes:"Quando você terminar de comprar e vender"
    },
  ]

}
