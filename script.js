// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

//
const inputName=document.querySelector("#name-input")
const inputJob=document.querySelector("#job-input")
const inputEmail=document.querySelector("#email-input")
const inputBio=document.querySelector("#bio-input")

const cardName=document.querySelector("#card-name")
const cardJob=document.querySelector("#card-job")
const cardEmail=document.querySelector("#card-email")
const cardBio=document.querySelector("#card-bio")

inputName.addEventListener("input", function(){
    cardName.textContent=inputName.value.trim()===""?"Your name":inputName.value.trim() })
inputJob.addEventListener("input",function(){
    cardJob.textContent=inputJob.value.trim()===""?"Your job title":inputJob.value.trim()} )
inputEmail.addEventListener("input",function(){
    cardEmail.textContent=inputEmail.value.trim()===""?"your@email.com":inputEmail.value.trim()})
inputBio.addEventListener("input",function(){
    cardBio.textContent=inputBio.value.trim()===""?"Your bio will appear here.":inputBio.value.trim()} )

const avatar=document.querySelector("#avatar")

inputName.addEventListener("input", function(){
    avatar.textContent = inputName.value.trim() === "" ? "?" : inputName.value.trim()[0].toUpperCase();
})


const leftCharacters=document.querySelector("#bio-left")
const counterP=document.querySelector(".counter")
inputBio.addEventListener("input", function(){
    leftCharacters.textContent=`${80-inputBio.value.length}`
    if(inputBio.value.length>=70){
counterP.classList.add("warning")
    }
    else{counterP.classList.remove("warning")}
})
const card=document.querySelector("#card")
const colorInput=document.querySelector("#color-select")

colorInput.addEventListener("change", function(){
card.style.border=`4px solid ${colorInput.value}`
avatar.style.background=colorInput.value

})

const modeBtn=document.querySelector("#theme-btn")
const body=document.getElementsByTagName("body")[0]
modeBtn.addEventListener("click", function(){
body.classList.toggle("dark")
   if (body.classList.contains("dark")) {
        modeBtn.textContent = "Light mode";
    } else {
        modeBtn.textContent = "Dark mode";
    }
})

const resetBtn=document.querySelector("#reset-btn")
const form=document.querySelector("#card-form")
resetBtn.addEventListener("click", function(){
form.reset()
cardName.textContent="Your name"
cardJob.textContent="Your job title"
cardEmail.textContent="your@email.com"
cardBio.textContent="Your bio will appear here."
 card.style.border = "4px solid #4f46e5";
avatar.style.backgroundColor = "#4f46e5";
avatar.textContent="?"
leftCharacters.textContent=80
counterP.classList.remove("warning")


})





