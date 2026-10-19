// DATABASE LOKAL RESMI: KOPI JM (SEMUA VARIABEL MINUMAN SAMA MAKANAN PAKAI imgSrc)
const dbMinuman = [
  {
    id: "m1",
    sub: "kopi",
    nama: "Espresso Arabika",
    harga: 15000,
    imgSrc: "arabica.jpg",
  },
  {
    id: "m2",
    sub: "kopi",
    nama: "Kopi Susu Aren Premium",
    harga: 18000,
    imgSrc: "aren.jpg",
  },
  {
    id: "m3",
    sub: "kopi",
    nama: "Creamy Cafe Latte",
    harga: 20000,
    imgSrc: "cream.jpg",
  },
  {
    id: "m4",
    sub: "kopi",
    nama: "Cappuccino Foam",
    harga: 20000,
    imgSrc: "capo.jpg",
  },
  {
    id: "m5",
    sub: "kopi",
    nama: "Americano Classic",
    harga: 16000,
    imgSrc: "ame.jpg",
  },
  {
    id: "m6",
    sub: "kopi",
    nama: "Caramel Macchiato",
    harga: 24000,
    imgSrc: "cara.avif",
  },
  {
    id: "m7",
    sub: "kopi",
    nama: "Vanilla Latte Coffee",
    harga: 22000,
    imgSrc: "vanil.webp",
  },
  {
    id: "m8",
    sub: "kopi",
    nama: "Mochaccino Melt",
    harga: 23000,
    imgSrc: "moca.jpeg",
  },
  {
    id: "m9",
    sub: "kopi",
    nama: "Hazelnut Latte",
    harga: 22000,
    imgSrc: "haza.webp",
  },
  {
    id: "m10",
    sub: "kopi",
    nama: "Affogato Vanilla Ice",
    harga: 21000,
    imgSrc: "aff.jpg",
  },
  {
    id: "m11",
    sub: "susu-coklat-matcha",
    nama: "Fresh Milk Vanilla",
    harga: 14000,
    imgSrc: "vani.jpg",
  },
  {
    id: "m12",
    sub: "susu-coklat-matcha",
    nama: "Susu Karamel Regal",
    harga: 19000,
    imgSrc: "regal.webp",
  },

  {
    id: "m15",
    sub: "susu-coklat-matcha",
    nama: "Susu Madu Jahe Warm",
    harga: 16000,
    imgSrc: "jahe.jpg",
  },
  {
    id: "m16",
    sub: "susu-coklat-matcha",
    nama: "Susu Strawberry Cream",
    harga: 19000,
    imgSrc: "st.jpg",
  },
  {
    id: "m17",
    sub: "susu-coklat-matcha",
    nama: "Classic Dark Chocolate",
    harga: 20000,
    imgSrc: "coko.webp",
  },

  {
    id: "m19",
    sub: "susu-coklat-matcha",
    nama: "Choco Creamy Mint",
    harga: 22000,
    imgSrc: "ccc.jpg",
  },
  {
    id: "m20",
    sub: "susu-coklat-matcha",
    nama: "Choco Caramel Crunchy",
    harga: 23000,
    imgSrc: "cc.jpg",
  },

  {
    id: "m23",
    sub: "susu-coklat-matcha",
    nama: "Matcha White Chocolate",
    harga: 24000,
    imgSrc: "mcw.jpg",
  },
  {
    id: "m24",
    sub: "susu-coklat-matcha",
    nama: "Matcha Red Bean Ice",
    harga: 24000,
    imgSrc: "mcr.webp",
  },

  {
    id: "m27",
    sub: "susu-coklat-matcha",
    nama: "Lychee Tea Fresh",
    harga: 15000,
    imgSrc: "lcc.jpg",
  },

  {
    id: "m29",
    sub: "susu-coklat-matcha",
    nama: "Mango Smoothies Juice",
    harga: 20000,
    imgSrc: "mg.jpg",
  },
  {
    id: "m30",
    sub: "susu-coklat-matcha",
    nama: "Thai Tea",
    harga: 14000,
    imgSrc: "thai.jpg",
  },
  {
    id: "m31",
    sub: "air-mineral",
    nama: "Le Mineral 600 ml",
    harga: 7000,
    imgSrc: "le min.jpg",
  },
];

