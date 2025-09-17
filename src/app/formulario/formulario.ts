import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  //Objeto de formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  //Visibilidade dos botões
  btnCadastrar: boolean = true;
  vetor: Pessoa[];

  cadastrar(){
    //Inclusão da função no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza dos inputs
    this.formulario.reset();

    //Visualização no console
    console.table(this.vetor);

    
  }
  //armazenar indice da pessoa selecionada
  indice: number = -1;

  selecionar(indice: number){
    //atribuir o indice da pessoa
    this.indice = indice;

    //atribuir os dados da pessoa no formulario

    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    this.btnCadastrar = false;
  }
}
