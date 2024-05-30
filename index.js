import {
  createBuku,
  selectBuku,
  selectBukurata,
  selectBukustok,
  updateBuku,
} from "./repositories/buku.js";

// let hasilInsert = await createBatch1("Alvian", "Laki");
// console.log(hasilInsert);

// var hasilSelect = await selectBatch1();
// console.log(hasilSelect);

// let hasilDelete = await deleteBatch1("Alvian", 10);
// console.log(hasilDelete);

// var hasilSelect = await selectBatch1();
// console.log(hasilSelect);

let masukanbukujs = await createBuku("js", "Brendan Eich", 30, 20);
console.log(masukanbukujs);
let masukanbukuhtml = await createBuku("html", "Berners", 40, 60);
console.log(masukanbukuhtml);
let masukanbukucss = await createBuku("css", "Berners", 10, 20);
console.log(masukanbukucss);

var tampilanbukuharga20 = await selectBuku(20);
console.log(tampilanbukuharga20);

var tampilanbukustok50 = await selectBukustok(50);
console.log(tampilanbukustok50);

var tampilanbukurata = await selectBukurata();
console.log(tampilanbukurata);

var updatebuku = await updateBuku("html", "Benners", 25, 20, 1);
console.log(updatebuku);
