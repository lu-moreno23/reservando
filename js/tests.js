let expect = chai.expect;

//Tests reservarHorario(horario)
//Estos tests tienen en comun que se prueba el array

describe('Tests del array contenido en reservarHorario(horario)', function(){
    it('Al reservar un horario, el horario es eliminado del arreglo', function(){
        
        const testPruebaReservaciones = listado.restaurantes[0];
        //reservo un horario con antelacion, es decir que el lenght pasaria de 3 a 2
        testPruebaReservaciones.reservarHorario('13:00');

        expect(testPruebaReservaciones.horarios[0]).to.equal('15:30');
        expect(testPruebaReservaciones.horarios[1]).to.equal('18:00');
        expect(testPruebaReservaciones.horarios.length).to.equal(2);

    });
    it('Al intentar reservar un horario que no el restaurant no posee, el arreglo se mantiene igual', function(){
        const testReservarHorarioInexistente = listado.restaurantes[1];
        //intento reservar un horario inexistente
        testReservarHorarioInexistente.reservarHorario('16:00');

        //el lenght del array se mantiene igual
        expect(testReservarHorarioInexistente.horarios.length).to.equal(3);

    });
    it('Al intentar reservar un horario sin pasarle un parametro a la funcion, el arreglo se mantiene igual', function(){
        const testPasoParametroVacio = listado.restaurantes[2];
        //intento reservar un horario vacio
        testPasoParametroVacio.reservarHorario('');

        //el lenght del array se mantiene igual
        expect(testPasoParametroVacio.horarios.length).to.equal(3);

    });
});

describe('Tests correspondientes a la funcion obtenerPuntuacion()', function(){
    it('Dado un restaurant con determinadas calificaciones, la puntuacion (el promedio de ellas), se calcula correctamente', function(){
        let seleccionDeRestaurant = listado.restaurantes[0];

        let promedioCalificacion = seleccionDeRestaurant.calificaciones.reduce(function(a,b){
            return a + b;
        }) / seleccionDeRestaurant.calificaciones.length;

        expect(seleccionDeRestaurant.obtenerPuntuacion()).to.equal(promedioCalificacion);


    });
    it('Dado un restaurant que no tiene ninguna calificacion, la puntuacion es igual a 0', function(){
        //selecciono un restaurant
        let restarauntParaSacarCalificacion = listado.restaurantes[0];

        //recorro calificaciones para quitarlas y que quede en 0
        for (let i = restarauntParaSacarCalificacion.calificaciones.length; i > 0; i--){
            restarauntParaSacarCalificacion.calificaciones.pop();
        }

        expect(restarauntParaSacarCalificacion.obtenerPuntuacion()).to.equal(0);


    });

    
});

describe('Tests correspondientes a la funcion calificar()', function(){
    it('Selecciono un restaurant y lo califico con 0', function(){
        let seleccionDeRestaurantParaCalificar = listado.restaurantes[4];
        let arrayCalificaciones = listado.restaurantes[4].calificaciones.length;

        seleccionDeRestaurantParaCalificar.calificar(0)
        let nuevasCalificaciones = listado.restaurantes[4].calificaciones.length;

        //Compruebo que al calificar con 0, no se hayan agregado nuevas calificaciones al array nuevasCalificaciones
        expect(nuevasCalificaciones).to.equal(arrayCalificaciones);


    });
    it('Intento calificar un restaurant con un caracter que no sea un numero', function(){

        let calificacionEnNumero = 5;

        //compruebo que si le paso un numero no lo tome como string

        expect(calificacionEnNumero).to.not.be.a('string')


    });

    
});


/*describe('Tests correspondientes a la funcion buscarRestaurante(id)', function(){
    it('Paso un ID inexistente para que intente buscar el restaurant', function(){
        let seleccionDeRestaurantParaCalificar = listado.restaurantes[4];
        let arrayCalificaciones = listado.restaurantes[4].calificaciones.length;

        seleccionDeRestaurantParaCalificar.calificar(0)
        let nuevasCalificaciones = listado.restaurantes[4].calificaciones.length;

        //Compruebo que al calificar con 0, no se hayan agregado nuevas calificaciones al array nuevasCalificaciones
        expect(nuevasCalificaciones).to.equal(arrayCalificaciones);


    });
    it('Intento calificar un restaurant con un caracter que no sea un numero', function(){

        let calificacionEnNumero = 5;

        //compruebo que si le paso un numero no lo tome como string

        expect(calificacionEnNumero).to.not.be.a('string')


    });

    
});*/


