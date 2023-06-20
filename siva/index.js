function result(){

var students= {

DAVID : {
math: "95";
physics: "80";
literature: "67";
},

CHARLIE : {
math: "95";
physics: "80";
literature: "67";
},

SHAWN : {
math: "95";
physics: "80";
literature: "67";
}
}

var studentname=document.getElementById('studentname').value;
var input=studentname.toUpperCase();
var definition=students[input];
var output=document.getElementById("output");

if(definition==undefined){
output.innerHTML='<hr> There is no information about this student. <hr>';
}else{
output.innerHTML='<hr> Math Score is ${definition.math}. <hr> Physics score is ${definition.physics}. <hr>Literature score is ${definition.literature}. <hr>';
};

};
                          