class Game {
  constructor(nama, author, tahun) {
    this.nama = nama;
    this.author = author;
    this.tahun = tahun;
  }
}

const dataGame = [new Game("Andika", "25", "100000"), new Game("Rizki", "25", "150000"), new Game("Saputra", "25", "200000")];

window.addEventListener("load", (event) => {
  const submitButton = document.getElementById("submit-button");
  const tableData = document.getElementById("table-data");
  const resume = document.getElementById("resume");
  isiDatabase(tableData);
  const namaElement = document.getElementById("input-nama");
  const umurElement = document.getElementById("input-umur");
  const uangElement = document.getElementById("input-uang");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const nama = namaElement.value;
    const umur = umurElement.value;
    const uang = uangElement.value;

    const { jikaValid, pesan } = inputValidasi(nama, umur, uang);

    if (jikaValid) {
      const newDataGame = new Game(nama, umur, uang);
      dataGame.push(newDataGame);

      tableData.innerHTML = "";
      isiDatabase(tableData);
      console.log(dataGame);
      resume.innerHTML = `Total data sekarang ${dataGame.length}`;
    } else {
      alert(pesan);
    }
  });
});
function inputValidasi(nama, umur, uang) {
  let jikaValid = true;
  let pesan = "";

  if (uang >= 1000000) {
    jikaValid = false;
    pesan = "uang saku maksimal 1 juta";
  }

  if (!nama || nama.length >= 10) {
    jikaValid = false;
    pesan = "nama wajib di isi minimal 10 karakter";
  }

  if (!umur || umur.length === 0) {
    jikaValid = false;
    pesan = "minimal umur 25 dek!";
  }

  return {
    jikaValid,
    pesan,
  };
}

function isiDatabase(tableData) {
  for (let i = 0; i < dataGame.length; i++) {
    let row = tableData.insertRow(i);

    row.insertCell(0).innerHTML = `${i + 1}`;
    row.insertCell(1).innerHTML = `${dataGame[i].nama}`;
    row.insertCell(2).innerHTML = `${dataGame[i].author}`;
    row.insertCell(3).innerHTML = `${dataGame[i].tahun}`;
  }
}
