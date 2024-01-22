window.addEventListener("scroll", function () {
  const progressLines = document.querySelectorAll(".progress-line");

  progressLines.forEach(function (progressLine) {
    const rect = progressLine.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      progressLine.style.animation =
        "animate 2s cubic-bezier(1, 0.2, 0.2, 1) forwards";
    }
  });
});
