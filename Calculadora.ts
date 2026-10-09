import Bhaskara from "./Classes/Bhaskara";
import Divisao from "./Classes/Divisao";
import Multiplicacao from "./Classes/Multiplicacao";
import Potencia from "./Classes/Potencia";
import Soma from "./Classes/Soma";
import Subtracao from "./Classes/Subtracao";
import * as readline from "readline";

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question(
    "Digite a operação e os números desejados(Por exemplo: '1 1 1'):\n1.Soma\n2.Substracao\n3.Multiplicacao\n4.Potência\n5.Divisão\n6.Bhaskara\n",
    (valor) => {

        let instrucoes = valor.split(" ");

        let operacao = instrucoes[0];
        let numero1 = Number(instrucoes[1]);
        let numero2 = Number(instrucoes[2]);
        let numero3 = Number(instrucoes[3]);

        switch (operacao) {
            case "1": {
                let calculo = new Soma();
                console.log(
                    `O resultado é ${calculo.Calcular(numero1, numero2)}`
                );
                break;
            }

            case "2": {
                let calculo = new Subtracao();
                console.log(
                    `O resultado é ${calculo.Calcular(numero1, numero2)}`
                );
                break;
            }

            case "3": {
                let calculo = new Multiplicacao();
                console.log(
                    `O resultado é ${calculo.Calcular(numero1, numero2)}`
                );
                break;
            }

            case "4": {
                let calculo = new Potencia();
                console.log(
                    `O resultado é ${calculo.Calcular(numero1, numero2)}`
                );
                break;
            }

            case "5": {
                let calculo = new Divisao();
                console.log(
                    `O resultado é ${calculo.Calcular(numero1, numero2)}`
                );
                break;
            }

            case "6": {
                let calculo = new Bhaskara();
                console.log(`O resultado é ${calculo.Calcular(numero1,numero2,numero3)}`
                );
                break;
            }

            default:
                console.log("Operação inválida.");
        }

        leitor.close();
    }
);
