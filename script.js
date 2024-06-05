const inputs = document.querySelectorAll("input");
const error = document.querySelectorAll(".hid");
red = "hsl(0, 100%, 74%)";
i = 0;
k = 1;

function start() {
  inputs.forEach((input) => {
    if (input.value === "") {
      error[i].style.display = "block";
      inputs[i].style.border = "1.5px solid red";
      inputs[i].className += "hids";
      k = 0;
    }
    email = inputs[2].value;
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      inputs[2].value = "email@example.com";
      inputs[2].style.color = red;
      error[2].style.display = "block";
      inputs[2].style.border = "1.5px solid red";
      inputs[2].className += "hids";
      k = 0;
    }
    i++;
  });
  if (k == 1) {
    location.reload();
  }
}
