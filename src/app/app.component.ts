import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a=3;
  b=10;
  listo= false;
  //en modo TS se les agrega el tipo a la variable
 nombre:string='';
 // en modo js es asi: funcionan ambos modos
 nombre1='';
 // Vamos a crear un arreglo llamado lugares , con la palabra any agrega 
 // acepta cualquier tipo de objeto

 capital:string;

lugares:any= [
{active:false, nombre:'Floristeria la gardenia1'},
{active:true, nombre:"Veterinaria huellas de amor"},
{active:true,nombre:'Restaurante Combo YA' },
{active:false, nombre:'Floristeria la gardenia2'},
{active:true, nombre:"Veterinaria huellas de amor"}
 ]  ;


deudas:any=[

  {valor:2,nombre:'Abuelita'},
  {valor:30, nombre:'Tio'},
  {valor:15,nombre:'Mama'},
  {valor:10,nombre:'Hermanito'}
];

/// asi se declara un array de objetos json-
//public alumnos:Array <alumno>=[
//{id:1 , nombre:"Ivonne Danniella", apellidos:"Sanchez Lopez" , ciudad:"Ibague"},
//{id:2 , nombre:"María Fernanda", apellidos:"Lopez Sanchez" , ciudad:"Valencia"},
//{id:3 , nombre:"Sandra Liliana", apellidos:"Lopez Romero" , ciudad:"Medellín"}


////];


 lat:number= 4.504874;
 lng:number=-75.287031;
 




//setTimeout(() =>{
//this.listo=true;
//},3000)


//hacerAlgo(){
  //alert('listo');
  //console.log("todo bien");
///}
///////////////////////////////EJEMPLO NGSTYLE///////////////////////////////////////////
puntuacion:number;  // declaramos la propiedad puntuacion como tipo numero
setColor(){
return this.puntuacion>= 5 ? 'green':'red';

}

setResultado(){
return this.capital === "Madrid" ? true:false;/// pregunta si la variable capital es igual  estrictamente a Madrid
}/// si lo es devuelve un true si no un false


cursos:string[];
constructor (){
  this.cursos=['Angular','HTML','CSS'];
}


}
