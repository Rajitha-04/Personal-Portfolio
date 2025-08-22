// script.js
// Simple form handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

  const text = "Hi! I am Rajitha..."; // Your name
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typed-name").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 150);
    }
  }
  typeWriter();

// Counter animations
// Counter Animation Script
  const counters=document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.innerText='0';
    const updateCounter=()=>{
      const target=+counter.getAttribute('data-target');
      const count=+counter.innerText;
      const increment=target/100;
      if (count<target){
        counter.innerText=Math.ceil(count+increment);
	setTimeout(updateCounter,25);
      }else{
	counter.innerText=target+'+';
      }
    };
    updateCounter();
  });

