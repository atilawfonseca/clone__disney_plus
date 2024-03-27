document.addEventListener('DOMContentLoaded', function(){
    const pergunta = document.querySelectorAll('.perguntas__lista__item');



    pergunta.forEach(element => {
        element.addEventListener('click', function(){
            this.children[0].classList.toggle('--alterar_icone');
            this.children[1].classList.toggle('--colapsar');
            
        })
    });
        
})