const dbMakanan = [
  {
    id: "f1",
    sub: "nasgor",
    nama: "Nasi Goreng Ayam Spesial",
    harga: 20000,
    desc: "Nasgor rempah bertabur suwiran ayam gurih dan potongan bakso.",
    imgSrc: "Nasgor Ayam.jpg",
  },
  {
    id: "f2",
    sub: "nasgor",
    nama: "Nasi Goreng Seafood",
    harga: 25000,
    desc: "Nasgor dengan campuran udang segar dan potongan cumi laut.",
    imgSrc: "Nasgor Seafood.jpg",
  },
  {
    id: "f3",
    sub: "nasgor",
    nama: "Nasi Goreng Hongkong",
    harga: 22000,
    desc: "Nasgor oriental gurih tanpa kecap manis dengan kacang polong & sosis.",
    imgSrc: "nasgor h.jpg",
  },
  {
    id: "f4",
    sub: "nasgor",
    nama: "Nasi Goreng Spesial Telur",
    harga: 23000,
    desc: "Nasgor lengkap dengan telur ceplok setengah matang dan kerupuk.",
    imgSrc: "nasgor s.jpg",
  },
  {
    id: "f5",
    sub: "mie-pasta",
    nama: "Mie Goreng",
    harga: 18000,
    desc: "Mie goreng bumbu kampung pedas manis.",
    imgSrc: "mie tek.jpg",
  },
  {
    id: "f6",
    sub: "mie-pasta",
    nama: "Mie Rebus",
    harga: 18000,
    desc: "Mie kuah kental telur bebek beraroma bawang wangi asli.",
    imgSrc: "mmm.jpg",
  },
  {
    id: "f7",
    sub: "mie-pasta",
    nama: "Ramen Hot Chili",
    harga: 26000,
    desc: "Mie kuah jepang super pedas dengan topping irisan daging ayam.",
    imgSrc: "ramen chili.jpg",
  },
  {
    id: "f8",
    sub: "mie-pasta",
    nama: "Spaghetti Bolognese",
    harga: 24000,
    desc: "Pasta bersiram saus tomat daging sapi cincang italia.",
    imgSrc: "spa bol.jpg",
  },
  {
    id: "f9",
    sub: "mie-pasta",
    nama: "Spaghetti Carbonara",
    harga: 25000,
    desc: "Pasta saus krim susu gurih bertabur keju parut.",
    imgSrc: "spa car.jpg",
  },
  {
    id: "f10",
    sub: "mie-pasta",
    nama: "Spaghetti Aglio Olio",
    harga: 24000,
    desc: "Pasta tumis minyak zaitun.",
    imgSrc: "spa ag.jpg",
  },
  {
    id: "f11",
    sub: "kentang",
    nama: "French Fries Original",
    harga: 15000,
    desc: "Kentang goreng potongan panjang bertabur garam gurih renyah.",
    imgSrc: "kentang.jpg",
  },
  {
    id: "f12",
    sub: "kentang",
    nama: "Cheese Fries Melted",
    harga: 18000,
    desc: "Kentang goreng hangat bersiram saus keju cheddar cair.",
    imgSrc: "kn.jpg",
  },
  {
    id: "f13",
    sub: "kentang",
    nama: "BBQ Potato Wedges",
    harga: 17000,
    desc: "Potongan kentang tebal berbumbu bakar barbecue manis.",
    imgSrc: "kn bbq.jpg",
  },
  {
    id: "f14",
    sub: "kuliner-lain",
    nama: "Cireng Ayam Suwir",
    harga: 14000,
    desc: "Cireng isi ayam suwir pedas.",
    imgSrc: "cireng.jpg",
  },
  {
    id: "f15",
    sub: "kuliner-lain",
    nama: "Roti Bakar Cokelat Keju",
    harga: 16000,
    desc: "Roti panggang mentega bertabur meses premium dan parutan keju.",
    imgSrc: "roti keju.jpg",
  },
  {
    id: "f16",
    sub: "kuliner-lain",
    nama: "Piscok",
    harga: 14000,
    desc: "Pisang goreng dengan isi coklat lumer.",
    imgSrc: "pis.jpeg",
  },
  {
    id: "f17",
    sub: "kuliner-lain",
    nama: "Dimsum Ayam Kukus (5 Pcs)",
    harga: 16000,
    desc: "Dimsum olahan daging ayam lembut bersanding saus sambal.",
    imgSrc: "dim.jpg",
  },
  {
    id: "f18",
    sub: "kuliner-lain",
    nama: "Sandwich Toast Smoke Beef",
    harga: 22000,
    desc: "Roti lapis panggang isi daging asap, keju, dan selada segar.",
    imgSrc: "sss.jpg",
  },
];

