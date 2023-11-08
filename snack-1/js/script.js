const bikes = [
    {
        nome: "city bike",
        peso: 15
    },
    {
        nome: "mountain bike",
        peso: 13
    },
    {
        nome: "bici da corsa",
        peso: 7
    },
    {
        nome: "bici pieghevole",
        peso: 15
    },
    {
        nome: "bmx",
        peso: 9
    },
    {
        nome: "tandem",
        peso: 22
    }
];

const text = document.querySelector("div")

let x = 100;

for (i = 0; i < bikes.length; i++) {
    const { nome, peso } = bikes[i]
    if (peso < x) {
        x = peso
        text.innerHTML = `<div>la "${nome}" pesa ${peso}kg, ed è la bici più leggera</div>`
    }
}
