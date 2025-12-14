<<<<<<< HEAD




var submit = document.getElementById("submit")

var name = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")

var nameRegex = /^[a-z A-Z ]+$/
var emailRegex = /^[a-z A-Z]+@gmail\.com/
var passwordRegex = /^[a-z A-Z 0-9]{6,}$/

 submit.addEventListener("click", function (event) {
     event.preventDefault()
      
    

     

    var validate = true

     if (nameRegex.test(name.value) == false) {
          document.querySelector(".nameerror").style.display = "inline"
          validate = false
     }
     else {
          document.querySelector(".nameerror").style.display = "none"

     }

     if (emailRegex.test(email.value) == false) {
          document.querySelector(".emailerror").style.display = "inline"
          validate = false
     }
     else {
          document.querySelector(".emailerror").style.display = "none"

     }

     if (passwordRegex.test(password.value) == false) {
          document.querySelector(".passworderror").style.display = "inline"
          validate = false
     }
     else {
          document.querySelector(".passworderror").style.display = "none"

     }
 })

    






=======




var submit = document.getElementById("submit")

var name = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")

var nameRegex = /^[a-z A-Z ]+$/
var emailRegex = /^[a-z A-Z]+@gmail\.com/
var passwordRegex = /^[a-z A-Z 0-9]{6,}$/

 submit.addEventListener("click", function (event) {
     event.preventDefault()
      
    

     

    var validate = true

     if (nameRegex.test(name.value) == false) {
          document.querySelector(".nameerror").style.display = "inline"
          validate = false
     }
     else {
          document.querySelector(".nameerror").style.display = "none"

     }

     if (emailRegex.test(email.value) == false) {
          document.querySelector(".emailerror").style.display = "inline"
          validate = false
     }
     else {
          document.querySelector(".emailerror").style.display = "none"

     }

     if (passwordRegex.test(password.value) == false) {
          document.querySelector(".passworderror").style.display = "inline"
          validate = false
     }
     else {
          document.querySelector(".passworderror").style.display = "none"

     }
 })

    






>>>>>>> 4fd6a8733ace5b24d43226a7ebb12a3583210b76
