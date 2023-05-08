function validar() {
    let valor = document.querySelector(".info").value;
    // console.log(valor.value.length);
    if (valor.length == 11 || valor.length == 8) {
      window.location.href = "https://area-do-aluno-home.vercel.app/";
    } else {
      alert("Informações invalidas");
    }
  }
