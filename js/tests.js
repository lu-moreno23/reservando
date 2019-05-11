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

