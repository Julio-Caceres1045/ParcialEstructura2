class Producto {
    codigo: string;
    nombre: string;
    precioCosto: number;
    precioVenta: number;
  
    constructor(codigo: string, nombre: string, precioCosto: number, precioVenta: number) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precioCosto = precioCosto;
      this.precioVenta = precioVenta;
    }
  }
  
  class TablaHash {
    private tabla: { [key: string]: Producto };
  
    constructor() {
      this.tabla = {};
    }
  
    // Método para agregar un producto a la tabla hash
    agregarProducto(producto: Producto): void {
      if (this.tabla[producto.codigo]) {
        console.log(`El producto con código ${producto.codigo} ya existe.`);
        return;
      }
      this.tabla[producto.codigo] = producto;
      console.log(`Producto ${producto.nombre} agregado correctamente.`);
    }
  
    // Método para buscar un producto por su código
    buscarProducto(codigo: string): Producto | null {
      const producto = this.tabla[codigo];
      if (producto) {
        return producto;
      } else {
        console.log(`El producto con código ${codigo} no se encontró.`);
        return null;
      }
    }
  
    // Método para mostrar todos los productos
    mostrarProductos(): void {
      console.log("Productos en la farmacia:");
      for (const codigo in this.tabla) {
        const producto = this.tabla[codigo];
        console.log(
          `Código: ${producto.codigo}, Nombre: ${producto.nombre}, Precio Costo: ${producto.precioCosto}, Precio Venta: ${producto.precioVenta}`
        );
      }
    }
  }
  
  // Ejemplo de uso
  const tablaHash1 = new TablaHash();
  
  const producto1 = new Producto("P001", "Pepto-Bismol", 50.0, 65.0);
  const producto2 = new Producto("P002", "Aspirina", 10.0, 15.0);
  
  tablaHash1.agregarProducto(producto1);
  tablaHash1.agregarProducto(producto2);
  
  tablaHash1.mostrarProductos();
  
  const busqueda = tablaHash1.buscarProducto("P001");
  if (busqueda) {
    console.log(`Producto encontrado: ${busqueda.nombre}`);
  }
  
  tablaHash1.mostrarProductos();
  