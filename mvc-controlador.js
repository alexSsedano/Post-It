// JavaScript Document
import  {Note} from './mvc-modelo.js';
var arrNotes =[] ;




//------------------vista----------------------
function createContainer(node){
	var c = document.createElement("DIV");
	c.id = "container";
	document.body.appendChild(c);
}
createContainer();

//----------------controlador------------------

function addNote(e){
	if(e.target.getAttribute("id") == "body" || e.target.getAttribute("class") == "container" ){
		let tit =prompt("Write the title of your note");
		let tex =prompt("Write the tcontent of your note");
		arrNotes.push(new Note(tex,tit,arrNotes,"container"));
		
	}
} 
function deleteNote(e){
	
	if( e.target.getAttribute("class") == "content"){
		
		let num = e.target.parentElement.getAttribute("id");
		let notes = document.getElementsByClassName("note");
		document.getElementById(num).remove();
		arrNotes[num]=[];
		arrNotes[num][0]=false;
	}
	if( e.target.getAttribute("class") == "note"){
		let num = e.target.getAttribute("id");
		let notes = document.getElementsByClassName("note");
		document.getElementById(num).remove();
		arrNotes[num]=[];
		arrNotes[num][0]=false;
	
	}

}



document.getElementById("body").onclick=addNote;
document.getElementById("body").onmouseup=deleteNote;