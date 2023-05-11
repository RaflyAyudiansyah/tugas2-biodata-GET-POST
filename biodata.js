var express = require("express");
var app = express();
require("dotenv").config();
var port = process.env.PORT || 8080;

// ===== methode GET ======

app.get("/biodata", (req, res) => {
  const nama = req.query.nama;
  const tempatLahir = req.query.tempat;
  const tanggalLahir = req.query.tanggal;
  const alamat = req.query.alamat;

  res.send({
    nama: nama,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat: alamat,
  });
});

// ===== methode POST =====

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/users", (req, res) => {
  const nama = req.body.nama;
  const tempat = req.body.tempat;
  const tanggal = req.body.tanggal;
  const alamat = req.body.alamat;

  res.send({
    nama: nama,
    tempat: tempat,
    tanggal: tanggal,
    alamat: alamat,
  });
});

app.listen(port);
console.log("Server berjalan di http://localhost:" + port);
