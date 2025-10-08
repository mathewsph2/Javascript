// Aguardar o DOM carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== REFERÊNCIAS AOS ELEMENTOS DO DOM =====
    const form = document.getElementById('itemForm');        // Formulário principal
    const itemList = document.getElementById('itemList');    // Lista onde os itens serão exibidos
    const itemInput = document.getElementById('item');       // Campo de input para digitar itens
    
    // ===== FUNÇÃO PARA ADICIONAR ITEM À LISTA =====
    function addItem() {
        // Obtém o valor do input e remove espaços em branco no início e fim
        const itemValue = itemInput.value.trim();
        
        // Verifica se o valor não está vazio
        if (itemValue) {
            // Cria um novo elemento <li> para o item
            const li = document.createElement('li');
            li.className = 'item'; // Adiciona classe CSS para estilização
            
            // Define o conteúdo HTML do item
            li.innerHTML = `
                <span class="item-text">${itemValue}</span>
                <a href="#" class="delete-link">EXCLUIR</a>
            `;
            
            // Adiciona o novo item à lista
            itemList.appendChild(li);
            
            // ===== ADICIONA EVENTO DE CLIQUE NO LINK "EXCLUIR" =====
            li.querySelector('.delete-link').addEventListener('click', function(e) {
                e.preventDefault(); // Previne o comportamento padrão do link
                li.remove(); // Remove o item da lista
                checkEmptyList(); // Verifica se a lista ficou vazia
            });
            
            // Limpa o campo de input e coloca o foco nele novamente
            itemInput.value = '';
            itemInput.focus();
            
            // Verifica se precisa remover a mensagem de lista vazia
            checkEmptyList();
        }
    }
    
    // ===== FUNÇÃO PARA VERIFICAR SE A LISTA ESTÁ VAZIA =====
    function checkEmptyList() {
        // Obtém todos os itens da lista
        const items = itemList.querySelectorAll('li');
        let emptyMessage = document.querySelector('.empty-message');
        
        // Se não há itens e não existe mensagem de lista vazia, cria uma
        if (items.length === 0 && !emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.className = 'empty-message';
            emptyMessage.textContent = 'Nenhum item cadastrado ainda.';
            itemList.appendChild(emptyMessage);
        } 
        // Se há itens e existe mensagem de lista vazia, remove a mensagem
        else if (items.length > 0 && emptyMessage) {
            emptyMessage.remove();
        }
    }
    
    // ===== EVENTO DE SUBMIT DO FORMULÁRIO =====
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)
        addItem(); // Chama a função para adicionar o item
    });
    
    // ===== EVENTO DE TECLA "ENTER" NO INPUT =====
    itemInput.addEventListener('keypress', function(event) {
        // Se a tecla pressionada for Enter
        if (event.key === 'Enter') {
            event.preventDefault(); // Previne comportamento padrão
            addItem(); // Chama a função para adicionar o item
        }
    });
    
    // ===== INICIALIZAÇÃO =====
    checkEmptyList(); // Verifica o estado inicial da lista
});