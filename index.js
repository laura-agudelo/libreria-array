function Libro (titulo,autor,genero,idioma,precio,formato,isbn,descripcion,
        estado,ubicacion,fecha_publicacion,editorial,paginas,dimensiones,peso){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.idioma = idioma;
        this.precio = precio;
        this.formato = formato;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.fecha_publicacion = fecha_publicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
        }
        let nuevoslibros =[];
        for (let i= 1; i <=20; i++){
            let nuevolibro ={
                titulo:"libro" + i,
                autor: "autor" + i,
                genero: "genero" + i,
                idioma: "idioma" + i,
                precio: "precio" + i,
                formato: "formato" + i,
                isbn: "isbn" + i,
                descripcion: "descripcion" + i,
                estado: "estado" + i,
                ubicacion: "ubicacion" + i,
                fecha_publicacion: "fecha_publicacion" + i,
                editorial: "editorial" + i,
                paginas: "paginas" + i,
                dimensiones: "dimensiones"+ i,
                peso: "peso" + i,
            };
            nuevoslibros.push(nuevolibro);
        }
console.log(nuevoslibros);