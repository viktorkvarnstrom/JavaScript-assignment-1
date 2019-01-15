$().ready(function () {



  $.validator.setDefaults({
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }

  });

  

  var maxLength = 200;
  $('textarea').keyup(function () {
    var length = $(this).val().length;
    var length = maxLength - length;
    $('#characters').text(length);
  });



  $("#newsletterForm").validate({
    rules: {
      errorClass: 'errors',
      email: {
        required: true,
        email: true,
        minlength: 5
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
        minlength: 5,
        maxlength: 200
      },
      radio: {
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
        minlength: "Your email must consist at least 5 characters"
      },
      password: {
        required: "Please enter a password ",
        minlenght: "Your password must consist at least 5 characters"
      },
      address: {
        required: "Please enter your home address",
        minlength: "Please enter a valid address"
      },
      tellus: {
        required: "Tell us something about your self",
        minlength: "Keep on going",
        maxlength: "You can max write 200 characters"
      },
      inputzip: {
        required: "Input your zipcode",
        minlength: "Your zip must contain 5 digits"
      },
      agree: {
        required: "You must accept the items",
      }
    }
  });







});
