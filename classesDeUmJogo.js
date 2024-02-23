class dataHero {
    constructor(name, age, atacHero) {
        this.name = name
        this.age = age
        this.atacHero = atacHero
    }

    attacking() {
        for (let hero in this.atacHero) {
            let [tipe, atac] = this.atacHero[hero]
            console.log(`O ${tipe} atacou usando ${atac}`)
        }
    }
}

let data = {
    name: "ShazzanVitor",
    age: 54,
    atacHero: {
        0: ["mago", "magia"],
        1: ["guerreiro", "espada"],
        2: ["monge", "artes marciais"],
        3: ["ninja", "shuriken"]
    }
}

function heroAction(data) {
    let heroi = new dataHero(data.name, data.age, data.atacHero)
    heroi.attacking()
}

heroAction(data)


