// Creando la clase Spiderman
class Spiderman{
    constructor(name, age, actor, movies, studio) {
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }

    // Metodo para optener nombre y studio
    getInfo(){
        return (`Hey, I'm ${this.actor} from ${this.studio} Studio`)

    }
}

// Exportando la clase
module.exports = Spiderman