$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      // eslint-disable-next-line prettier/prettier
      doctorId: $("#doctor-id").val().trim()
    };
    console.log("Login userData ==> ", userData);

    if (!userData.email || !userData.password) {
      return;
    
    }
    // eslint-disable-next-line prettier/prettier
    var doctorId = $("#doctor-id").val().trim();
    var url = "/doctor?id=" + doctorId;
    // var url = "/doctor?id=";
    console.log("sign-in-btn url ==> ", url);
    // window.location = url;

    // If we have an email and password we run the loginUser function and clear the form
   // loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
        email: email,
        password: password
      })
      .then(function () {
        // eslint-disable-next-line prettier/prettier
        var doctorId = $("#doctor-id").val().trim();
        var url = "/doctor?id=" + doctorId;
        // var url = "/doctor?id=";
        console.log("sign-in-btn url ==> ", url);
        window.location = url;

        // window.location.replace("/doctor?id=" + doctorId);
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});