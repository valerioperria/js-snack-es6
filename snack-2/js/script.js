const teams = [
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Lazio",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Cagliari",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Torino",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Genoa",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Fiorentina",
        punti_fatti: 0,
        falli_subiti: 0
    }
]

let { nome, punti_fatti, falli_subiti } = teams;

const x = teams.map(team => {
    team.punti_fatti = Math.floor(Math.random() * 100) + 1;
    team.falli_subiti = Math.floor(Math.random() * 100) + 1;
    return { nome: team.nome, punti_fatti: team.punti_fatti, falli_subiti: team.falli_subiti };
})

console.log(x)

for (i = 0; i < x.length; i++) {
    let { nome, falli_subiti } = x[i];
    console.log(nome, falli_subiti);
}
