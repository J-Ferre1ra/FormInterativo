
const revealBtn = document.querySelector('.btn-submit')
const thankContent = document.querySelector('.thank-content')

const feedbackForm = document.querySelector('form')
revealBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('Formulário enviado!');
    
    const name = document.querySelector('#name').value
    const stars = document.querySelector('input[name="rating"]:checked')
    const comment = document.querySelector('#comentary').value
    
    if(name.trim() === ''){
        alert('Por favor, preencha seu nome!')
        return
    }
    console.log(name);
    
    if(!stars){
        alert('Por favor, selecione uma estrela para avaliação!')
        return
    }
    const starValue = stars.value
    console.log(starValue , 'estrelas');

    if(comment.trim() === ''){
        alert('Por favor, faça um comentário para nos ajudar a melhorar!')
        return
    }
    console.log(comment);

    revealContent()
})

function revealContent(){

    if(thankContent.classList.contains('reveal-btn')){
        thankContent.classList.remove('reveal-btn')
    }else{
        thankContent.classList.add('reveal-btn')
    }
}
