var Datospersonales = [];
var arrayconvertido = []
var leerinformacion = function () {


    var arrayconvertido = JSON.parse(localStorage.getItem('Datospersonales'))
    Datospersonales = arrayconvertido;
    console.log(arrayconvertido)

    document.getElementById('resultados').innerHTML = ''
    for (let a = 0; a < arrayconvertido.length; a++) {


        document.getElementById('resultados').innerHTML += '<tr><td>' + arrayconvertido[a].nombre + '</td><td>' + arrayconvertido[a].apellido + '</td> <td> ' + arrayconvertido[a].direccion + '</td><td class="btn btn-danger"  onclick="eliminar(' + a + ')">quitar</td></td>'

    }
}

var guardar = function () {
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var direccion = document.getElementById('direccion').value
    Datospersonales.push({ nombre: nombre, apellido: apellido, direccion: direccion })
    localStorage.setItem('Datospersonales', JSON.stringify(Datospersonales))
    leerinformacion()

}




var eliminar = function (indice) {
    console.log(indice)
    Datospersonales.splice(indice, 1)
    localStorage.setItem('Datospersonales', JSON.stringify(Datospersonales))
    leerinformacion()
}
leerinformacion()
