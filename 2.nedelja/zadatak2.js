{
    let cena = 350
    novac = 250

    if (cena < novac) {
        poruka = "Uspesno ste kupili proizvod"
        ostatak = novac - cena
        console.log(poruka, ostatak)
    }
    else if (cena > novac) {
        poruka = "Nemate dovoljno novca"
        stanje = novac
        console.log(poruka, stanje)
    }
}