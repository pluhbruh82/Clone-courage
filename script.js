// use variables to make your code shorter
var a;
var b;
var c;
var d;

// declare your functions
function blueBoys() {
  document.getElementById("textbox").innerHTML =
    "<p>The 501st was the battalion led by jedi general Anakin Skywalker. Officially led by Captain Rex this unit has nearly 400 men as a whole. Memorable characters consist of medic Kix,arc trooper Fives,Vaughn, Lieutenant Jesse and Sergeant Appo. After the clone wars the 501st was led by Appo and Darth Vader after captain Rex deserted and started a clone uprising against the empire. Kix on the other hand would end up being the last clone alive and participating in battles in the sequal movies. Fives would end up being killed for trying to uncover a plot to kill the jedi. Vaughn and Jesse would be killed during the invasion of mandalore at the end of the clone war.</p>";
  document.getElementById("KCC").setAttribute("src", "images/kix.jpg");
  document.getElementById("FBB").setAttribute("src", "images/fives.jpg");
  document.getElementById("HWH").setAttribute("src", "images/vaughn.jpg");
  document.getElementById("JGS").setAttribute("src", "images/jess.jpg");
  document.getElementById("AWR").setAttribute("src", "images/appo.jpg");
  document.getElementById("Reximg").setAttribute("src", "images/rex2.avif");
  document.getElementById("codyimg").setAttribute("src", "images/cody.jpeg");
  document.getElementById("wolfimg").setAttribute("src", "images/wollfe.jpg");
  document.getElementById("rexsound").play("sounds/yap1.mp4");
  document.getElementById("codysound").pause("sounds/yap2.mp4");
  document.getElementById("wolfsound").pause("sounds/yap3.mp4");
}
function codysGuys() {
  document.getElementById("textbox").innerHTML =
    "<p>The 212th attack battalion was led by Obi Wan Kenobi and Commander Cody. this battalion would commonly work with the 501st division.Troopers consist of.Crys,Boil,Waxer,Gregor and Wooly  with a bigger batch of troopers than the 501st. Cody would end up going AWOL shortky after the clone wars ended and the Empire was established. His fate is unknown while Gregor joined Rex's rebellion. Boil would go on to train stormtroopers in the empire. Wooly and Crys would most likley have been either forgotten veterans or subjected to clone experiments by the empire due to their lower ranks. Waxer would die due to friendly fire during the invasion of umbara after being decived into thinking Rex and his men were enemies in clone armour.</p>";
  document.getElementById("KCC").setAttribute("src", "images/oyg.jpg");
  document.getElementById("FBB").setAttribute("src", "images/boil.jpg");
  document.getElementById("HWH").setAttribute("src", "images/waxer.jpg");
  document.getElementById("JGS").setAttribute("src", "images/gregor.jpg");
  document.getElementById("AWR").setAttribute("src", "images/wooly.jpg");
  document.getElementById("codyimg").setAttribute("src", "images/ccdy.webp");
  document.getElementById("Reximg").setAttribute("src", "images/rex1.jpg");
  document.getElementById("wolfimg").setAttribute("src", "images/wollfe.jpg");
  document.getElementById("codysound").play("sounds/yap2.mp4");
  document.getElementById("wolfsound").pause("sounds/yap3.mp4");
  document.getElementById("rexsound").pause("sounds/yap2.mp4");
}

function greyGuys() {
  document.getElementById("textbox").innerHTML =
    "<p>The wolfpack is the most rare division to see. Led by commander Wollfe, the wolfpack wear grey to remember fallen soldiers. The battalion consists of characters like. Comet, Boost, Clone Commando (RC) Hilo and CPL Sinker and Wartho. With a small batch of regular troopers and a navy led by warthog. Wollfe would also end up leaving the Empire after a confrntation with Rex and his clone rebels. Hilo would join wollfes company after the war. However it is unknown what happened these men. it is logical to assume they joined the empire after the clone war either that or were selected to experiments and were turned into winter soldier like agents. and their fits are tough.</p> ";
  document.getElementById("AWR").setAttribute("src", "images/wart.jpg");
  document.getElementById("HWH").setAttribute("src", "images/Hilo.jpg");
  document.getElementById("KCC").setAttribute("src", "images/comet.jpg");
  document.getElementById("FBB").setAttribute("src", "images/boost.jpg");
  document.getElementById("JGS").setAttribute("src", "images/sinker.jpg");
  document.getElementById("wolfimg").setAttribute("src", "images/wol2.jpg");
  document.getElementById("Reximg").setAttribute("src", "images/rex1.jpg");
  document.getElementById("codyimg").setAttribute("src", "images/cody.jpeg");
  document.getElementById("wolfsound").play("sounds/yap3.mp4");
  document.getElementById("codysound").pause("sounds/yap2.mp4");
  document.getElementById("rexsound").pause("sounds/yap1.mp4");
}

//https://www.w3schools.com/jsref/met_audio_play.asp
function playSong() {
  document.getElementById("my_song").play();
}

function resetAll() {}
