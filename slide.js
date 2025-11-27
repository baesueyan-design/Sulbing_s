/* =========================================================
   메인 슬라이더 (설빙 공식 방식 페이드 슬라이드)
========================================================= */

const slides = document.querySelectorAll(".slideItem");
const dots = document.querySelectorAll(".slidePager span");
const prevBtn = document.querySelector(".slidePrev");
const nextBtn = document.querySelector(".slideNext");

let index = 0;
let timer;

/* 슬라이드 표시 */
function showSlide(n) {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === n);
  });

  dots.forEach((d, i) => {
    d.classList.toggle("active", i === n);
  });

  index = n;
}

/* 다음 슬라이드 */
function nextSlide() {
  let next = (index + 1) % slides.length;
  showSlide(next);
}

/* 이전 슬라이드 */
function prevSlide() {
  let prev = (index - 1 + slides.length) % slides.length;
  showSlide(prev);
}

/* 자동재생 */
function startAuto() {
  timer = setInterval(nextSlide, 4000);
}

/* 자동재생 멈춤 */
function stopAuto() {
  clearInterval(timer);
}

/* 버튼 이벤트 */
nextBtn.addEventListener("click", () => {
  stopAuto();
  nextSlide();
  startAuto();
});

prevBtn.addEventListener("click", () => {
  stopAuto();
  prevSlide();
  startAuto();
});

/* 페이저 클릭 */
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    stopAuto();
    showSlide(i);
    startAuto();
  });
});

/* 초기 실행 */
showSlide(0);
startAuto();
