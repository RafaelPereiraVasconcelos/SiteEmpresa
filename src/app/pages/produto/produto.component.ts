import { Component } from '@angular/core';
import { PrototipoService } from 'src/app/telas/prototipo.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  constructor (private service:PrototipoService) { }
  telaData: any;
  ngOnInit(): void{
    this.telaData = this.service.tela;
  }

}
