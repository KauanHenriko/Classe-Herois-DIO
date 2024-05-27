class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {

     let ataque = ""
    
        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break
        
            case "guerreiro":
                ataque = "espada"
                break

            case "monge":
                ataque = "artes marciais"
    .            break

            case "ninja":
                ataque = "shuriken"
                break

            default:
                ataque = "ataque desconhecido"

        }

        console.log(`o ${this.tipo} atacou usando ${ataque}!`)
    }
}

const mago = new Heroi("Kauan", 20, "mago")
const guerreiro = new Heroi("Marcelo", 35, "guerreiro")
const monge = new Heroi("Dirce", 65, "monge")
const ninja = new Heroi("Douglas", 30, "ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()