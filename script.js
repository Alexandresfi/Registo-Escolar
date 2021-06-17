alert("ATENÇÃO: Estamos em desenvolvimento")
var nomeAluno = document.getElementById("nome");

var alunos = [];

let nomes = []; //lista de chamada em ordem alfabética, para colocar quando as turmas estiverem prontas

function CriarAluno () {
    
    let Aluno = aluno = {
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
    var {nome}=aluno;
    nomes.push(nome)
    nomes.sort()
    MostrarAluno()
}

function MostrarAluno() {

    let tabela = document.getElementById("aqui");
    //Para faltas (de td1 a td3)
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    let pos = alunos.indexOf(aluno);
    
    let numero = document.createTextNode(pos);
    
    td1.appendChild(numero);    
    //adicionando os texto de cada parte da tabela
    td2.textContent = nomeAluno.value;
    td1.textContent = pos+1;
    td3.innerHTML = '<input type="checkbox" name="falta" value="falta">';

    //adicionando os elementos da tabela
    
    tabela.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    console.log(pos);
    AddNotas()
    nomeAluno.value ="";   
    nomeAluno.innerHTML=" ";
}

function AddNotas(){

    let tabelaNota = document.getElementById("notasT")
    //Para notas e media (td1 a td6 )
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    var td6 = document.createElement("td");

    let pos = alunos.indexOf(aluno);
        
    let numero = document.createTextNode(pos);
    td1.appendChild(numero);  
    
    //colocando os inpuit
    td3.innerHTML = `<input type= number name=notas class='nota ${pos}'  placeholder=nota>`
    td4.innerHTML = `<input type= number name=notas class='nota ${pos}'  placeholder=nota>`
    td5.innerHTML = `<input type= number name=notas class='nota ${pos}'  placeholder=nota>`
    
    //calculando médias do Trimestre.
    document.getElementById("media").addEventListener("click",()=>{
        let nota1=parseInt(document.getElementsByClassName("nota "+ pos)[0].value);
        let nota2=parseInt(document.getElementsByClassName("nota "+ pos)[1].value);
        let nota3=parseInt(document.getElementsByClassName("nota "+ pos)[2].value);
        let media = (nota1+nota2+nota3)/3;
        td6.innerHTML = `<input type= number name=notas class='nota ${pos}'  placeholder=nota value = '${media}'>`
        console.log(document.getElementsByClassName("nota "+ pos)[0].value)
    })
    
    //números e nomes dos alunos
    td1.textContent = pos+1;
    td2.textContent = nomeAluno.value;
    tabelaNota.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
}

    document.getElementById("entrar").addEventListener("click",function(){
    document.getElementById("cabeca").style.display = "none";
    document.getElementById("coisa").style.display = "block";
})

document.getElementById("levaC").addEventListener("click",function(){
    document.getElementById("coisa1").style.display = "none";
    document.getElementById("cadastro").style.display="block"
})

document.getElementById("voltarP").addEventListener("click",function(){
    document.getElementById("cadastro").style.display="none"
    document.getElementById("coisa").style.display = "block"
    document.getElementById("coisa1").style.display = "block";
})

document.getElementById("levaF").addEventListener("click",function(){
    document.getElementById("coisa1").style.display = "none";
    document.getElementById("fre").style.display = "block";

    document.getElementById("cance").addEventListener("click", function(){
        document.getElementById("fre").style.display = "none";
        document.getElementById("coisa").style.display = "block"
        document.getElementById("coisa1").style.display = "block"
    });

    document.getElementById("faltaA").addEventListener("click", function(){
        document.getElementById("coisa1").style.display = "none";
        document.getElementById("fre").style.display = "none"
        document.getElementById("falta").style.display = "block"
        
    })
})

document.getElementById("voltaPr").addEventListener("click", function(){
    document.getElementById("falta").style.display = "none";
    document.getElementById("fre").style.display = "block"
})

document.getElementById("levaN").addEventListener("click",function(){
    if(alunos==0){
        alert("Por favor, cadestre pelo menos um aluno!")
    }
    document.getElementById("coisa1").style.display = "none";
    document.getElementById("notas").style.display = "block";
    document.getElementById("notas1").style.display = "block";
})

document.getElementById("Volta").addEventListener("click",function(){
    document.getElementById("coisa1").style.display = "block";
    document.getElementById("notas").style.display = "none";
    document.getElementById("notas1").style.display = "none";
})

document.getElementById("Volta").addEventListener("click",function(){
    document.getElementById("notas1").style.display = "none";
    document.getElementById("coisa1").style.display = "block";
})

document.getElementById("levaR").addEventListener("click",function(){
    document.getElementById("coisa1").style.display = "none";
    document.getElementById("rela").style.display = "block";
})

document.getElementById("ulti").addEventListener("click",function(){
    document.getElementById("rela").style.display = "none";
    document.getElementById("coisa1").style.display = "block";  
})
