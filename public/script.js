var names=['superman','bat man','spiderman','hal jordan','thor','thing','mr fantastic','invisible woman','human torch',
'captain america','dick greyson','wally west','kyle rayner','barry allen','silver surfer','martian manhunter','super girl'
,'daredevil','ironman'];
var ran1=Math.floor(Math.random() * 20)+1;
var ran2=Math.floor(Math.random() * 20)+1;
for(let i=ran1;i<20;i++){
    console.log(names[i]);
    var division=document.createElement("div");
    division.setAttribute("id", "Div1");
    var DOM_head = document.createElement("h1");
    var img=document.createElement('img');
    var DOM_txt = document.createElement("p");
    DOM_head.innerHTML=names[i-1];
    img.src="./images/img-"+i+".jpg";
    img.width=150;
    img.height=150;
    DOM_txt.innerHTML=Math.floor(Math.random() * 100)+1 ;
    division.appendChild(DOM_head);
    division.appendChild(img);
    division.appendChild(DOM_txt);
    document.getElementById("sub").appendChild(division);
}
for(let i=1;i<ran1;i++){
    console.log(names[i]);
    var division=document.createElement("div");
    division.setAttribute("id", "Div1");
    var DOM_head = document.createElement("h1");
    var img=document.createElement('img');
    var DOM_txt = document.createElement("p");
    DOM_head.innerHTML=names[i-1];
    img.src="./images/img-"+i+".jpg";
    img.width=150;
    img.height=150;
    DOM_txt.innerHTML=Math.floor(Math.random() * 100)+1 ;
    division.appendChild(DOM_head);
    division.appendChild(img);
    division.appendChild(DOM_txt);
    document.getElementById("sub").appendChild(division);
}


for(let i=ran2;i<20;i++){
    console.log(names[i]);
    var division=document.createElement("div");
    division.setAttribute("id", "Div1");
    var DOM_head = document.createElement("h1");
    var img=document.createElement('img');
    var DOM_txt = document.createElement("p");
    DOM_head.innerHTML=names[i-1];
    img.src="./images/img-"+i+".jpg";
    img.width=150;
    img.height=150;
    DOM_txt.innerHTML=Math.floor(Math.random() * 100)+1 ;
    division.appendChild(DOM_head);
    division.appendChild(img);
    division.appendChild(DOM_txt);
    document.getElementById("sub1").appendChild(division);
}

for(let i=1;i<ran2;i++){
    console.log(names[i]);
    var division=document.createElement("div");
    division.setAttribute("id", "Div1");
    var DOM_head = document.createElement("h1");
    var img=document.createElement('img');
    var DOM_txt = document.createElement("p");
    DOM_head.innerHTML=names[i-1];
    img.src="./images/img-"+i+".jpg";
    img.width=150;
    img.height=150;
    DOM_txt.innerHTML=Math.floor(Math.random() * 100)+1 ;
    division.appendChild(DOM_head);
    division.appendChild(img);
    division.appendChild(DOM_txt);
    document.getElementById("sub1").appendChild(division);
}





