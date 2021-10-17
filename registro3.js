registro = [{
    nombre: "",
    usuario: "",
    password: "",
    telefono: "",
    direccion: "",
    correo: ""
}];

function buscarDominio()
{
    arregloDominios = [{
    nombre: "",
    usuario: "",
    password: "",
    telefono: "",
    direccion: "",
    correo: ""
	}];
	
    var counter = 0;
    for(x in registro)
	{
        if(x.correo.includes("@upb.edu.co")){
            arregloDominios.push(registro[counter]);
        }
		counter++;
    }
    return arregloDominios;
}

function retornarCuenta(args)
{
    var counter = 0;
    var ocurrencias = 0;
    for(objeto in args)
	{
        var nomEnco = false;
        var telEnco = false;
        var elemento = args[counter];
        for(prop in elemento)
		{
            if(prop == "nombre"){
                if(elemento[prop].includes("a")){
                    nomEnco = true;
                    console.log("El nombre tiene a");
                }
                else{
                    console.log("No hay nombres con a")
                }
            }else if(prop == "telefono"){
                if(elemento[prop].endsWith('4') || elemento[prop].endsWith('0')){
                    telEnco = true;
                }
                else{
                    console.log("No hay telefono con 4 o 0")
                }
            }
        }
        if(nomEnco && telEnco){
            ocurrencias++;
        }
        counter++;
    }
    return ocurrencias;
}

module.exports.registro = registro;
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;