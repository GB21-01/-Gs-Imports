<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Discador de Leads</title>

<style>
body{
    font-family: Arial, sans-serif;
    background:#f4f4f4;
    padding:20px;
}

.container{
    max-width:600px;
    margin:auto;
}

.card{
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,.1);
}

textarea{
    width:100%;
    height:250px;
    padding:10px;
    font-size:14px;
    box-sizing:border-box;
}

button{
    width:100%;
    padding:15px;
    margin-top:10px;
    border:none;
    border-radius:8px;
    font-size:18px;
    cursor:pointer;
}

.carregar{
    background:#007bff;
    color:white;
}

.ligar{
    background:#28a745;
    color:white;
}

.whatsapp{
    background:#25D366;
    color:white;
}

.proximo{
    background:#6c757d;
    color:white;
}

.lead{
    margin-top:20px;
    text-align:center;
}

.nome{
    font-size:28px;
    font-weight:bold;
}

.telefone{
    font-size:22px;
    margin-top:10px;
}

.contador{
    margin-bottom:15px;
    color:#666;
}
</style>
</head>
<body>

<div class="container">

<div class="card">

<h2>Colar Leads</h2>

<textarea id="entrada" placeholder="Cole aqui:

Manoel Jair
5511910412432

Maria Silva
5511999999999"></textarea>

<button class="carregar" onclick="carregarLeads()">
CARREGAR LEADS
</button>

<div class="lead">

<div class="contador" id="contador"></div>

<div class="nome" id="nome"></div>

<div class="telefone" id="telefone"></div>

<button class="ligar" onclick="ligar()">
📞 LIGAR
</button>

<button class="whatsapp" onclick="whatsapp()">
💬 WHATSAPP
</button>

<button class="proximo" onclick="proximoLead()">
➡️ PRÓXIMO
</button>

</div>

</div>

</div>

<script>

let leads = [];
let indice = 0;

function carregarLeads(){

    const texto =
        document.getElementById("entrada")
        .value
        .trim();

    const linhas = texto
        .split("\n")
        .map(l => l.trim())
        .filter(l => l !== "");

    leads = [];

    for(let i=0; i<linhas.length; i+=2){

        leads.push({
            nome: linhas[i],
            telefone: linhas[i+1]
        });

    }

    indice = 0;

    mostrarLead();
}

function mostrarLead(){

    if(leads.length === 0) return;

    document.getElementById("contador").innerText =
        `Lead ${indice+1} de ${leads.length}`;

    document.getElementById("nome").innerText =
        leads[indice].nome;

    document.getElementById("telefone").innerText =
        leads[indice].telefone;
}

function ligar(){

    if(!leads.length) return;

    window.location.href =
        `tel:+${leads[indice].telefone}`;
}

function whatsapp(){

    if(!leads.length) return;

    const mensagem =
    encodeURIComponent(
`Olá, tudo bem?

Meu nome é Vinicius, sou representante do Mega Feirão de Imóveis da Caixa.`
    );

    window.open(
`https://wa.me/${leads[indice].telefone}?text=${mensagem}`,
"_blank"
    );
}

function proximoLead(){

    if(indice < leads.length - 1){

        indice++;

        mostrarLead();

    }else{

        alert("Fim da lista.");

    }
}

</script>

</body>
</html>
