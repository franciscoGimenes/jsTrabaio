function acesso(){
   let numeroCartao = Number(prompt('Qual é o numero do seu cartão?'))
    let fundo = document.querySelector('#corpo')
    let texto = document.querySelector('#titulo')
    if(numeroCartao<=1999 && numeroCartao>=1000){
        alert('Acesso total')
        fundo.style.backgroundColor = '#06d6a0'
        texto.textContent = 'Acesso total'
    }
    else if(numeroCartao<=2999 && numeroCartao>=2000){
        alert('Acesso restrito')
        fundo.style.backgroundColor = '#ffbe0b'
        texto.textContent = 'Acesso restrito'
    }
    else{
        alert('Acesso negado')
        fundo.style.backgroundColor = '#d90429'
        texto.textContent = 'Acesso negado'
    } 
}
