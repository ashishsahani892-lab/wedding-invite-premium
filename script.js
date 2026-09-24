* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --maroon: #5a0b20;
  --dark-maroon: #26030d;
  --gold: #d8aa58;
  --light-gold: #f5d99b;
  --cream: #fff8ea;
  --pink: #e7a6a6;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--dark-maroon);
  color: var(--cream);
  font-family: "Noto Serif Devanagari", serif;
  overflow-x: hidden;
}

/* =========================
   OPENING SCREEN
========================= */

#opening {
  min-height: 100vh;
  min-height: 100svh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 25px;

  position: relative;

  overflow: hidden;

  background:
    radial-gradient(
      circle at center,
      #7b1835 0%,
      #4a091b 45%,
      #21020a 100%
    );
}


/* Decorative circles */

#opening::before,
#opening::after {

  content: "";

  position: absolute;

  width: 75vw;
  height: 75vw;

  max-width: 650px;
  max-height: 650px;

  border-radius: 50%;

  border: 1px solid rgba(216,170,88,0.35);

  animation: rotateDecoration 20s linear infinite;
}

#opening::after {

  width: 60vw;
  height: 60vw;

  border-color: rgba(216,170,88,0.2);

  animation-direction: reverse;
}


/* =========================
   TEXT
========================= */

.small-title {

  color: var(--gold);

  letter-spacing: 3px;

  font-size: 14px;

  margin-bottom: 15px;

}


#opening h1 {

  font-size: clamp(42px, 12vw, 80px);

  margin: 10px;

  color: var(--light-gold);

  animation: fadeDown 1.5s ease;

}


.couple-name {

  font-family: Georgia, serif;

  font-size: clamp(40px, 11vw, 75px);

  margin: 15px 0;

  animation: scaleIn 1.5s ease;

}


.couple-name span {

  color: #efaaaa;

  font-size: 35px;

}


.opening-text {

  color: #ead2c2;

  font-size: 16px;

  margin-bottom: 20px;

}


.blessing {

  color: #cdaea0;

  font-size: 12px;

}


/* =========================
   OPEN BUTTON
========================= */

#openInvitation {

  border: 1px solid var(--gold);

  background:
    linear-gradient(
      135deg,
      #e2b761,
      #9e6e2b
    );

  color: #2b050e;

  padding: 15px 28px;

  border-radius: 50px;

  font-family: inherit;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  margin: 20px 0;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.35);

  transition: 0.3s;

  position: relative;

  z-index: 5;

}


#openInvitation:hover {

  transform: scale(1.05);

}


/* =========================
   MAIN
========================= */

.hidden {
  display: none;
}


/* =========================
   HERO
========================= */

.hero {

  min-height: 100vh;
  min-height: 100svh;

  display: flex;

  align-items: center;

  justify-content: center;

  text-align: center;

  position: relative;

  overflow: hidden;

  background:
    radial-gradient(
      circle at center,
      #84203e,
      #4b0a1d 50%,
      #21020a
    );

}


.hero::before {

  content: "";

  position: absolute;

  width: 70vw;
  height: 70vw;

  max-width: 650px;
  max-height: 650px;

  border-radius: 50%;

  border: 1px solid rgba(216,170,88,0.35);

  box-shadow:
    0 0 0 35px rgba(216,170,88,0.04),
    0 0 0 70px rgba(216,170,88,0.03);

  animation:
    rotateDecoration 30s linear infinite;

}


.hero-content {

  position: relative;

  z-index: 2;

  padding: 30px;

  animation: heroAppear 2s ease;

}


.om {

  font-size: 45px;

  color: var(--gold);

  margin-bottom: 10px;

}


.hero h2 {

  font-family: Georgia, serif;

  font-size: clamp(55px, 15vw, 100px);

  margin: 5px 0;

  color: white;

}


.heart {

  color: #efa5a5;

  font-size: 38px;

  margin: 5px;

}


.hero-message {

  color: #e7cfc0;

  font-size: 17px;

  margin: 15px 0;

}


.date-box {

  display: inline-block;

  padding: 12px 20px;

  border:

    1px solid

    rgba(216,170,88,0.65);

  border-radius: 50px;

  color: var(--light-gold);

  line-height: 1.7;

}


/* =========================
   COMMON SECTIONS
========================= */

.section {

  max-width: 850px;

  margin: auto;

  padding: 80px 25px;

  text-align: center;

}


.section p {

  line-height: 2;

}


.section h3,
.event-section h3,
.contact-section h3 {

  font-family: Georgia, serif;

  font-size: 35px;

  margin: 10px 0 30px;

  color: white;

}


