class Game {
  constructor(nama, author, tahun) {
    this.nama = nama;
    this.author = author;
    this.tahun = tahun;
  }
}

const dataGame = [new Game("Crash Bandicot", "EA", "2001"), new Game("Royal Rumble", "EA", "2001"), new Game("Tekken", "EA", "2001")];

window.addEventListener("load", (event) => {
  const submitButton = document.getElementById("submit-button");
  const tableData = document.getElementById("table-data");
  const resume = document.getElementById("resume");
  isiDatabase(tableData);
  const namaElement = document.getElementById("input-nama");
  const authorElement = document.getElementById("input-author");
  const tahunElement = document.getElementById("input-tahun");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const nama = namaElement.value;
    const author = authorElement.value;
    const tahun = tahunElement.value;

    const { jikaValid, pesan } = inputValidasi(nama, author, tahun);

    if (jikaValid) {
      const newDataGame = new Game(nama, author, tahun);
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
function inputValidasi(nama, author, tahun) {
  let jikaValid = true;
  let pesan = "";

  if (tahun < 1900) {
    jikaValid = false;
    pesan = "Year must be greater than 1900";
  }

  if (!nama || nama.length === 0) {
    jikaValid = false;
    pesan = "Title cannot be empty";
  }

  if (!author || author.length === 0) {
    jikaValid = false;
    pesan = "author cannot be empty";
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
