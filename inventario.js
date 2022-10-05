class Inventario{
    constructor(){
        // 0,1
        this.productos = [];
    }
    agregar(nuevoProducto){
        //nuevo método para añadir un producto con busqueda binaria
        let codigoProducto = nuevoProducto.codigo;
        let inicioArray = Number(0);
        let finalArray = Number(this.productos.length)-1;
        let mitadArray = Math.floor(inicioArray+finalArray)/2;
        if(codigoProducto===this.productos[mitadArray]){
            return null;
        }
        while(this.productos[mitadArray] !== codigoProducto){
            // Aquí el ciclo es infinito pues el array está vacío y nunca será igual a la cantidad
            console.log("pepe");
            if(codigoProducto<this.productos[mitadArray]){  
                 finalArray = mitadArray - 1;
            }
            else{
                inicioArray = mitadArray + 1;
            }
            mitadArray = Math.floor(inicioArray+finalArray)/2; 
        }
        for(let i=this.productos.length-1;i<=mitadArray+1;i--){
            this.productos[i]=this.productos[i-1];       
        }
        this.productos[mitadArray]= nuevoProducto;
        
        /*Anterior método de agregar un producto al array de productos: this.productos.push(nuevoProducto);
        console.log("pepe");*/
    }
    info(){
        return codigo, nombre, cantidad, costo;
    }
    eliminar(codigo){
        let posicion = this.getPosicion(codigo);
        let siguientePosicion = posicion+1;
        if(posicion!=null){
            while(siguientePosicion<this.productos.length){
                console.log("pepe");
                let auxiliar = this.productos[posicion];
                this.productos[posicion] = this.productos[siguientePosicion];
                this.productos[siguientePosicion] = auxiliar;
                posicion++;
                siguientePosicion++;
            }
            return this.productos.pop();
        }
        return null;
    }
    listado(){
        let lista = ""
        for(let i=0; i<this.productos.length;i++){
            lista+= "<br>" + this.productos[i].datos() +"</br>"
        }
        return lista;
    }
    
    listadoInverso(){
        let lista =""
        for(let i=this.productos.length-1;i>=0;i--){
            lista+= "<br>" + this.productos[i].datos() +"</br>"
        }
        return lista;
    }
    buscar(codigo){
        //let id = 0;
        let lista = ""
        if(this.productos!=null){
            for(let i=0;i<=this.productos.length;i++){
                if(this.productos[i].codigo==codigo){
                    //id =this.productos[i];
                    lista= this.productos[i].datos()
                    return lista;           
                }
                else{
                    return null;
                }
            }   
        }   
    }
    getPosicion(codigo){
        for(let i=0;i<this.productos.length;i++){
            if(codigo == this.productos[i].getCodigo()){
                return i;
            }
            else{
                return null;
            }
        } 
    }
}