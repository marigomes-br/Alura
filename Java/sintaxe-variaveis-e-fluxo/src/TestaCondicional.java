
public class TestaCondicional {
	
	public static void main(String[] args) {
		//sysout ctrl + espaço
		System.out.println("Testando Condicionais");
		int idade = 22;
		int quantidadePessoas = 3;
		
		if(idade >= 18) 
			System.out.println("Você tem mais de 18 anos");
		else {
			if(quantidadePessoas >= 2) {
				System.out.println("Pode entrar por estar acompanhado");
			}else {
				System.out.println("Infelizmente você não pode entrar");
			}
		}
	}
	
}
