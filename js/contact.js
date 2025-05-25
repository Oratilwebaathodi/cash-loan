$("#contactform").validate({
  rules: {
    fullName: {
      required: true,
      minlength: 4,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    fullName: {
      required: "Please enter your full name",
      minlength: "Please enter your full name",
    },
    email: {
      required: "Please provide your email address",
      email: "Please enter a valid email address ",
    },
  },
});
