function mostrarSecao(idSecaoDesejada) {
    // Esconde todas as seções primeiro
    document.getElementById('menu-principal').style.display = 'none';
    document.getElementById('seguranca').style.display = 'none';
    document.getElementById('acessibilidade').style.display = 'none';

    // Mostra apenas a seção que o usuário clicou
    document.getElementById(idSecaoDesejada).style.display = 'block';

    // Rola a tela de volta para o topo (ajuda o idoso a não se perder na tela)
    window.scrollTo(0, 0);
}
