const tanah = document.querySelectorAll(".tanah");
const pocong = document.querySelectorAll(".pocong");
const papanSkor = document.querySelector(".papan-skor");
const pop = document.querySelector("#pop");

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculPocong() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(400, 1500);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!selesai) {
      munculPocong();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculPocong();
  setTimeout(() => {
    selesai = true;
  }, 20000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove("muncul");
  papanSkor.textContent = skor;
  pop.play();
}

pocong.forEach((t) => {
  t.addEventListener("click", pukul);
});

document.querySelector(".second").addEventListener("click", function () {
  swal({
    title: "Are you sure about deleting this file?",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "Delete It",
    confirmButtonColor: "#ff0055",
    cancelButtonColor: "#999999",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true,
  });
});