import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraImcComponent implements OnInit {
  form: FormGroup;

  constructor( private builder: FormBuilder
  ) {
    this.form = this.builder.group({
      nome: ['', Validators.required],
      altura: ['', Validators.required],
      peso: ['', Validators.required],
      resultado: ['']
    });
  }

  ngOnInit(): void {
  }

  calcular() {

    if (this.form.valid) {

      const valorimc : number  = (this.form.value.peso / (this.form.value.altura * this.form.value.altura))
        .toFixed(1) as unknown as number;

      let classificacao = '';

      if (valorimc < 18.5) {
        classificacao = 'abaixo do peso.';
      } else if (valorimc < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
      } else if (valorimc < 30) {
        classificacao = 'levemente acima do peso.';
      } else if (valorimc < 35) {
        classificacao = 'com obesidade grau I';
      } else if (valorimc < 40) {
        classificacao = 'com obesidade grau II';
      } else {
        classificacao = 'com obesidade grau III. Cuidado!!!';
      }

      //@ts-ignore
      this.form.controls?.resultado.setValue(`${this.form.value.nome} seu IMC é ${valorimc} e você está ${classificacao}`);
    }
    else {
      //@ts-ignore
      this.form.controls?.resultado.setValue(' Preencha todos os campos!!!');
    }
  }
}
