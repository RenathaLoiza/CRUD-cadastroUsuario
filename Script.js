const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);



//cadastrar

function cadastrandolocal(event) {
    event.preventDefault()
let dados=CadastrarUsuario()
SalvarLocal(dados)
window.location.reload()

}

 function CadastrarUsuario () {

    
    let nomeUsuario= document.getElementById('Nome').value;
    let emailUsuario=document.getElementById('E-mail').value;
    let celularUsuario=document.getElementById('Celular').value;
    let cidadeUsuario=document.getElementById('Cidade').value;

    const dadosUsuarios={
        nomeUsuario:nomeUsuario,
        emailUsuario:emailUsuario,
        celularUsuario:celularUsuario,
        cidadeUsuario:cidadeUsuario

    }
    return dadosUsuarios
 }
 function carregarUsuarios() {
    let listaUsuario = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    if (listaUsuario.length == 0) {
        let tabela = document.getElementById('corpo-tabela');

        tabela.innerHTML = `
            <tr class="linha-mensagem"> 
                <td colspan='6' > Nenhum usuário cadastrado </td>
            </tr>
        `

    } else {
        SalvarLocal(listaUsuario)
    }
}

window.addEventListener('DOMContentLoaded', () => carregarUsuarios())


    function SalvarLocal(usuario) {
        
        let listaUsuario = [];
    

        
        if (localStorage.getItem("usuariosCadastrados")) {
            listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"));
        }
    
          listaUsuario.push(usuario);
    
        localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuario))
        
    }



    //PASSAR PARA UMA TABELA OS DADOS QUE FORAM TRANSFORMADOS EM OBJETO

    function tabelaCadastro(listaUsuarioCadastro) {
        let tabela= document.getElementById('tabela')
        let template="";

        listaUsuarioCadastro.array.forEach(element => {
            template +=`
            <tr>
            <td data-cell="Nome">${element.nomeUsuario}</td>
            <td data-cell="E-mail">${element.emailUsuario}</td>
            <td data-cell="Celular">${element.celularUsuario}</td>
            <td data-cell="Cidade">${element.cidadeUsuario}</td>
            </tr>
            `
            
        });
        tabela.innerHTML = template;
        
    }


//excluir
//lista
//atualizar


