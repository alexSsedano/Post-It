// JavaScript Document
export class Note{
	constructor(title, text, arr,node){
		this.title = title;
		this.text = text;
		this.arr = arr;
		this.nod= node;
		
		this.x = document.createElement("DIV");
		this.x.id = this.arr.length;
		this.x.className = "note";
		this.t = document.createElement("H1");
		this.t.setAttribute("class","content");
		this.c = document.createElement("p");
		this.c.setAttribute("class","content");
		this.titu = document.createTextNode(this.title);
		this.content = document.createTextNode(this.text);
		this.x.setAttribute("style", "background-color: yellow;");
		this.t.appendChild(this.titu);
		this.x.appendChild(this.t);
		this.c.appendChild(this.content);
		this.x.appendChild(this.c);
		document.getElementById(this.nod).appendChild(this.x);
	}
}