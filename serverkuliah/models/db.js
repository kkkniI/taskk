// Import modul MySQL
const mysql = require('mysql');

// Konfigurasi koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',     // Ganti dengan host database Anda
  user: 'root',      // Ganti dengan username database Anda
  password: '',  // Ganti dengan password database Anda
  database: 'mahasiswa' // Ganti dengan nama database Anda
});

// Membuka koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Error koneksi ke database:', err);
  }else {
  console.log('Koneksi ke database berhasil!');
  }  
});

module.exports = connection;
