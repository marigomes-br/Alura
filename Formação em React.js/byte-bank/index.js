
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente ();
cliente1.nome = "Ricardo";
cliente1.cpf = 112223344;

const cliente2 = new Cliente ();
cliente2.nome = "Alice";
cliente2.cpf = 878787666666;


const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.cliente = cliente1;
contaCorrenteCliente1.depositar(500);

const conta2 = new ContaCorrente();
conta2.agencia = 102;
conta2.cliente = cliente2;

let valor = 200;
contaCorrenteCliente1.transferir(valor, conta2);

console.log(valor);

console.log(conta2);



// console.log(cliente2);

// contaCorrenteCliente1.depositar(100);
// contaCorrenteCliente1.depositar(100);
// contaCorrenteCliente1.depositar(100);

// const valorSacado = contaCorrenteCliente1.sacar(50);

// console.log(valorSacado);
// console.log(contaCorrenteCliente1);

