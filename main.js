$(document).ready(function () {
  let currentFloor = 2;
  const homePath = $(".home-image path");
  const counterUp = $(".counter-up");
  const counterDown = $(".counter-down");
  homePath.on("mouseover", function () {
    currentFloor = $(this).attr("data-floor");
    homePath.removeClass("current-floor");
    $(".counter").text(currentFloor);
  });
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-us", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      homePath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on("click", function () {
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-us", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      homePath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
