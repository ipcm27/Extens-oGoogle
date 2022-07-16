document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#btn").addEventListener("click", function() {
    let text = document.querySelector("#input-text").value;
    document.querySelector("#result").innerHTML = upper(text);
  });

  function upper(text) {
    return text.toUpperCase();
  }
});
