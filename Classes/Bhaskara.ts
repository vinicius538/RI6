import Calculo from "./Calculo";

export default class Bhaskara extends Calculo{
    public Calcular(
        numero1: number,
        numero2: number,
        numero3: number
        ): number[] {

        let delta = numero2 ** 2 - 4 * numero1 * numero3

        if(delta<=0){
            throw new Error("Não existe Raízes para essa equação")
        }

        let x1 = (-numero2 + Math.sqrt(delta))/(2*numero1)
        let x2 = (-numero2 - Math.sqrt(delta))/(2*numero1)

        return [x1,x2]
    }
}