
public class TestaEscopo {
	public static void main(String[] args) {
		//sysout ctrl + espaço
		System.out.println("Testando Condicionais");
		int idade = 22;
		int quantidadePessoas = 3;
		boolean acompanhado;
		
		if(quantidadePessoas >= 2) {
			acompanhado = true;
		}else {
			acompanhado = false;
		}
		
		if(idade >= 18 && acompanhado) 
			System.out.println("Entrada liberada, bem-vindo!");
		else 
			System.out.println("Entrada Proibida!");
		
	}
}


//main + ctrl + espaço
//para gerar o método main

//ctrl + shift + f
//para formatar o código fonte

//sysout + ctrl + espaço
//para gerar a instrução System.out.println()