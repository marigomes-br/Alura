
public class TestaEscopo {
	public static void main(String[] args) {
		//sysout ctrl + espa�o
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


//main + ctrl + espa�o
//para gerar o m�todo main

//ctrl + shift + f
//para formatar o c�digo fonte

//sysout + ctrl + espa�o
//para gerar a instru��o System.out.println()