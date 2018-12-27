let array = document.getElementsByTagName("input")
for (let i = 0; i < array.length; i++) {
  if (array[i].getAttribute("type") == "password") {
    array[i].setAttribute("type", "text");
  }
}
