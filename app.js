alert("Bienvenido a mi sitio");
let resultado = confirm("Desea continuar?");
let texto = document.querySelector('h2');
let textonombre = document.querySelector('h1');
let contenido = document.querySelector('.container-general');
let contenidobloqueado = document.querySelector('#accesoDenegado');
let testigo
if ( resultado == false){
texto.innerText = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio";
}else{
    texto.innerText = "Qué alegría que quieras con tu visita por este maravilloso sitio.";
    let nombre = prompt("Ingrese su nombre");
    textonombre.innerText = "Bienvenido " + nombre;
    let edad = prompt("Ingrese su edad")
        if (edad < 18 ){
            contenido.style.display="none";
            contenidobloqueado.style.display="block";           

        }else{
            let pasamtiempos = prompt ("Ingrese hobbies separados por coma");
            let hobbies = pasamtiempos.split(",");
            
            switch

            }
           

        }


