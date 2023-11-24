const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")
const sidemenu = document.getElementById("sidemenu");

const scriptURL = 'https://script.google.com/macros/s/AKfycbwFOTIay6q8v9LVMdl6PkrQm9ZVsmDgi-r-yuGS10qt14wh1BYRfn9Cvjsc3dCs1U6NbA/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.getElementById("msg")

function opentab(tabname){
    let tablinks = document.getElementsByClassName("tab-links")
    let tabcontents = document.getElementsByClassName("tab-contents")

    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

function openmenu(){
    sidemenu.style.right = "0px";
}

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})