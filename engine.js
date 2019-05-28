/**
 * carro de compra
 * almacenara todos los prods a comprar
 */
let car = [];
/**
 * productos
 */
let prods = [
    {id: 1,prod: "Laptop", code: "lpt", precio: "2500"},
    {id: 2,prod: "Mouse alambrico", code: "ml" , precio: "500"},
    {id: 3,prod: "Xbox one s", code: "xboxs" , precio: "500"},
];

/**
 * funciones
 */

 // agrega a carro de compra
let prod_res = null;
let prod_add = [];
// busca producto a agregar
const AgregaProducto = (code = null) => {
       prods.forEach((ele)=> {
           if (ele.code === code) {
               prod_res = ele.id;
           }
       })
}
// agrega cantidad y genera objeto a guardar
const AgregaCantidad = (cantidad = 0, prod = null) => {
    prod_add.splice(0,0,{id: prod, cantidad:cantidad})
}
/** primer producto */
AgregaProducto("ml");
AgregaCantidad(2, prod_res);
/**segundo producto */
AgregaProducto("lpt");
AgregaCantidad(2, prod_res);
/**segundo producto */
AgregaProducto("xboxs");
AgregaCantidad(1, prod_res);
/** resultados */
console.log(`Elementos Carrito: ${prod_add.length}`);
console.log(`Lista prductos: ${JSON.stringify(prod_add)}`);