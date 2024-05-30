import { dbPool } from "../utils/dbcon.js";

//create buku
async function createBuku(judul, penulis, harga, stok) {
  try {
    let query =
      "INSERT INTO buku (judul, penulis,harga,stok) values ('" +
      judul +
      "','" +
      penulis +
      "','" +
      harga +
      "','" +
      stok +
      "')";
    console.log(query);
    const [result] = await dbPool.query(query);
    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

//select buku harga
async function selectBuku(harga) {
  try {
    let query = "SELECT * FROM buku where harga >= '" + harga + "'";
    console.log(query);
    const [result] = await dbPool.query(query);
    if (result.length > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

// select buku stok
async function selectBukustok(stok) {
  try {
    let query = "SELECT * FROM buku where stok < '" + stok + "'";
    console.log(query);
    const [result] = await dbPool.query(query);
    if (result.length > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

// select buku rata rata
async function selectBukurata() {
  try {
    let query = "SELECT AVG(harga) AS rata_harga FROM buku";
    console.log(query);
    const [result] = await dbPool.query(query);
    if (result.length > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

//update buku
async function updateBuku(judul, penulis, harga, stok, idbuku) {
  try {
    let query =
      "UPDATE buku SET judul = '" +
      judul +
      "', penulis = '" +
      penulis +
      "', harga ='" +
      harga +
      "', stok = '" +
      stok +
      "' where id_buku ='" +
      idbuku +
      "'";
    console.log(query);
    const [result] = await dbPool.query(query);
    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

//delete buku
async function deleteBuku(judul, id) {
  try {
    let query =
      "DELETE FROM buku where  judul = '" + judul + "' AND id = '" + id + "' ";
    console.log(query);
    const [result] = await dbPool.query(query);
    console.log(result);
    if (result.length > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

export {
  createBuku,
  deleteBuku,
  selectBuku,
  selectBukurata,
  selectBukustok,
  updateBuku,
};
