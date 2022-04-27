

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

console.log(membriTeam[0].nome);

for(let key in membriTeam){
    const membro = membriTeam[key];
    console.log(membro);
    const output = `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${membro.foto}"
                alt="${membro.nome}"
              />
            </div>
            <div class="card-text">
              <h3>${membro.nome}</h3>
              <p>${membro.ruolo}</p>
            </div>
    </div>`

    document.querySelector('.team-container').innerHTML += output;
}