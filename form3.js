// Función que valida el campo de telefono
        function validar_telefono(string) {
           
            var val = true; // variable que controla el ingreso correcto del campo
            var msg = "El telefono ingresado esta correcto.";
                

            
            if (string.length <= 6) { // valida la longitud minima 
                // estableciendo que no es valido
                val = false;
                msg = "Debe tener una longitud mayor a 6 ";
            }

         
            if (val == true && string.length > 10) { // valida la longitud maxima
                // estableciendo que no es valido
                val = false;
                msg = "Debe tener una longitud máxima de 10 caracteres";
            }


            if ((val == true && typeof string != "string")||(val == true && isNaN(string)))
            {
             
                val = false; // retorna false si no es valido
                msg = "No puede tener ningún carácter especial como: ‘@’, ‘!’,’_’,’-’,’/’";
            }

            
            

            // retorna booleano segun el criterio
            return val;
        }

		
		
		// Función que valida el campo de direccion
        function validar_direccion(string) {
       
            var val = true;
            var msg = "La dirección ingresada esta correcta..";
			
			
			
            if (!string.includes('#')) {// criterio que exige que la direccion incluya el caracter #
                // control de no valido
                val = false;
                msg = "Debe contener el carácter ‘#’ en algún lugar de la cadena";
            }
                

            // controlador de la longitud minima
            if (string.length <= 7) {
                // control de no valido
                val = false;
                msg = "Debe tener una longitud mínima de 7 caracteres";
            }
			
			// condiccion de que la direccion inicie con Carrera, Transversal, Circular, Calle
            if ((!string.startsWith('Carrera'))  && (!string.startsWith('Transversal'))  && (!string.startsWith('Circular')) && (!string.startsWith('Calle')))
			{
                // control de no valido
                val = false;
                msg = "Debe comenzar con alguna de las siguientes subcadenas: “Carrera”,“Transversal”, “Circular”, “Calle”.";
            }
			

            
            if (val == true && string.length > 30) { // Control de la longitud maxima
                // control de no valido
                val = false;
                msg = "Debe tener una longitud máxima de 30 caracteres.";
            }
        
           

            // Retorno de la funcion booleano segun el criterio.
            return val;
        }
module.exports.validar_telefono=validar_telefono;
module.exports.validar_direccion=validar_telefono;