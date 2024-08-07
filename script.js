document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastro-form');
    const agendaBody = document.getElementById('agenda-body');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;

        if (nome && telefone) {
            const newRow = document.createElement('tr');

            const nomeCell = document.createElement('td');
            nomeCell.textContent = nome;
            newRow.appendChild(nomeCell);

            const telefoneCell = document.createElement('td');
            telefoneCell.textContent = telefone;
            newRow.appendChild(telefoneCell);

            agendaBody.appendChild(newRow);

            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

