// JavaScript Document
import  {Note} from './mvc-modelo.js';
var arrNotes =[] ;




//------------------vista----------------------
function createContainer(node){
	var c = document.createElement("DIV");
	c.id = "container";
	document.body.appendChild(c);
}

function showNote(titule,content,node){
	var x = document.createElement("DIV");
	x.id = "note"
	var t = document.createElement("H1");
    var titule = document.createTextNode(titule);
	var content = document.createTextNode(content);
    x.setAttribute("style", "background-color: yellow;");
    t.appendChild(titule);
	x.appendChild(t);
	x.appendChild(content);
    document.getElementById(node).appendChild(x);
}

function addNote(){
	let tit =prompt("Write the title of your note");
	let tex =prompt("Write the tcontent of your note");
	arrNotes.push(new Note(tex,tit));
	showNote(arrNotes[arrNotes.length-1].text, arrNotes[arrNotes.length-1].title, "container");
	
}

function addButton(){
	var btn = document.createElement("BUTTON");        
	var t = document.createTextNode("add note"); 
	btn.id = "button"
	btn.appendChild(t);                                
	document.body.appendChild(btn); 
}

createContainer("body");
addButton();
document.getElementById("body").onclick=addNote;