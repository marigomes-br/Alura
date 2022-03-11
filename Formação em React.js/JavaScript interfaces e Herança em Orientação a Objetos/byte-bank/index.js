
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente ("Ricardo", 112223344);

const contaCorrenteCliente1 = new Conta(0, cliente1, 1001);

contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);


console.log(contaPoupanca);
console.log(contaCorrenteCliente1);