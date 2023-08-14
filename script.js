function copy() {
  var email = "arthur_roqq@outlook.com"; 
  navigator.clipboard.writeText(email).then(function() {
      var tooltip = document.querySelector(".tooltip");
      tooltip.classList.add("opacity-100"); // exibe o tooltip

      setTimeout(function() {
          tooltip.classList.remove("opacity-100"); // oculta o tooltip// a baixo delimita o tempo
      }, 2000); // 2 segundos 
  }).catch(function(error) {
      console.error("Erro ao copiar: ", error);
  });
}