const customers = [{name: 'admin', email: 'admin@gmail.com', password: 'Admin@123'}];
  function login() {
    var errorCount = 0;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    document.getElementById('emailLoginError').style.display = "none";
    document.getElementById('passwordLoginError').style.display = "none";
    document.getElementById('invalidLoginError').style.display = "none";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email || !emailRegex.test(email))
    {
      errorCount++;
      console.log("error email");
      document.getElementById('emailLoginError').style.display = "block";
    }
    if(!password)
    {
      errorCount++;
      console.log("error password");
      document.getElementById('passwordLoginError').style.display = "block";
 
    }
    if(errorCount == 0)
    {
      console.log("checking details");
        const user = customers.find(customer => customer.email === email && customer.password === password);

          if (user) {
           
            window.location.href = 'index.html';
          } else {
            console.log("details not found");
            document.getElementById('invalidLoginError').style.display = "block";
            document.getElementById('email').value='';
            document.getElementById('password').value='';

          }
    }
    
  }

  function signup() {

    document.getElementById('nameSignupError').style.display = "none";
    document.getElementById('emailSignupError').style.display = "none";
    document.getElementById('passwordSignupError').style.display = "none";
    var errorCount = 0;
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
    if(!name || !nameRegex.test(name))
    {
      errorCount++;
      console.log("error name");
      document.getElementById('nameSignupError').style.display = "block";
    }
    if(!email || !emailRegex.test(email))
    {
      errorCount++;
      console.log("error email");
      document.getElementById('emailSignupError').style.display = "block";
    }
    if(!password || !passwordRegex.test(password))
    {
      errorCount++;
      console.log("error password");
      document.getElementById('passwordSignupError').style.display = "block";
 
    }
    if (errorCount == 0) {
      customers.push({ name, email, password });
      console.log('Registration successful');
      console.log(customers);
      back();
      $('#signupModal').modal('hide');
    } 
  }

  function back(){
    document.getElementById('signupName').value='';
    document.getElementById('signupEmail').value='';
    document.getElementById('signupPassword').value='';
    document.getElementById('passwordSignupError').style.display = "none";
    document.getElementById('emailSignupError').style.display = "none";
    document.getElementById('nameSignupError').style.display = "none";

    document.getElementById('email').value='';
    document.getElementById('password').value='';
    document.getElementById('emailLoginError').style.display = "none";
    document.getElementById('passwordLoginError').style.display = "none";
    document.getElementById('invalidLoginError').style.display = "none";
  }
  document.getElementById('eyeBtn').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
  });