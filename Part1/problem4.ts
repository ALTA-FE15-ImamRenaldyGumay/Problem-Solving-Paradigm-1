// Lotery
// input dari user dan kesempatan menang 1:1000
// harus menunggu 10 detik
// membuat random number 1-1000
console.log("Problem 4 - Lottery")
function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }
  
  function lottery(num: number): Promise<string> {
    return new Promise((resolve, reject) => {
      console.log("Undian lotre dimulai...");
      console.log("Sedang mengundi nomor Anda...");
  
      setTimeout(() => {
        const randomNumber = generateRandomNumber();
  
        if (num === randomNumber) {
          resolve("Selamat Anda mendapatkan hadiah utama berupa mobil!");
        } else {
          reject("Maaf Anda kurang beruntung.");
        }
      }, 10000);
    });
  }
  
  console.log("Undian lotre dimulai...");
  lottery(567)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Undian lotre telah berakhir."));
  