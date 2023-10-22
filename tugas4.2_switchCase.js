let pendapatanHarian = 200000; 

let uangJasa = 0;
let persentaseKomisi = 0;


switch (true) {
    case (pendapatanHarian <= 200000):
        uangJasa = 10000;
        persentaseKomisi = 0.1;
        break;
    case (pendapatanHarian <= 500000):
        uangJasa = 20000;
        persentaseKomisi = 0.15;
        break;
    default:
        uangJasa = 30000;
        persentaseKomisi = 0.2;
        break;
}

let komisi = pendapatanHarian * persentaseKomisi;

let totalPendapatan = uangJasa + komisi;

console.log("Uang Jasa: Rp. " + uangJasa);
console.log("Komisi: Rp. " + komisi);
console.log("Total Pendapatan: Rp. " + totalPendapatan);
