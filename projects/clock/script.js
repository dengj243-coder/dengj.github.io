
function updateOcean() {

  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let ocean = document.querySelector(".ocean");

  let wave1 = document.querySelector(".wave1");
  let wave2 = document.querySelector(".wave2");
  let wave3 = document.querySelector(".wave3");


  if (hour >= 6 && hour < 12) {
    ocean.style.backgroundColor = "#83c9ef";
    wave1.style.fill = "#68c4f0";
    wave2.style.fill = "#139de5";
    wave3.style.fill = "#0086da";
  }


  else if (hour >= 12 && hour < 18) {
    ocean.style.backgroundColor = "#9de7f9";
    wave1.style.fill = "#56d3f6";
    wave2.style.fill = "#00aaf0";
    wave3.style.fill = "#078de9";
  }


  else if (hour >= 18) {
    ocean.style.backgroundColor = "#2388cb";
    wave1.style.fill = "#087bc8";
    wave2.style.fill = "#0759b0";
    wave3.style.fill = "#10489e";
  }


  else {
    ocean.style.backgroundColor = "#0b2b5c";
    wave1.style.fill = "#064087";
    wave2.style.fill = "#0752a8";
    wave3.style.fill = "#183c97";
  }


  wave1.style.top = (20 - hour / 24 * 5) + "%";

  wave2.style.top = (40 - minute / 60 * 10) + "%";

  wave3.style.top = (60 - second / 60 * 20) + "%";

}

updateOcean();

setInterval(updateOcean, 1000);
