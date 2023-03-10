const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')


const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


function sendMail() {
      var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phonenumber: document.getElementById("phonenumber").value,
            text: document.getElementById("text").value,
      };


const serviceID= "service_5yh8hqe";
const templateID="template_q8qdjto";

emailjs
.send(serviceID, templateID, params)
.then((res) => {
      document.getElementById("name").value ="";
      document.getElementById("email").value ="";
      document.getElementById("phonenumber").value ="";
      document.getElementById("text").value ="";
      console.log(res);
      alert("Your message sent successfully");
})
.catch((err) => console.log(err));
}