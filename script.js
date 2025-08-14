const input = document.getElementById("terminal-input");
const output = document.getElementById("output");

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const command = input.value.trim();
        input.value = "";

        if (command === "") return;

        // Mostra comando digitado
        output.innerHTML += `<p><span class="prompt">ID2@Ordinis:~$</span> ${command}</p>`;

        // Respostas de exemplo
        if (command.toLowerCase() === "status") {
            output.innerHTML += "<p>Monitoramento: Online</p>";
            output.innerHTML += "<p>Anomalias detectadas: 2</p>";
        } 
        else if (command.toLowerCase() === "help") {
            output.innerHTML += "<p>Comandos disponíveis: status, help, logout</p>";
        }
        else if (command.toLowerCase() === "logout") {
            output.innerHTML += "<p>Desconectando...</p>";
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
        else {
            output.innerHTML += `<p>Comando desconhecido: ${command}</p>`;
        }

        // Rola pro final
        output.scrollTop = output.scrollHeight;
    }

    
    
});




