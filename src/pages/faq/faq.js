(function(){

    // Campo de pesquisa
    const pesquisa = document.getElementById('pesquisa-faq');

    // Cada item do FAQ
    const itens = Array.from(document.querySelectorAll('#lista-perguntas details'));

    // Filtro enquanto o usuário digita
    pesquisa.addEventListener('input', function(){

        const termo = this.value.trim().toLowerCase();

        itens.forEach(item => {

            const textoItem = (
                item.querySelector('summary').textContent +
                ' ' +
                item.querySelector('.resposta').textContent
            ).toLowerCase();

            if (!termo || textoItem.includes(termo)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
                item.removeAttribute('open');
            }
        });
    });

    // Acessibilidade: abrir/fechar com Enter ou Espaço
    document.querySelectorAll('#lista-perguntas summary').forEach(titulo => {

        titulo.addEventListener('keydown', (e) => {

            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();

                const bloco = titulo.parentElement;
                bloco.open = !bloco.open;
            }
        });
    });

})();
