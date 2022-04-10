const firstPar = document.querySelector(".page_text");
const formPhone = document.querySelector(".form_phone");
const formSubmit = document.querySelector(".form_submit");
let text = firstPar.textContent;
let rgxp = /[0-9][0-9][0-9]-?[0-9][0-9][0-9]-?[0-9][0-9]-?[0-9][0-9]/gi;
let testStr = "985-468-7-651";

formPhone.addEventListener("click", function(e){
if(e.target.className === "form_phone" && formPhone.value === formPhone.ariaLabel){
  formPhone.value = "";
}
})

formSubmit.addEventListener("submit", function(e){
if(rgxp.test(formPhone.value)){
console.log("Happynes")}else(
  console.log("Error")
)
})
console.log(rgxp.test(testStr))
