function osszead(a, b){
    console.log(a + b)
}

const osszead2 = (a, b) => console.log(a + b)
const multiply = (a, b) => console.log(a * b)

function megszamol(szoveg){
    hossz = 0
    for (let i = 0; i < szoveg.length; i++){
        hossz++
    }
    console.log(hossz)
}

const megszamol2 = (szoveg) => console.log(szoveg.length)
const ketszerez = (tomb) => console.log(tomb.map((i) => i * 2))
const felhasznalok = (users) => console.log(users.map(user => user.name))

function start(){
    do{
        melyik = prompt("Melyik function-t akarod futtatni?")
        if (melyik == "osszead"){
            a = parseInt(prompt("a = "))
            b = parseInt(prompt("b = "))
            osszead(a, b)
            break
        }
        else if(melyik == "osszead2"){
            a = parseInt(prompt("a = "))
            b = parseInt(prompt("b = "))
            osszead2(a, b)
            break
        }
        else if(melyik == "multiply"){
            a = parseInt(prompt("a = "))
            b = parseInt(prompt("b = "))
            multiply(a, b)
            break
        }
        else if(melyik == "megszamol"){
            szoveg = prompt("Szöveg: ")
            megszamol(szoveg)
            break
        }
        else if(melyik == "megszamol2"){
            szoveg = prompt("Szöveg: ")
            megszamol2(szoveg)
            break
        }
        else if(melyik == "ketszerez"){
            mennyit = parseInt(prompt("Mennyi szám legyen a tömbben?"))
            tomb = []
            for (let i = 0; i < mennyit; i++){
                tomb[i] = parseInt(prompt("Számok: "))
            }
            ketszerez(tomb)
            break
        }
        else if(melyik == "felhasznalok"){
            const users = [
                {name: "Lakatos Szandokán Vinetu", age: 9},
                {name: "Kolompár Ármándó Zorró", age: 2},
                {name: "Hankó Ferike Kevin", age: 12}
            ]
            felhasznalok(users)
            break
        }
        else if(melyik != null){
            alert("Hiba.")
        }
    }while(melyik != null)
}
