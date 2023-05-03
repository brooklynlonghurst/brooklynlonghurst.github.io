// import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';

// const a1 = annotate(document.getElementById('developer'), { type: 'highlight', color: 'rgb(244, 214, 244)', iterations: 1 });
// const a2 = annotate(document.getElementById('react'), { type: 'highlight', color: 'rgb(244, 214, 244)', iterations: 1 });
// const a3 = annotate(document.getElementById('javascript'), { type: 'highlight', color: 'lightyellow', iterations: 1 });
// const a4 = annotate(document.getElementById('css'), { type: 'highlight', color: 'lightblue', iterations: 1 });


// const ag = annotationGroup([a1, a2, a3, a4]);
// ag.show();




let modal = document.getElementById("gmail-popup")
let icon = document.getElementById("contact-modal")
let span = document.getElementsByClassName("close")[0]

icon.onclick = function() {
    // const signUpMessage = `<h3>Thanks for signing up, ${signUpName.value}!</h3>`
    // document.getElementById('signUpModal').innerHTML = signUpMessage
   
    modal.style.display = "block";
}
  
span.onclick = function() {
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
}