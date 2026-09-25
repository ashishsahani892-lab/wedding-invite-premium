/* =========================
   OPEN WEDDING INVITATION
========================= */

const openButton = document.getElementById("openInvitation");
const openingScreen = document.getElementById("opening");
const invitation = document.getElementById("invitation");

openButton.addEventListener("click", function () {

  // Hide opening screen
  openingScreen.style.opacity = "0";
  openingScreen.style.transform = "scale(1.1)";
  openingScreen.style.transition = "all 1s ease";

  // Small delay before showing invitation
  setTimeout(function () {

    openingScreen.style.display = "none";
    invitation.classList.remove("hidden");

    window.scrollTo(0, 0);

    startCelebration();
    startAmbientPetals();
    revealAnimations();

  }, 900);

});


/* =========================
   WEDDING COUNTDOWN
========================= */

/*
   Wedding Date:
   25 November 2026
   6:00 PM India Time
*/

const weddingDate = new Date("2026-11-25T18:00:00+05:30").getTime();

let hasArrived = false;

function updateCountdown() {

  const now = new Date().getTime();
  const difference = weddingDate - now;

  // Wedding moment has arrived
  if (difference <= 0) {

    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

    if (!hasArrived) {
      hasArrived = true;
      const countdownBox = document.querySelector(".countdown");
      if (countdownBox) {
        countdownBox.outerHTML =
          '<p class="countdown-arrived">🎉 शुभ मुहूर्त आ गया है! 🎉</p>';
      }
      startCelebration();
    }

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================
   SCROLL ANIMATION
========================= */

function revealAnimations() {

  const elements = document.querySelectorAll(
    ".event-card, .section, .contact-section"
  );

  const observer = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }

      });

    },
    { threshold: 0.15 }
  );

  elements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 1s ease";

    observer.observe(element);

  });

}


/* =========================
   CELEBRATION EFFECT (burst)
========================= */

function startCelebration() {

  for (let i = 0; i < 35; i++) {
    createPetal();
  }

}


function createPetal() {

  const petal = document.createElement("div");

  petal.innerHTML = Math.random() > 0.7 ? "❀" : "✦";

  petal.style.position = "fixed";
  petal.style.top = "-20px";
  petal.style.left = Math.random() * 100 + "vw";

  petal.style.color =
    Math.random() > 0.5 ? "#d8aa58" : "#e7a6a6";

  petal.style.fontSize = (8 + Math.random() * 15) + "px";
  petal.style.zIndex = "999";
  petal.style.pointerEvents = "none";

  const duration = 3 + Math.random() * 4;

  petal.style.animation = `fallPetal ${duration}s linear`;

  document.body.appendChild(petal);

  setTimeout(function () {
    petal.remove();
  }, duration * 1000);

}


/* =========================
   AMBIENT PETALS (continuous, gentle)
========================= */

let ambientInterval = null;

function startAmbientPetals() {

  if (ambientInterval) return;

  ambientInterval = setInterval(function () {
    createPetal();
  }, 2600);

}

// Pause the ambient effect when the tab isn't visible, to be kind to battery
document.addEventListener("visibilitychange", function () {

  if (document.hidden) {

    if (ambientInterval) {
      clearInterval(ambientInterval);
      ambientInterval = null;
    }

  } else if (!invitation.classList.contains("hidden")) {

    startAmbientPetals();

  }

});


/* =========================
   PETAL ANIMATION KEYFRAMES
========================= */

const injectedStyle = document.createElement("style");

injectedStyle.innerHTML = `
@keyframes fallPetal {
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}
`;

document.head.appendChild(injectedStyle);


/* =========================
   ADD TO CALENDAR
========================= */

function buildGCalUrl(opts) {

  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";

  const params = new URLSearchParams({
    text: opts.title,
    dates: opts.start + "/" + opts.end,
    details: opts.details,
    location: opts.location,
    ctz: "Asia/Kolkata"
  });

  return base + "&" + params.toString();

}

const venueText = "कृष्णा मैरिज हाउस, मुजुरी चौराहा, गोरखपुर";

const addHaldiCal = document.getElementById("addHaldiCal");

if (addHaldiCal) {
  addHaldiCal.addEventListener("click", function (e) {
    e.preventDefault();
    const url = buildGCalUrl({
      title: "हल्दी समारोह - मनीष ❤ प्रियंका",
      details: "हल्दी समारोह में सादर आमंत्रित हैं।",
      location: venueText,
      start: "20261124",
      end: "20261125"
    });
    window.open(url, "_blank");
  });
}

const addWeddingCal = document.getElementById("addWeddingCal");

if (addWeddingCal) {
  addWeddingCal.addEventListener("click", function (e) {
    e.preventDefault();
    const url = buildGCalUrl({
      title: "विवाह समारोह - मनीष ❤ प्रियंका",
      details: "विवाह समारोह में सादर आमंत्रित हैं।",
      location: venueText,
      start: "20261125T180000",
      end: "20261125T220000"
    });
    window.open(url, "_blank");
  });
}


/* =========================
   SHARE INVITATION
========================= */

const shareBtn = document.getElementById("shareInvite");

if (shareBtn) {

  shareBtn.addEventListener("click", async function () {

    const shareData = {
      title: "मनीष ❤ प्रियंका | शुभ विवाह",
      text: "आपको मनीष और प्रियंका के विवाह समारोह में सादर आमंत्रित किया जाता है।",
      url: window.location.href
    };

    if (navigator.share) {

      try {
        await navigator.share(shareData);
      } catch (err) {
        // user cancelled share sheet, nothing to do
      }

    } else {

      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast("लिंक कॉपी हो गया 💌");
      } catch (err) {
        showToast(window.location.href);
      }

    }

  });

}

function showToast(msg) {

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = msg;

  document.body.appendChild(toast);

  setTimeout(function () {
    toast.classList.add("show");
  }, 10);

  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () {
      toast.remove();
    }, 400);
  }, 2500);

}


/* =========================
   PREVENT BROKEN COUNTDOWN ON RELOAD
========================= */

window.addEventListener("load", function () {
  updateCountdown();
});
