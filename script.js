var cadastro = document.getElementById("cadastrar");
var nomeAluno = document.getElementById("nome");


var alunos = [{
    nome: "José Alexandre do Nascimento",
    notas1: [10, 10, 10],
    notas2: [10, 10, 10,],
    notas3: [10, 10, 10],
    media: function () {
       return (this.notas1[0] + this.notas2[0]+this.notas3[0])/3}},
    {
    nome: "Isa Viviane",
    notas1: [10, 10, 10],
    notas2: [10, 10, 10,],
    notas3: [10, 10, 10],
    media: function () {
        (this.notas1[0] + this.notas2[0]+this.notas3[0])/3;
    }
}];



console.log(alunos[0].media())

function CriarAluno () {
    alert("Em breve estaremos adicionando alunos. Lembre-se que isto é apenas uma demonstração")
    let Aluno ={
        nome: nomeAluno.value,
        notas1: [],
        notas2: [],
        notas3: [],
        media: function () {
            return (this.notas1[0] + this.notas2[0]+this.notas3[0])/3
        }
    }
    alunos.push(Aluno);
    
    nomeAluno.focus();  
    MostrarAluno() 
}

function MostrarAluno() {

    nomeAluno.innerHTML=" ";
    let tabela = document.getElementById("aqui");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    //let input = "<input type ='checkbox' name = 'faltas' value='faltas'>"
    let pos = alunos.indexOf(nomeAluno.value)
    //adicionando os texto de cada parte da tabela

    let numero = document.createTextNode(pos);

    td1.appendChild(numero);

    td2.textContent = nomeAluno.value;
    td1.textContent = "04";
    td3.textContent = "Vamos";

    //adicionando os elementos da tabela
    tabela.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    nomeAluno.value ="";   

}