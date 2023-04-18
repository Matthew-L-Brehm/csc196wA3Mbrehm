function getBigger(){

    var textarea = document.getElementById("textarea");
    textarea.style.fontSize = "24px";

}

function changeStyle(){

    var textarea = document.getElementById("textarea");
    var fancyButtonId = document.getElementById("fancy");
    var boringButtonId = document.getElementById("boring");

    if(fancyButtonId.checked){

        textarea.style.fontWeight = "bold";
        textarea.style.textDecoration = "underline";
        textarea.style.color = "blue";

    }
    if(boringButtonId.checked){

        textarea.style.fontWeight = "normal";
        textarea.style.textDecoration = "none";
        textarea.style.color = "black";

    }
}

function showAlert() {

    alert("Changing font...");

  }


  function mooTime() {
    var textarea = document.getElementById("textarea");
    var text = textarea.value.toUpperCase();
    var newText = "";
  
    var sentences = text.split(".");
  
    for (var i = 0; i < sentences.length - 1; i++) {

        sentences[i] = sentences[i] + "-Moo";

      //var words = sentences[i].split(" ");
     // words[words.length - 1] = words[words.length - 1] + "-Moo";
      //sentences[i] = words.join(" ");

    }
  
    moodText = sentences.join(".");
    textarea.value = moodText;
  }