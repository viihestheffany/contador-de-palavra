function calcular(){
    let text = document.getElementById('texto').value;

    let result = text.split(' ').length;

    document.getElementById('resultado').innerHTML = 'o texto possui:' + result + 'palavras';
}