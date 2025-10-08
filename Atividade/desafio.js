function addTask() {
    let tarefa = document.getElementById('tarefaInput').value;

    if (!tarefa.trim()) {
        alert("Digite uma tarefa primeiro!");
        return;
    }

    let divtarefa = document.createElement('div');
    divtarefa.className = 'tarefa';


    let novatarefa = document.createElement('p');
    novatarefa.textContent = tarefa;
    divtarefa.appendChild(novatarefa);

    
    let botao = document.createElement('button');
    botao.className = 'complete';
    botao.textContent = 'Concluir';
    botao.onclick = () => {
        novatarefa.style.textDecoration = "line-through";
        novatarefa.style.color = "violet";
        botao.disabled = true; 
    };
    divtarefa.appendChild(botao);

    
    document.getElementById('tasks').appendChild(divtarefa);

    
    document.getElementById('tarefaInput').value = "";
}
