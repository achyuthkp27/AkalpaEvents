function sendMail() {
  document.querySelector(".sent-message").classList.remove("d-block");
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    contact_num: document.getElementById("contactNumber").value,
    message: document.getElementById("message").value,
  };
  const serviceID = 'service_atcd7kr';
   const templateID = 'template_pixk9a8';
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("message").value = ""),
        (document.getElementById("contactNumber").value = ""),
        (document.getElementById("companyName").value = ""),
        (document.getElementById("designation").value = ""),
        document.querySelector(".sent-message").classList.add("d-block"),
        console.log(res);
    })
    .catch((err) => console.log(err));
}
