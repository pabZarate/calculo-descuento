/*Ejercicio: Cálculo de Descuento
• Implemente un algoritmo que calcule y muestre
  por pantalla el precio final de un producto
  después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%. Recuerde que
  puede obtener el 10% de un valor multiplicado por 0,1
• El precio y el descuento deben ser guardados en
  variables (no ingresados por teclado) */

let precioinicial: number = 450.5;
let descuento: number = 0.1;
let preciofinal: number = 450.5 - 450.5 * 0.1;
console.log("El precio inicial es " + precioinicial);
console.log("El porcentaje de descuento es " + descuento);
console.log(
  "El descuento que usted va a recibir es " + precioinicial * descuento
);
console.log("El precio final con el descuento es " + preciofinal);
