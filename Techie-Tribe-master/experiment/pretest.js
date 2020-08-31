function check(){
  
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var correct=0;
    
    
      if (question1=="b" ){
            correct++;
      }
      if (question2=="c"){
           correct++;
      }  
      if (question3=="b"){
          correct++;
      }
        
      if (question4=="a"){
          correct++;
      }  
      if (question5=="c"){
          correct++;
      }
    
    
    var messages=["Great job!","That's just okay!","You really need to do better"];
    var pictures=["https://media1.giphy.com/media/11sBLVxNs7v6WA/giphy.gif","https://media1.giphy.com/media/Nm9hS20D4swVO/200w.gif","https://media.giphy.com/media/xUA7aRaGvA53VSlxUk/giphy.gif"];
    
    var range;
    
      if(correct<3){
          range=2;
      }
      
      if(correct>2 && correct<4){
          range=1;
      }
      
      if(correct>4){
          range=0;
      }
    
    
    document.getElementById("after_submit").style.visibility="visible";
    
    
    document.getElementById("messages").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="you got "+correct+" correct.";
    document.getElementById("pictures").src=pictures[range];
    
    
    }