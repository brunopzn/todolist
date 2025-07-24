function btnadd() {
    let text = document.querySelector('input').value;
    let li = document.createElement('li');
    li.innerHTML = text + '<span onclick="deletarTarefa(this)">❌</span>'
    document.querySelector('ul').appendChild(li)
    text = ''


}

function deletarTarefa(li) {
    li.parentElement.remove()
    
}
/* 
1 - pegar texto input em uma variavel
1 - ao clicar no botão adiconar o texto a uma lista li
 */