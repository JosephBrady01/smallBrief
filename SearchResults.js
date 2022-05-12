function toggleText() {
    var x = document.getElementById("test");
    if (x.style.display === "none") {
      //Function displays the text as grid when it is shown to fit the layout
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
  }


  function toggleSize() {
    var toggle = document.getElementById('frame');
    toggle.setAttribute('style', 'height: 520px;');
    if (toggle.style.height === '520px') { 
      toggle.style.height = '680px'
      }
  }

  function toggleButton() {
    var button = document.getElementById('textButton');
    button.setAttribute('style', 'top: 500px;')
    if (button.style.top === '500px') {
      button.style.top = '660px'
    } 
  }


function toggles() {
  toggleText();
  toggleSize();
  toggleButton();
}
