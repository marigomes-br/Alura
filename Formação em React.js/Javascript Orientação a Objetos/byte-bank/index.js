
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente ("Ricardo", 112223344);
const cliente2 = new Cliente ("Alice", 8787876666);

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);

contaCorrenteCliente1.depositar(500);
const conta2 = new ContaCorrente(cliente1, 102);

let valor = 200;
contaCorrenteCliente1.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);