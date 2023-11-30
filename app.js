let equipoCoder = [
    {
        nombre: "melina",
        apellido: "garcia",
        nacionalidad: "argentina",
        signo:"leo",
        puntaje:10
    },
    {
        nombre: "felipe",
        apellido: "janeda",
        nacionalidad: "argentino",
        signo:"sagitario",
        puntaje:10
    },
    {
        nombre: "eugenia",
        apellido: "mirenda",
        nacionalidad: "colombiana",
        signo:"virgo",
        puntaje:8
    },
    {
        nombre: "jose",
        apellido:"toledo",
        nacionalidad: "argentino",
        signo:"escorpio",
        puntaje:9
    }
    ];
let personaEquipoCoder = prompt("bienvedido a la comision 49795 de java script los tutores asignados son\n"+"melina\n"+"felipe\n"+"eugenia\n"+"jose\n"  + "ingrese el nombre de su tutor").toLowerCase();

let posicion  = equipoCoder.findIndex(index => index.nombre==(personaEquipoCoder));

//alert(`la persona se encuentra en el indice ${posicion}\n`);
for( let propiedad in equipoCoder){
console.log(propiedad, equipoCoder[propiedad])
};

let opcion= prompt(`quieres saber de que signo es ${equipoCoder[posicion].nombre} ${equipoCoder[posicion].apellido} s/n`).toLowerCase();


function cierre() {
    alert(`Su signo es ${equipoCoder[posicion].signo} que tengas buenas tardes`);}

while(opcion !== "s"){
    alert(`te lo dire igual ${equipoCoder[posicion].signo}`);};

    cierre();





