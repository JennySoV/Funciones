var nombre;
nombre=prompt('Dime tu nombre')
alert("¡Hola! " + nombre + ", lee con atención las instrucciones para interactuar con la página.")
/*función de los días de la semana*/
function días ()
{
	var días = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
	var i;
	for(i=0;i<=6;i++)
	{
		document.write('<br>');
		document.write("día" + ": "+días[i])
	}
	document.write('<br>');
	document.write('<br>');
	document.write("Para volver a iniciar las funciones recarga la página :D");	
}
/*función de los asignaturas*/
function asignaturas ()
{
	var asignaturas = ["Derecho Informático", "Desarrollo de Videojuegos", "Diseño de Portafolio Profesional", "Promoción de Proyectos Digitales", "Taller de Investigación"]
	var i;
	for(i=0;i<=4;i++)
	{
		document.write('<br>');
		document.write("asignatura" + ": "+asignaturas[i])
	}
	document.write('<br>');
	document.write('<br>');
	document.write("Para volver a iniciar las funciones recarga la página :D");
}
/*función de las tablas de multiplicar*/
function tablas (numero)
{
	var j;
	for(j=1;j<=10;j++)
	{
		document.write('<br>');
		document.write(numero + "x" + j + "=" + numero*j);
	}
	document.write('<br>');
	document.write('<br>');
	document.write("Para volver a iniciar las funciones recarga la página :D");
}