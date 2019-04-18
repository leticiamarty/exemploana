// // pra manipular um elemente tem que trazer para o javascript
let emocionalAna = document.querySelector("p");
let titulo = document.querySelector("h1");
let foto = document.querySelector("img");
let botao = document.querySelector("button");
let corpo = document.querySelector("body");
let botaoficafeliz= document.querySelector(".chocolate");
let botaoficatriste=document.querySelector(".esquecer"); 


function deixartriste(){
   corpo.style.backgroundColor =("gray");
   emocionalAna.innerHTML= "a ana esta triste";
   foto.src="https://i2.wp.com/cdn-images-1.medium.com/max/1600/1*NXvrn_UKB5Qzaq0LDNujWw.jpeg";
   
}
// trocar o humor da ana 
function darChocolate(){
   corpo.style.backgroundColor="yellow";
   emocionalAna.innerHTML="a ana esta feliz!!!";
   foto.src ="https://gorilaclube.vteximg.com.br/arquivos/ids/186379-500-500/Mouse_Pad_Emoji_Feliz_Emoticon_339.jpg?v=636189688507330000";
}



botaoficafeliz.onclick=darChocolate;
botaoficatriste.onclick=deixartriste;
