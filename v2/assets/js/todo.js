var title=document.querySelector('h1')
var buttons=document.querySelectorAll('button')

buttons.forEach(function(i){
  i.addEventListener('mouseenter', function(e) {
    // console.log(i,e);
    this.style.borderColor="white"
  });
  i.addEventListener('mouseleave', function(e) {
    // console.log(i,e);
    this.style.borderColor="black"
  });
}
)
