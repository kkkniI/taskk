

const mahasiswaNim = '202022';
const updateData = {
    nama : 'ian',
    gender : 'L',
    prodi: 'TI',
    alamat: 'bekasi' 
};

fetch (`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('error:', error));

// METHOD POST
const newData = {
    nim: "202055",
    nama: "nadin",
    gender: "P",
    prodi: "ti",
    alamat: "riau",
  };
  
  fetch("http://localhost:3000/mahasiswa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  
  // METHOD DELETE
  const nimToDelete = "202021";
  
  fetch(`http://localhost:3000/mahasiswa/${nimToDelete}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

    // DOSEN
// METHOD PUT
const dosenNip = "010104";
const updatedDosenData = {
  nama: "sugeng",
  gender: "l",
  alamat: "jakbar",
};

fetch(`http://localhost:3000/dosen/${dosenNip}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD POST
const newDosenData = {
  nip: "010110",
  nama: "nadia",
  gender: "p",
  alamat: "gg.sentiong",
};

fetch("http://localhost:3000/dosen", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD DELETE
const nipToDelete = "010103";

fetch(`http://localhost:3000/dosen/${nipToDelete}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));