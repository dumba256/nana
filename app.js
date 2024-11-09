window.addEventListener("scroll", function () {
  let scroll = window.scrollY || document.documentElement.scrollTop;
  let bgImage = document.querySelector("#arial_page");
  bgImage.style.backgroundPositionY = scroll / 2 + "px";
});

const togglerBtn = document.querySelector(".navbar-toggler");
const icon = togglerBtn.querySelector("i");

togglerBtn.addEventListener("click", () => {
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLink.classList.toggle("clicked");
  });
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navLinks.forEach((link) => {
        link.classList.remove("clicked");
      });

      navLink.classList.add("clicked");
    });
  });
});

const readMoreButton = document.getElementById("read_more");
const cardContent = document.getElementById("cardContent");

readMoreButton.addEventListener("click", function () {
  if (
    cardContent.textContent ===
    "The programming module at the U.P.T.I. is a critical component of the curriculum, and it's important to showcase its value on the website."
  ) {
    cardContent.textContent =
      "The programming module offers a comprehensive education in programming, covering languages, algorithms, and software development methodologies.";
  } else if (
    cardContent.textContent ===
    "The programming module offers a comprehensive education in programming, covering languages, algorithms, and software development methodologies."
  ) {
    cardContent.textContent =
      "Our faculty members are experienced and well-equipped to provide students with the skills and knowledge they need to succeed in the field.";
    readMoreButton.remove();
  } else {
    cardContent.textContent =
      "The programming module at the U.P.T.I. is a critical component of the curriculum, and it's important to showcase its value on the website.";
  }
});

const readMoreButton2 = document.getElementById("read_more2");
const cardContent2 = document.getElementById("cardContent2");

readMoreButton2.addEventListener("click", function () {
  if (
    cardContent2.textContent ===
    "The business module at U.P.T.I. offers students the opportunity to develop their creative and technical skills in a variety of design mediums."
  ) {
    cardContent2.textContent =
      "In this module, students will learn how to create visually appealing and effective designs for a range of applications, including business cards, receipts, brochures, web pages, and apps.";
  } else if (
    cardContent2.textContent ===
    "In this module, students will learn how to create visually appealing and effective designs for a range of applications, including business cards, receipts, brochures, web pages, and apps."
  ) {
    cardContent2.textContent =
      "This module at U.P.T.I. is the perfect place for students who are passionate about art, design, and creativity to turn their ideas into reality.";
  } else if (
    cardContent2.textContent ===
    "This module at U.P.T.I. is the perfect place for students who are passionate about art, design, and creativity to turn their ideas into reality."
  ) {
    cardContent2.textContent =
      "Through hands-on projects, students will have the opportunity to experiment with different design techniques, work with color and typography, and gain a deeper understanding of the design process.";
    readMoreButton2.remove();
  } else {
    cardContent2.textContent =
      "The business module at U.P.T.I. offers students the opportunity to develop their creative and technical skills in a variety of design mediums.";
  }

  cardContent2.classList.add("paddingParagraph");
});

const readMoreButton3 = document.getElementById("read_more3");
const cardContent3 = document.getElementById("cardContent3");

readMoreButton3.addEventListener("click", function () {
  if (
    cardContent3.textContent ===
    "Inductive Bible study is a method of studying the Bible that focuses on observation, interpretation, and application of the text."
  ) {
    cardContent3.textContent =
      "The goal is to understand what the text actually says and means, and then to apply the truths learned to one's own life.";
  } else if (
    cardContent3.textContent ===
    "The goal is to understand what the text actually says and means, and then to apply the truths learned to one's own life."
  ) {
    cardContent3.textContent =
      "Overall, inductive Bible study is a valuable tool for anyone looking to deepen their understanding of the Bible and grow closer to God.";
    readMoreButton3.remove();
  } else {
    cardContent3.textContent =
      "Inductive Bible study is a method of studying the Bible that focuses on observation, interpretation, and application of the text.";
  }

  cardContent3.classList.add("paddingParagraph");
});

function showInformation(info) {
  let informationDiv = document.getElementById("information");

  switch (info) {
    case "private":
      informationDiv.innerHTML = "The institution is privately owned.";

      break;
    case "location":
      informationDiv.innerHTML = "The institution is located in [location].";
      break;
    case "duration":
      informationDiv.innerHTML = "The course duration is [duration].";
      break;
    case "cost":
      informationDiv.innerHTML = "The course is [free/paid].";
      break;
    case "qualifications":
      informationDiv.innerHTML =
        "The required qualifications for admissions are [qualifications].";
      break;
    default:
      informationDiv.innerHTML = "Additional information not available.";
      break;
  }
  informationDiv.innerHTML +=
    '<button class="faqsButton" onclick="goBack()">Go Back</button>';
}

function goBack() {
  var informationDiv = document.getElementById("information");
  informationDiv.innerHTML = ` <ul class="text-start small_text" style="font-size: 18px" >
              <li
                class="text-decoration-underline"
                onclick="showInformation('private')"
              >
                Is it private or govt based?
              </li>
              <li
                class="text-decoration-underline"
                onclick="showInformation('location')"
              >
                Where is it located?
              </li>
              <li
                class="text-decoration-underline"
                onclick="showInformation('duration')"
              >
                How long is the course?
              </li>
              <li
                class="text-decoration-underline"
                onclick="showInformation('cost')"
              >
                Is it free or paid?
              </li>
              <li
                class="text-decoration-underline"
                onclick="showInformation('qualifications')"
              >
                What qualifications are required for admissions?
              </li>
            </ul>`;
}

// card effects fade-in animations
let container00 = document.querySelector(".encouragement");

function isInViewport00(element) {
  let rect00 = element.getBoundingClientRect();
  return (
    rect00.top >= 0 &&
    rect00.left >= 0 &&
    rect00.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect00.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addFadeInClassIfVisible() {
  if (isInViewport00(container00)) {
    container00.classList.add("fade-in");
    window.removeEventListener("scroll", addFadeInClassIfVisible);
  }
}

window.addEventListener("scroll", addFadeInClassIfVisible);

//card effects slide-in animations

let container = document.querySelector(".container.module.row");

function isInViewportContainer(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addSlideInClassIfVisibleContainer() {
  if (isInViewportContainer(container)) {
    container.classList.add("slide-in");
    window.removeEventListener("scroll", addSlideInClassIfVisibleContainer);
  }
}

window.addEventListener("scroll", addSlideInClassIfVisibleContainer);

// sliding paragraphs effects

let paragraphs = document.querySelectorAll(".paragraph_slide");

function isInViewportParagraph(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addSlideInClassIfVisibleParagraph() {
  paragraphs.forEach(function (paragraph) {
    if (isInViewportParagraph(paragraph)) {
      paragraph.classList.add("paragraph_slide", "active");
    }
  });
}

window.addEventListener("load", addSlideInClassIfVisibleParagraph);
window.addEventListener("scroll", addSlideInClassIfVisibleParagraph);

//form resseting function after submission

function handleFormSubmit(event) {
  event.preventDefault();

  let form = event.target;
  let formData = new FormData(form);

  fetch("https://formspree.io/f/xdovqonw", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        form.reset();

        window.location.href = "./goback.html";
      } else {
        // console.error("Form submission failed:", response.status);
        document.getElementById("error-message").textContent =
          "Submission failed.";
      }
    })
    .catch(function (error) {
      // console.error("An error occurred during form submission:", error);
      document.getElementById("error-message").textContent =
        "An error occurred.";
    });
}