let shoppingCart = [];

function switchMasterTab(type) {
  document.getElementById("tab-minuman-master").classList.remove("active");
  document.getElementById("tab-makanan-master").classList.remove("active");
  document.getElementById("sub-tabs-minuman").style.display = "none";
  document.getElementById("sub-tabs-makanan").style.display = "none";

  if (type === "minuman") {
    document.getElementById("tab-minuman-master").classList.add("active");
    document.getElementById("sub-tabs-minuman").style.display = "flex";
    filterMenu("minuman", "kopi");
  } else {
    document.getElementById("tab-makanan-master").classList.add("active");
    document.getElementById("sub-tabs-makanan").style.display = "flex";
    filterMenu("makanan", "nasgor");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnMinuman = document.getElementById("tab-minuman-master");
  const btnMakanan = document.getElementById("tab-makanan-master");
  if (btnMinuman)
    btnMinuman.addEventListener("click", () => switchMasterTab("minuman"));
  if (btnMakanan)
    btnMakanan.addEventListener("click", () => switchMasterTab("makanan"));

  filterMenu("minuman", "kopi");

  const btnCheckout = document.getElementById("btnCheckout");
  if (btnCheckout) {
    btnCheckout.addEventListener("click", processAppCheckout);
  }

  const btnClose = document.getElementById("btnCloseModal");
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      const modal = document.getElementById("checkoutModal");
      if (modal) modal.classList.remove("active");
    });
  }
});
// LOGIKA OPERASIONAL & CART (BAGIAN 2)
function filterMenu(masterType, subKategori) {
  const activeContainer =
    masterType === "minuman" ? "sub-tabs-minuman" : "sub-tabs-makanan";
  document
    .querySelectorAll(`#${activeContainer} .sub-tab-btn`)
    .forEach((btn) => btn.classList.remove("sub-active"));

  const targetContainer = document.getElementById("container-katalog-menu");
  if (!targetContainer) return;
  targetContainer.innerHTML = "";

  if (masterType === "minuman") {
    const listData = dbMinuman.filter((m) => m.sub === subKategori);
    listData.forEach((m) => {
      let optionsHTML = "";
      if (m.sub === "air-mineral") {
        optionsHTML = `
          <div class="option-row"><label>Penyajian:</label><select class="select-temp" id="temp-${m.id}"><option value="Dingin">Dingin</option><option value="Tidak Dingin">Tidak Dingin</option></select></div>
        `;
      } else {
        optionsHTML = `
          <div class="option-row"><label>Penyajian:</label><select class="select-temp" id="temp-${m.id}"><option value="Ice (Dingin)">Ice (Dingin)</option><option value="Hot (Hangat)">Hot (Hangat)</option></select></div>
          <div class="option-row"><label>Takaran Gula:</label><select class="select-sugar" id="sugar-${m.id}"><option value="100%">100% (Normal)</option><option value="75%">75% (Less)</option><option value="50%">50% (Half)</option><option value="25%">25% (Low)</option></select></div>
          <div class="option-row"><label>Ukuran Gelas:</label><select class="select-size" id="size-${m.id}"><option value="Medium">Medium (Reguler)</option><option value="Large">Large (+Rp5rb)</option></select></div>
        `;
      }

      // MINUMAN SEKARANG JUGA MEMAKAI m.imgSrc
      targetContainer.innerHTML += `
        <div class="menu-card" id="card-${m.id}">
          <img src="${m.imgSrc}" alt="${m.nama}" />
          <h3>${m.nama}</h3>
          <p class="desc">Varian minuman segar higienis racikan barista Kopi JM.</p>
          <div class="options-group">${optionsHTML}</div>
          <div class="card-footer">
            <span class="card-price">Rp ${m.harga.toLocaleString("id-ID")}</span>
            <button class="add-btn" onclick="tambahMinuman('${m.id}')">➕ Tambah</button>
          </div>
        </div>
      `;
    });
  } else {
    const listData = dbMakanan.filter((f) => f.sub === subKategori);
    listData.forEach((f) => {
      let customOptionsHTML = "";
      if (subKategori === "nasgor" || subKategori === "mie-pasta") {
        customOptionsHTML = `
          <div class="option-row"><label>Level Pedas:</label><select class="select-spicy" id="spicy-${f.id}"><option value="Lvl 0">Lvl 0 (Tidak Pedas)</option><option value="Lvl 1">Lvl 1</option><option value="Lvl 2">Lvl 2</option><option value="Lvl 3">Lvl 3</option><option value="Lvl 4">Lvl 4</option><option value="Lvl 5">Lvl 5 (Maksimal)</option></select></div>
        `;
      }

      targetContainer.innerHTML += `
        <div class="menu-card" id="card-${f.id}">
          <img src="${f.imgSrc}" alt="${f.nama}" />
          <h3>${f.nama}</h3>
          <p class="desc">${f.desc}</p>
          <div class="options-group">
            ${customOptionsHTML}
            <div class="option-row"><label>Porsi Ukuran:</label><select class="select-size" id="size-${f.id}"><option value="Medium">Medium (Standard)</option><option value="Large">Large (+Rp5rb)</option></select></div>
          </div>
          <div class="card-footer">
            <span class="card-price">Rp ${f.harga.toLocaleString("id-ID")}</span>
            <button class="add-btn" onclick="tambahMakanan('${f.id}')">➕ Tambah</button>
          </div>
        </div>
      `;
    });
  }
}

