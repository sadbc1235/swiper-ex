const swiper = new Swiper("main", {
  speed: 500, // 스와이프시 패널이 넘어가는 속도
  loop: true, // 스와이프를 순환
  direction: "horizontal", // horizontal 가로, vertical 세로 스와이프
  grabCursor: true,
  slidesPerView: "auto", // 숫자(해당 숫자 단위로 패널 표시)
  spaceBetween: 20, // 패널 사이 간격 (px)
  centeredSlides: true, // 활성화 패널을 항상 가로 가운대 배치

  pagination: {
    el: ".swiper-pagination", // 페이지네이션 버튼 추가
    // clickable: true, // 클릭 가능 여부 설정
    type: "fraction",
  },

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 50, // y축 회전각도
    stretch: -100, // 당겨짐 정도
    depth: 400, // 입체적인 왜곡효과 정도
    slideShadows: false, // 패널의 그림자 설정
  },
});
