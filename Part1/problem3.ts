// Kamu ingin membeli jajanan seperti boba dan seblak, dan di kantok cuman punya Rp. 20.000
// price list:
// boba : Rp. 5.000, estimasi 5 detik
// seblak 8.000, estimasi 9 detik
// expectasi output
// kamu jajan bobo dengan harga 5rb
// sisa uang 15rb
// kamu jajan seblak dengan harga 8rb
// sisa uang sebesar 7rb
// jika uang tidak cukup
// uang kamu belum bisa membeli <namaBarang>
// sisa uang kamu sebesar <sisa uang>
console.log("Problem 3 - Let's have some snack")
function jajanBoba(money: number, callback: any): void{
    const price = 5000
    const snack_boba: string = "Minuman Boba"
    console.log("anda memesan ", snack_boba)
    if (money > price) {
        console.log(`anda bisa membeli ${snack_boba}... mohon tunggu`)
        money -= price
        setTimeout(() => {
            console.log(`ini ${snack_boba} nya`)
            console.log("sisa uang anda ",money)
        }, 5000);
    }else{
        console.log(`Maaf kamu belum bisa membeli ${snack_boba}`)
        console.log("Sisa uang kamu sebesar ", money)
    }
    
    callback(money)
}

function jajanSeblak(money: number): void{
    // console.log("sisa uang anda ",money)
    const price_seblak: number = 8000
    const snack_seblak: string = "Makanan Seblak"
    console.log(`Anda memesan ${snack_seblak}`)
    if (money >= price_seblak) {
        console.log(`Anda bisa membeli ${snack_seblak}`)
        money -= price_seblak
        setTimeout(() => {
            console.log(`ini ${snack_seblak} nya`)
            console.log("sisa uang anda ",money)
        }, 9000);
    }else{
        console.log(`Maaf kamu belum bisa membeli ${snack_seblak}`)
        console.log("Sisa uang kamu sebesar ", money)
    }
    
}

// jajanBoba(20000, jajanSeblak)
// jajanBoba(20000, jajanSeblak)
jajanBoba(10000, jajanSeblak)