function tambahMinuman(id) {
  const item = dbMinuman.find((m) => m.id === id);
  if (!item) return;

  const tempEl = document.getElementById(`temp-${id}`);
  const temp = tempEl ? tempEl.value : "Dingin";

  let finalPrice = item.harga;
  let notes = `Penyajian: ${temp}`;

  if (item.sub !== "air-mineral") {
    const sugarEl = document.getElementById(`sugar-${id}`);
    const sizeEl = document.getElementById(`size-${id}`);
    const sugar = sugarEl ? sugarEl.value : "100%";
    const size = sizeEl ? sizeEl.value : "Medium";

    if (size === "Large") finalPrice += 5000;
    notes = `${temp}, Gula ${sugar}, Size ${size}`;
  }

  const itemKey = `${id}-${notes}`;
  const itemExist = shoppingCart.find((c) => c.key === itemKey);
  if (itemExist) {
    itemExist.qty++;
  } else {
    shoppingCart.push({
      key: itemKey,
      nama: item.nama,
      harga: finalPrice,
      qty: 1,
      notes: notes,
    });
  }
  renderCart();
}
window.tambahMinuman = tambahMinuman;

function tambahMakanan(id) {
  const item = dbMakanan.find((f) => f.id === id);
  if (!item) return;

  const sizeEl = document.getElementById(`size-${id}`);
  const spicyEl = document.getElementById(`spicy-${id}`);
  const size = sizeEl ? sizeEl.value : "Medium";
  const spicy = spicyEl ? spicyEl.value : "";

  let finalPrice = item.harga;
  if (size === "Large") finalPrice += 5000;

  const notes = `Size ${size}${spicy ? ", " + spicy : ""}`;
  const itemKey = `${id}-${notes}`;

  const itemExist = shoppingCart.find((c) => c.key === itemKey);
  if (itemExist) {
    itemExist.qty++;
  } else {
    shoppingCart.push({
      key: itemKey,
      nama: item.nama,
      harga: finalPrice,
      qty: 1,
      notes: notes,
    });
  }
  renderCart();
}
window.tambahMakanan = tambahMakanan;

