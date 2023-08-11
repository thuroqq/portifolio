// função de copiar email
function copy() {
    var email = "arthur_roqq@outlook.com"; // Substitua pelo seu endereço de e-mail
    navigator.clipboard.writeText(email).then(function() {
      var tooltip = document.createElement("div");
      tooltip.classList.add("tooltip", "text-black"); 
      tooltip.textContent = "Email copiado!";
  
      var icon = document.querySelector(".icon");
      icon.appendChild(tooltip);
  
      setTimeout(function() {
        icon.removeChild(tooltip);
      }, 2000); // 2 segundos oculta o balão
    }).catch(function(error) {
      console.error("Erro ao copiar: ", error);
    });
  }