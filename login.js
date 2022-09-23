const inputValue = document.querySelectorAll("input")
const myForm = document.querySelector(".form")
console.log(inputValue.length )


function myFormData(e){
e.preventDefault()
for(i = 0 ; i < inputValue.length ; i++){
    // console.log(inputValue[i])
    console.log(inputValue[i].value)
    inputValue[i].value = ""
}

}
myForm.addEventListener("submit", myFormData)