function changeQty(key, delta) {
  const item = shoppingCart.find((c) => c.key === key);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      shoppingCart = shoppingCart.filter((c) => c.key !== key);
    }
  }
  renderCart();
}
window.changeQty = changeQty;

function renderCart() {
  const listContainer = document.getElementById("cartItemsList");
  const totalPriceContainer = document.getElementById("cartTotalPrice");
  if (!listContainer || !totalPriceContainer) return;

  if (shoppingCart.length === 0) {
    listContainer.innerHTML = `<p style="color:#888; text-align:center; padding: 20px 0;">Keranjang kamu masih kosong.</p>`;
    totalPriceContainer.textContent = "Rp 0";
    return;
  }

  listContainer.innerHTML = "";
  let grandTotal = 0;
  shoppingCart.forEach((item) => {
    const subTotal = item.harga * item.qty;
    grandTotal += subTotal;
    listContainer.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-details">
          <p>${item.nama}</p>
          <span>[${item.notes}]</span>
          <span>Rp ${item.harga.toLocaleString("id-ID")} x ${item.qty}</span>
        </div>
        <div class="cart-item-qty">
          <button onclick="changeQty('${item.key}', -1)">-</button>
          <strong>${item.qty}</strong>
          <button onclick="changeQty('${item.key}', 1)">+</button>
        </div>
      </div>
    `;
  });
  totalPriceContainer.textContent = `Rp ${grandTotal.toLocaleString("id-ID")}`;
}

function processAppCheckout() {
  if (shoppingCart.length === 0) {
    alert("Keranjang belanja kamu masih kosong, pilih menu kuliner dulu ya!");
    return;
  }
  const service = document.getElementById("serviceType").value;
  const pay = document.getElementById("paymentMethod").value;
  const total = document.getElementById("cartTotalPrice").textContent;

  const receiptContainer = document.getElementById("modalReceipt");
  if (receiptContainer) {
    let receiptHTML = `<b>📦 Tipe Layanan:</b> ${service}<br>`;
    receiptHTML += `<b>💳 Metode Bayar:</b> ${pay}<br><br>`;
    receiptHTML += `<b>🛒 Daftar Pesanan:</b><br>`;

    shoppingCart.forEach((item) => {
      receiptHTML += `- ${item.nama} (${item.notes}) x${item.qty}<br>`;
    });
    receiptHTML += `<br><b>💰 Total: ${total}</b>`;
    receiptContainer.innerHTML = receiptHTML;
  }

  const modal = document.getElementById("checkoutModal");
  if (modal) {
    modal.classList.add("active");
  } else {
    alert(
      `🎉 PESANAN BERHASIL DITERIMA!\n\nLayanan: ${service}\nPembayaran: ${pay}\nTotal: ${total}\n\nMohon tunggu, nomor antrean Anda sedang diproses!`,
    );
  }

  shoppingCart = [];
  renderCart();
}
