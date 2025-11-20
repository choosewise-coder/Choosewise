// Set current year in footer
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  // Optional form confirmation message
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(){
      setTimeout(() => {
        alert("Thank you! Your message has been sent. We will respond soon.");
      }, 300);
    });
  });
});
