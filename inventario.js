class Inventario{
    constructor(){
        // 0,1
        this.productos = [];
    }
    agregar(nuevoProducto){
        //nuevo método para añadir un producto 
        let auxiliar = this.productos[this.productos.length-1];
        if(this.productos.length==0){
            this.productos.push(nuevoProducto);
            return true;
        }
        if(nuevoProducto.codigo>this.productos[this.productos.length-1].codigo){
            this.productos.push(nuevoProducto);
            console.log("ProductoCodigo Mayor al final");
            return true;
        }
        if(nuevoProducto.codigo<this.productos[0].codigo){
            console.log("condicional de menor que el primero");
            for(let j=this.productos.length;j>0;j--){
                console.log("for de condicional menor que primero");
                this.productos[j]=this.productos[j-1];
                
            }
            this.productos[0]=nuevoProducto;
            console.log(this.productos);
            return true;
        }
        else{
            for(let i=0;i<this.productos.length;i++){
                console.log("for principal");
                    if(nuevoProducto.codigo > this.productos[i].codigo && nuevoProducto.codigo <= this.productos[i+1].codigo){
                        console.log("lo que quiero");
                        let aux=(this.productos[this.productos.length-1]);
                        for(let j=Number(this.productos.length);j>=i+1;j--){
                            console.log("ciclo j numero " +j);
                            this.productos[j]=this.productos[j-1];
                        }
                        this.productos[i+1]= nuevoProducto;
                        console.log("salió al push de lo que quiero");
                        return true;
                        
                }
            }
        }
    
            
        /*let codigoProducto = nuevoProducto.codigo;
        let inicioArray = Number(0);
        let finalArray = Number(this.productos.length)-1;
        let mitadArray = Math.floor(inicioArray+finalArray)/2;
        if(codigoProducto===this.productos[mitadArray]){
            return null;
        }
        while(inicioArray<=finalArray){
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
        this.productos[mitadArray]= nuevoProducto; */
        
        /*Anterior método de agregar un producto al array de productos: 
        ;
        console.log("pepe");*/
    }
    info(){
        return codigo, nombre, cantidad, costo;
    }
    eliminar(codigo){
        let posicion = this.busquedaBinaria(codigo);
        if(posicion == null){
            return null;
        }
        let auxiliar = this.productos[posicion];
        for(let i= posicion+1;i<this.productos.length;i++){
            this.productos[i-1] = this.productos[i];
        }
        this.productos[this.productos.length-1]= auxiliar;
        this.productos.pop();
        
        /* let posicion = this.getPosicion(codigo);
        let siguientePosicion = posicion+1;
        if(posicion!=null){
            while(siguientePosicion<this.productos.length){
               // console.log("pepe");
                let auxiliar = this.productos[posicion];
                this.productos[posicion] = this.productos[siguientePosicion];
                this.productos[siguientePosicion] = auxiliar;
                posicion++;
                siguientePosicion++;
            }
            return this.productos.pop();
        }
        return null; */
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
    busquedaBinaria(codigo){
        let start = 0;
        let end = Number(this.productos.length)-1;
        let middle = Math.round((start+end/2));
        while(start<end){
            if(this.productos[middle].codigo ==codigo){
                return middle;
            }
            if(this.productos[middle].codigo<codigo){
                if(this.productos[end].codigo==codigo){
                    return end;
                }
                start = middle;
                middle = Math.ceil((start+end)/2);
                
            }
            if(this.productos[middle].codigo>codigo){
                if(this.productos[start].codigo==codigo){
                    return start;
                }
                end = middle;
                middle = Math.ceil((start+end)/2);
            }
            if(middle == start || middle == end){
                return null;
            }
        }
    }
    buscar(codigo){
        return this.productos[this.busquedaBinaria(codigo)].datos();
        /* let start = 0;
        let end = Number(this.productos.length)-1;
        let middle = Math.round((start+end/2));
        while(start<end){
            if(this.productos[middle].codigo ==codigo){
                return this.productos[middle].datos();
            }
            if(this.productos[middle].codigo<codigo){
                if(this.productos[end].codigo==codigo){
                    return this.productos[end].datos();
                }
                start = middle;
                middle = Math.ceil((start+end)/2);
                
            }
            if(this.productos[middle].codigo>codigo){
                if(this.productos[start].codigo==codigo){
                    return this.productos[start].datos();
                }
                end = middle;
                middle = Math.ceil((start+end)/2);
            }
            if(middle == start || middle == end){
                return null;
            }
        } */
       /* let lista = ""
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
        }   */
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