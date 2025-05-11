document.getElementById("Tripple-V-Recruitment").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("message").style.display = "block";

  // Collect the form data
  const fullName = document.getElementById("full-name").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const whyUjoin = document.getElementById("whyUjoin").value;
  const skills = document.getElementById("skills").value;

  const attended = document.querySelector('input[name="attended"]:checked').value;

  const postCheckboxes = document.querySelectorAll('input[name="post"]:checked');
  const selectedPosts = Array.from(postCheckboxes).map(cb => cb.value);

  const unique = document.getElementById("unique").value;
  const timeAv = document.getElementById("week-time").value;

  const availability = document.querySelector('input[name="availability"]:checked').value;
  const profile = document.getElementById("profile").value;
  const extra = document.getElementById("extra").value;

  // Create an object with the form data
  const formData = {
    fullName: fullName,
    age: age,
    phone: phone,
    email: email,
    city: city,
    whyUjoin: whyUjoin,
    skills: skills,
    attended: attended,
    post: selectedPosts.join(", "),  // Convert the array of posts to a comma-separated string
    unique: unique,
    timeAv: timeAv,
    availability: availability,
    profile: profile,
    extra: extra
  };

  // Send form data to Google Apps Script using fetch
  fetch('https://script.google.com/macros/s/AKfycbyXAvv6lKv-6bx1ySDrsA5h7Rgy-7xraCZRWVCdXVg7Om647UXz_5Fn13mLwXO1PeBD/exec', {
    method: 'POST',
    body: new URLSearchParams(formData),  // Convert the formData object into a query string
  })
  .then(response => response.text())
  .then(data => {
    console.log('Success:', data);
    // Optionally, display a confirmation message on success (if you want)
    alert('Form Submitted Successfully!');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Form submission failed!');
  });
});
