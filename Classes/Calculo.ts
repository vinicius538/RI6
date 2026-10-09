export default abstract class Calculo {
    public abstract Calcular(
        numero1:number,
        numero2:number,
        numero3:number
    ): number | number[];
}