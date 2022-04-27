

const membriTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg'
    }
]

const addBtn = document.getElementById('addMemberButton');


/* Inizio */

stampaMembro();
addBtn.addEventListener('click',handleClick);



/* FUNZIONI */

function stampaMembro(){

    for(let key in membriTeam){
    const membro = membriTeam[key];
    const nome = membro.nome;
    const ruolo = membro.ruolo;
    const foto = membro.foto;
    console.log(membro);
    const output = `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${foto}"
                alt="${nome}"
              />
            </div>
            <div class="card-text">
              <h3>${nome}</h3>
              <p>${ruolo}</p>
            </div>
    </div>`

    document.querySelector('.team-container').innerHTML += output;
    }
}




function handleClick(){
    const nomeForm = document.getElementById('name').value;
    const ruoloForm = document.getElementById('role').value;
    const imageForm = document.getElementById('image').value;
    aggiuntaMembri(nomeForm,ruoloForm,imageForm);
}



function aggiuntaMembri(nome,ruolo,foto){
    
    const addMember = { 
        nome: `${nome}`,
        ruolo: `${ruolo}`,
        foto: `${foto}`
    };

    membriTeam.push(addMember);

    const output = `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${foto}"
                alt="${nome}"
              />
            </div>
            <div class="card-text">
              <h3>${nome}</h3>
              <p>${ruolo}</p>
            </div>
    </div>`
    document.querySelector('.team-container').innerHTML += output;

}
