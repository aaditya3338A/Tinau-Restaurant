function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}

function reserveTable() {
  window.location.href = "reservation.html";
}

function viewMenu() {
  window.location.href = "menu.html";
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const date = form.querySelector("input[type='date']").value;
      const time = form.querySelector("input[type='time']").value;
      const guests = form.querySelector("input[type='number']").value;
      if (!name || !email || !date || !time || !guests) {
        alert("Please fill in all fields before booking.");
      } else {
        alert(`Thank you, ${name}! Your table for ${guests} guests has been reserved on ${date} at ${time}.`);
        form.reset();
      }
    });
  }
});