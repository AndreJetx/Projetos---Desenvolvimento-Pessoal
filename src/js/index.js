var listaItems = document.querySelectorAll('nav ul li');

listaItems.forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.add('active');


        var siblings = getSiblings(item);
        siblings.forEach(function(sibling) {
            sibling.classList.remove('active');
        });
    });
});

function getSiblings(elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }

    return siblings;
}

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn');
    var nav = document.querySelector('.nav');

    btn.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    var listItems = nav.querySelectorAll('.lista-projetos li a');
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            nav.classList.remove('show');o
        });
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !btn.contains(event.target)) {
            nav.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const listaProjetos = document.querySelectorAll(".lista-projetos li");

    listaProjetos.forEach(function (projeto) {
        projeto.addEventListener("click", function (event) {
            event.preventDefault();

            const descricaoConteudo = projeto.querySelector("p#mostrar").textContent;
            const descricaoParagrafo = document.querySelector("p#descricao");

            descricaoParagrafo.textContent = descricaoConteudo;

            const iframe = document.querySelector('iframe[name="projetoFrame"]');
            iframe.src = event.target.href;

            descricaoParagrafo.style.display = descricaoConteudo ? "block" : "none";
        });
    });
});