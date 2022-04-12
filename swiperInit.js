const swiper = new Swiper("main", {
  speed: 500, // 스와이프시 패널이 넘어가는 속도
  loop: true, // 스와이프를 순환
  direction: "horizontal", // horizontal 가로, vertical 세로 스와이프
  grabCursor: true,
  slidesPerView: 3, // 숫자(해당 숫자 단위로 패널 표시)
  spaceBetween: 20, // 패널 사이 간격 (px)
  centeredSlides: true, // 활성화 패널을 항상 가로 가운대 배치
});
