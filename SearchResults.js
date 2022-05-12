function toggleText() {
    var x = document.getElementById("test");
    if (x.style.display === "none") {
      //Function displays the text as grid when it is shown to fit the layout
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
  }

 //This function adds a style of 520px, checks for it in th if statment and chnages it to 680px
  function toggleSize() {
    var toggle = document.getElementById('frame');
    toggle.setAttribute('style', 'height: 520px;');
    if (toggle.style.height === '520px') { 
      toggle.style.height = '680px'
      }
  }

  //This function is the same as the last but it chnages the top style of the show more button
  function toggleButton() {
    var button = document.getElementById('textButton');
    button.setAttribute('style', 'top: 500px;')
    if (button.style.top === '500px') {
      button.style.top = '660px'
    } 
  }

//This function allows for all 3 functions to be called at the same time together
function toggles() {
  toggleText();
  toggleSize();
  toggleButton();
}
