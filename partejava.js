var info=function(){
	var v1=document.getElementById("papa");
	var v2=document.getElementById("hijo2");
	var v3=document.getElementById("hijo3");
	var v4=document.getElementById("hijo4");
	var v5=document.getElementById("hijo5");
	var v6=document.getElementById("hijo6");
	var v8=document.getElementById("teo");

	console.log("teoria");

	v3.className="cA";
	v8.className="teoria";

}

var resolver=function(){
	var v1=document.getElementById("papa");
	var v2=document.getElementById("hijo2");
	var v3=document.getElementById("hijo3");
	var v4=document.getElementById("hijo4");
	var v5=document.getElementById("hijo5");
	var v6=document.getElementById("hijo6");
	var v8=document.getElementById("hijo7");


	console.log("operacion");

	v8.className="cB";
	v3.className="cC";

}

var operacion=function(){
	var n1=document.getElementById("n1").value;
	var n2=document.getElementById("n2").value;
	var n3=document.getElementById("n3").value;
	var n4=document.getElementById("boton");

  suma=parseInt(n1)+parseInt(n2)-parseInt(n3);
console.log(suma);

alert("Resultado: "+suma);
}