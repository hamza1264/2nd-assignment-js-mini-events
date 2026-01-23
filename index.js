
//  ( 1st assignment counter ) start

let count = 0;

function increment() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrement() {
  count--;
  document.getElementById("count").innerText = count;
}

function reset() {
  count = 0;
  document.getElementById("count").innerText = count;
}

// ( 1st assignment counter ) end 

// ( 2nd assignment log-in-form ) start

function showpassword() {
  let password = document.getElementById("password")
  if (password.type === "password") {
    password.type = "text"
  } else {
    password.type = "password"
  }
}

function loginform() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (
    name === "hamza" &&
    email === "hamza@gmail.com" &&
    password === "1234"
  ) {
    window.open("https://github.com/hamza1264", "_blank");
    // alert("Login Successful");     
  } else {
    alert("Invalid name, email, or password");
  }
}

// ( 2nd assignment log-in-form ) end

// ( 3rd assignment number chack ) start

function numberchack() {
  let numberinput = document.getElementById("number-input").value;
  let output = document.getElementById("number-output");

  if (numberinput === "") {
    output.innerText = "Please enter a valid number";
    return;
  } 
  switch (numberinput % 2) {
    case 0:
      output.innerText = numberinput + " is Even Number";
      break;
    case 1:
      output.innerText = numberinput + " is odd Number";
      break;
    default:
      output.innerText = "Please enter a valid number";
      break;
  }

}
// ( 3rd assignment number chack ) end