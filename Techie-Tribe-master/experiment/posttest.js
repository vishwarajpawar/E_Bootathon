function check2(){

    var q1=document.quiztwo.q1.value;
    var q3=document.quiztwo.q3.value;
    var correct2=0;
    
    
    if (q1=="a" ){
        correct2++;
    }
    if (q3=="a"){
        correct2++;
    }
    
    
    var messages=["Great job!","That's just okay!","You really need to do better"];
    var pictures=["https://media1.giphy.com/media/11sBLVxNs7v6WA/giphy.gif","https://media1.giphy.com/media/Nm9hS20D4swVO/200w.gif","https://media.giphy.com/media/xUA7aRaGvA53VSlxUk/giphy.gif"];
    
    var range;
    
    if(correct2<1){
        range=2;
    }
    
    if(correct2>0 && correct2<2){
        range=1;
    }
    
    if(correct2==2){
        range=0;
    }
    
    
    document.getElementById("after_submit2").style.visibility="visible";
    
    
    document.getElementById("messages2").innerHTML=messages[range];
    document.getElementById("number_correct2").innerHTML="you got "+correct2+" correct.";
    document.getElementById("pictures").src=pictures[range];
    
    