function validar() {
    let valor = document.querySelector(".info").value;
    // console.log(valor.value.length);
    if (valor.length == 11 || valor.length == 8) {
      alert("oi");
      window.location.href = "home_index.html";
    } else {
      alert("Informações invalidas");
    }
  }