.ornament {

  color: var(--gold);

  font-size: 25px;

  margin: 20px;

}


/* =========================
   INVITATION MESSAGE
========================= */

.invitation-message {

  background:
    linear-gradient(
      #35050f,
      #5a0c22
    );

}


.invitation-message strong {

  color: var(--light-gold);

}


/* =========================
   EVENTS
========================= */

.event-section {

  text-align: center;

  padding: 80px 20px;

  background:
    radial-gradient(
      circle at center,
      #65112a,
      #35050f
    );

}


.event-card {

  max-width: 480px;

  margin: 30px auto;

  padding: 35px 25px;

  border-radius: 28px;

  background: rgba(255,255,255,0.06);

  border:
    1px solid
    rgba(216,170,88,0.35);

  box-shadow:
    0 20px 50px rgba(0,0,0,0.25);

}


.event-icon {

  color: var(--gold);

  font-size: 40px;

  margin-bottom: 10px;

}


.event-card h4 {

  font-size: 27px;

  margin: 10px;

}


.event-date {

  color: var(--gold);

  font-size: 20px;

  font-weight: bold;

}


.event-time {

  font-size: 18px;

}


.gold-line {

  width: 100px;

  height: 1px;

  background: var(--gold);

  margin: 20px auto;

}


.venue-title {

  color: var(--light-gold);

  font-size: 20px;

  font-weight: bold;

}


/* =========================
   MAP BUTTON
========================= */

.map-button {

  display: inline-block;

  text-decoration: none;

  color: #2a050d;

  background:
    linear-gradient(
      135deg,
      #e5bd70,
      #a97731
    );

  padding: 12px 22px;

  border-radius: 30px;

  margin-top: 20px;

  font-weight: bold;

}


/* =========================
   COUNTDOWN
========================= */

.countdown-section {

  padding: 80px 20px;

  text-align: center;

  background: var(--cream);

  color: var(--maroon);

}


.countdown-section h3 {

  color: var(--maroon);

}


.countdown {

  display: flex;

  justify-content: center;

  gap: 12px;

  flex-wrap: wrap;

}


.time-box {

  width: 75px;

  padding: 15px 8px;

  background: white;

  border-radius: 18px;

  border:
    1px solid
    var(--gold);

  box-shadow:
    0 5px 20px rgba(0,0,0,0.08);

}


.time-box span {

  display: block;

  font-size: 28px;

  font-weight: bold;

  color: var(--maroon);

}


.time-box small {

  font-size: 12px;

}


/* =========================
   STORY
========================= */

.story {

  background:
    radial-gradient(
      circle at center,
      #75152f,
      #30040e
    );

}


.quote {

  margin-top: 30px;

  color: var(--light-gold);

  font-size: 20px;

  font-style: italic;

}


/* =========================
   CONTACT
========================= */

.contact-section {

  text-align: center;

  padding: 80px 20px;

  background: #21020a;

}


.contact-list {

  display: flex;

  justify-content: center;

  flex-wrap: wrap;

  gap: 12px;

  margin: 25px 0;

}


.contact-list a {

  color: var(--light-gold);

  text-decoration: none;

  border-bottom:
    1px solid
    var(--gold);

  padding: 6px;

}


.whatsapp-button {

  display: inline-block;

  padding: 14px 25px;

  border-radius: 40px;

  background: #efe0bc;

  color: #31050e;

  text-decoration: none;

  font-weight: bold;

}


/* =========================
   FOOTER
========================= */

footer {

  text-align: center;

  padding: 50px 20px;

  background: #170107;

  color: var(--gold);

}


footer h4 {

  font-size: 24px;

  margin: 15px;

}


/* =========================
   ANIMATIONS
========================= */

@keyframes fadeDown {

  from {

    opacity: 0;

    transform: translateY(-30px);

  }

  to {

    opacity: 1;

    transform: translateY(0);

  }

}


@keyframes scaleIn {

  from {

    opacity: 0;

    transform: scale(0.7);

  }

  to {

    opacity: 1;

    transform: scale(1);

  }

}


@keyframes heroAppear {

  from {

    opacity: 0;

    transform: scale(0.8);

  }

  to {

    opacity: 1;

    transform: scale(1);

  }

}


@keyframes rotateDecoration {

  from {

    transform: rotate(0deg);

  }

  to {

    transform: rotate(360deg);

  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

  .section,
  .event-section,
  .contact-section {

    padding-top: 65px;

    padding-bottom: 65px;

  }

  .section h3,
  .event-section h3,
  .contact-section h3 {

    font-size: 29px;

  }

  .event-card {

    padding: 30px 20px;

  }

}
