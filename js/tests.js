var expect = chai.expect;

//Tests reservarHorario(horario)
//Estos tests tienen en comun que se prueba el array

describe('Tests del array contenido en reservarHorario(horario)', function(){
    it('Al reservar un horario, el horario es eliminado del arreglo', function(){
        let horariosSinReservaciones = Restaurant.horarios;
        listado.reservarUnHorario(13);
        //Restaurant.horarios();
        expect(Restaurant.horarios).to.equal(horariosSinReservaciones-1);

    });
    /*it('Al intentar reservar un horario que no el restaurant no posee, el arreglo se mantiene igual', function(){

    });
    it('Al intentar reservar un horario sin pasarle un parametro a la funcion, el arreglo se mantiene igual', function(){

    });*/
})

