let pendapatanHariIni = 700000; 
let uangJasa;
let uangKomisi;

if (pendapatanHariIni <= 200000) {
  uangJasa = 10000;
  uangKomisi = pendapatanHariIni * 0.1;
} else if (pendapatanHariIni <= 500000) {
  uangJasa = 20000;
  uangKomisi = pendapatanHariIni * 0.15;
} else {
  uangJasa = 30000;
  uangKomisi = pendapatanHariIni * 0.2;
}

let totalPendapatan = uangJasa + uangKomisi;

console.log("Uang Jasa: Rp." + uangJasa);
console.log("Uang Komisi: Rp." + uangKomisi);
console.log("Total Pendapatan: Rp." + totalPendapatan);
