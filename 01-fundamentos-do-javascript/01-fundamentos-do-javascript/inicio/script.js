        /*
        Alerta de Olá, Mundo! 
        alert("Olá, Mundo!");

        console.log("Olá, Mundo!");

        let mensagem = "Olá, Mundo!";
         alert(mensagem);
         console.log(mensagem);

         let nome = "Ricardo";
         console.log("Olá, " + nome + "!")
         alert("Olá, " + nome + "!");
        

        Adição
        let soma = 5 + 4;
        console.log("A soma é",soma);
        console.log(soma + 1);

        Subtração
        let subtracao = 10 - 4;
        console.log("A subtração é",subtracao);

        */

        /*
        let idade;
        idade = 25;

        console.log(idade);

        idade = 32;
        console.log(idade);

        idade = idade + 1;
        console.log(idade);
        */

        // Declaração de variável
        
        /*
        var nome = "João";
        console.log(nome);

        console.log("Bom dia, "+nome);
        console.log("O nome é "+nome);
                
        var idade = 25;
        var altura = 1.80;
        var possuiCarro = true;
        var nome = "João";
        */

        // Exibir os valores das variáveis

        /*
        console.log("Nome: ",nome);
        console.log("Idade: ",idade);
        console.log("Altura: ",altura);
        console.log("Possui carro? ",possuiCarro)

        var idade = 30;
        var altura = 1.65;
        var possuiCarro = false;
        var nome = "Maria";

        console.log("Nome: ",nome);
        console.log("Idade: ",idade);
        console.log("Altura: ",altura);
        console.log("Possui carro? ",possuiCarro);
        */
        

        /*
        CamelCase

        UpperCamelCase 
        lowerCamelCase
        */

        /*
        // Variáveis numéricas        
        let idade = 25;
        let altura = 1.75;
        console.log(typeof idade);

        // Variáveis de texto
        let nome = "Ricardo";
        let cidade = 'Aracruz';
        let carro = `Honda Civic`;
        console.log(typeof nome);
        console.log(typeof cidade);
        console.log(typeof carro);

        // Variável booleana (valor lógico: verdadeiro ou falso)
        let possuiCarro = true;
        let maiorIdade = false;
        console.log(typeof possuiCarro);
        console.log(typeof maiorIdade);

        // Variável indefinida 
        let marca; 
        console.log(marca);

        // Nula 
        let tipo = null;
        console.log(typeof tipo);

        // Symbol
        let id = Symbol("id");
        console.log(typeof id);

        // Bigint
        let valorEnorme = 12321904812908214n;
        console.log(typeof valorEnorme);
        */

        /*
        var: possui um valor global que funciona em qualquer parte do código. (não muito utilizável)
        let: usada para reatribuir um valor.
        const (constante): indica uma variável que não vai mudar.
        */

        /*
        let nome = "Maria";
        nome = "José";
        console.log(nome)

        const pi = 3.1415;
        */

        // Operadores Aritméticos
        /*
        Soma:
        const a = 5;
        const b = 3;
        const soma = a + b;
        console.log(soma);
        */

        /*
        Subtração:
        const a = 8;
        const b = 3;
        const subtracao = a - b;
        console.log(subtracao);
        */

        /*
        Multiplicação:
        const a = 4;
        const b = 5;
        const multiplicacao = 5 * 4;
        console.log(multiplicacao);
        */

        /*
        Divisão:
        const a = 10;
        const b = 2;
        const divisao = a / b;
        console.log(divisao);
        */
        
        /*
        Módulo (%):
        const a = 10;
        const b = 3;
        const modulo = a % b;
        console.log(modulo);
        */

        /*
        Índice de massa corporal
        const peso = 56; // peso em quilogramas
        const altura = 1.70; // altura em metros
        const imc = peso / (altura * altura);
        console.log(imc);
        console.log(imc.toFixed(2));
        */

        /*
        Cálculo de média de notas
        const nota1 = 8.75;
        const nota2 = 2.02;
        const nota3 = 9.01;
        const media = (nota1 + nota2 + nota3) / 3;
        console.log(media.toFixed(1));
        */

        /*
        Converter Celsius -> Farenheit
        const celsius = 100;
        const farenheit = (celsius * 9 / 5) + 32;
        console.log(farenheit);
        */

        /*
        Cálculo do perímetro e a área de um Círculo
        const pi = 3.14159;
        const raio = 5;
        const perimetro = 2 * pi * raio;
        const area = pi * (raio ** 2); // (** - Potência / Elevado a)
        console.log(perimetro);
        console.log(area);
        */

        /*
        Concatenar String (+)
        const nome = "João";
        const sobrenome = "Silva";
        const nomeCompleto = nome + " " + sobrenome; 
        console.log(nomeCompleto);
        */

        /*
        const produto = "canetas";
        const quantidade = 5
        const msg = "Você comprou " + quantidade + " " + produto;
        console.log(msg);
        */

        /*
        Operador de Incremento (++)
        let a = 5;
        console.log(a);
        a++; // a = a + 1;
        console.log(a);
        */

        /*
        Operador de Decremento (--)
        let a = 5;
        a--; // a = a - 1;
        console.log(a);
        */

        /*
        Operador de Atribuição (=)
        let a = 10;
        */

        /*
        Operador de Atribuição com Incremento (+=)
        let a = 10;
        console.log(a);

        a += 2;
        console.log(a);
        */

        /*
        Operador de Atrbuição com Decremento (-=)
        let a = 10;
        a -= 4;
        console.log(a);
        */

        /*
        let num = 20;
        num /= 5; // num = num / 5;        
        console.log(num);
        */

        /*
        let num = 10;
        num *= 2; // num = num * 2;
        console.log(num);
        */

        // Operadores de Comparação:
        /*
        Igualdade (==)
        const a = 5;
        const b = 6;
        console.log(a == b); // false (a não é igual a b);
        console.log(a == a); // true
        */

        /*
        Diferente (!=)
        const a = 5;
        const b = 6;
        const c = 6;
        console.log(a != b); // true (a é diferente de b);
        console.log(b != c); // false (b não é diferente de c);
        */

        /*
        Menor (<)
        const a = 2;
        const b = 1;
        console.log(a < b); // false (a não é menor que b);
        console.log(b < a); // true (b é menor que a);
        */

        /*
        Maior (>) / Maior igual (>=)
        const a = 2;
        const b = 1;
        console.log(a > b); // true (a é maior que b);
        console.log(b > a); // false (b não é maior que a);

        const c = 2;
        console.log(a >= c); // true (a é maior ou igual a c);

        const d = 4;
        console.log(a >= c + b); // false
        */

        /*
        Menor igual (<=)
        const a = 2;
        const b = 2;
        const c = 3;
        const d = 4;
        console.log(a < b); // false
        console.log(b <= a); // true
        console.log(c <= d); // true
        console.log(d <= c - a); // false
        */

        /*
        Verificar se um número é positivo
        let num = 5;
        let positivo = (num > 0);
        console.log("O número é positivo?", positivo); // true
        */

        /*
        Verificar se um número é par
        let num = 5;
        let par = (num % 2) == 0
        console.log("O número", num, "é par?", par); // false
        */

        /*
        const res = (5 + 3) * 2;
        console.log(res);

        const msg = "Olá, " + "Mundo!";
        console.log(msg);

        const potencia = 2 ** 3 ** 2; // da direita para a esquerda
        console.log(potencia);
        */

        /*
        Analisando a Precedência de Operadores
        const res = 10 - 2 + 3 > 5; // true
        console.log(res);

        let potencia = ((2 ** (3 ** 2)) > 100); // true
        console.log(potencia);

        const divisao = (((10 / 2) / 5) < 2); // true
        console.log(divisao);
        */

        /*
        Strings e Templates Literais
        const mensagem = "Olá, Mundo!";
        const nome = "Maria";
        const cumprimento = "Bem vinda"
        const mensagem = cumprimento + ", " + nome +"!";
        console.log(mensagem);
        */

        /*
        const cumprimento = "Olá";
        const nome = "João";
        const mensagem = `${cumprimento} ${nome}, Seja bem vindo!`;
        console.log(mensagem);
        */

        /*
        const idade = 25;
        const texto = `Eu tenho ${idade} anos.`;
        console.log(texto);
        */

        /*
        Prompt
        const nome = prompt('Qual é o seu nome?');
        console.log(`Olá, ${nome}, seja bem vindo!`);
        
        const numero = prompt('Digite um número:');
        const quadrado = numero ** 2;
        console.log(`O número informado é ${numero} e o seu quadrado é ${quadrado}.`);
        */

       /*
       If - Estrutura condicional

       const num = 18;

       console.log('Início');

       if (num > 0){
        // Só será executado se a condição for verdadeira
        console.log('O número é positivo')
       }

       console.log('Fim');
       */

       /*
       let logado = true;
       if (logado){
        console.log('Bem vindo, usuário!');
       }
       */
      
       /*
       let num = 1;
       if (num != 0){
        console.log('Diferente de zero')
       }
       */
      
       let idade = 18;
       if (idade >= 18){
        console.log('Você é maior de idade');
       } else {
        console.log('Você é menor de idade')
       }
       
       
      
        





        



        














        