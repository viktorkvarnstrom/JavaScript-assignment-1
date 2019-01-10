$().ready(function () {
    $("#registerForm").validate({
      rules: {
        errorClass: 'errors',
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        address: {
          required: true,
          minlength: 5
        },
        tellus: {
          required: true,
          minlength: 5
        },
        radios: {
          required: true
        },
        inputcountry: {
          required: true
        },
        inputcity: {
          required: true,
          minlength: 2
        },
        inputzip: {
          required: true,
          minlength: 5,
          maxlength: 5,
          digits: true
        },
        agree: "required"
      },
      messages: {
        email: {
          required: "Please enter a email",
          minlenght: "Invalid email"
        },
        password: {
          required: "Please enter a password ",
          minlenght: "Your password must consist at least 5 characters"
        },
        address: {
          required: "Please enter a address",
          minlenght: "Your address must consist at least 5 characters",
        },
        tellus: {
          required: "Tell us something about your self",
          minlength: "Keep on going"
        },
        inputzip: {
          required: "Input your zipcode",
          minlength: "Your zip must contain 5 digits"
        },
        agree: {
            required: "You must be over 18",
          }
      }
    });
  });