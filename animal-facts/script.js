const elements = document.querySelectorAll('#floatingElements span');

elements.forEach(el => {
  const randomLeft = Math.random() * 90; 
  const randomTop = Math.random() * 200; 
  el.style.left = randomLeft + 'vw';
  el.style.top = randomTop + 'px';


  const duration = 8 + Math.random() * 10; 
  el.style.animationDuration = duration + 's';
});
document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');

  if(localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if(toggle) toggle.textContent = '☀️ Light Mode';
  }


  if(toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      if(document.body.classList.contains('dark-mode')){
        toggle.textContent = '☀️ Light Mode';
        localStorage.setItem('darkMode', 'enabled'); // save preference
      } else {
        toggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('darkMode', 'disabled'); // save preference
      }
    });
  }
});
const facts = [
  "Lions can sleep up to 20 hours a day and coordinate hunts using silent gestures",
  "Giraffes’ necks are so powerful that their kick can kill a lion in seconds",
  "Butterflies can taste with their feet and remember flowers even after metamorphosis",
  "Crocodiles can go through more than 3,000 teeth in their lifetime, continuously replacing them",
  "Penguins propose to their mates with perfectly smooth pebbles to build nests",
  "Octopuses have three hearts, blue blood, and can edit their own RNA",
  "Sloths can hold their breath longer than dolphins by slowing their heart rate",
  "Elephants can recognize themselves in mirrors and remember friends for decades",
  "Sharks existed before trees, roaming oceans for more than 400 million years",
  "Honeybees can understand the concept of zero and perform basic arithmetic",
  "Owls have asymmetric ears, letting them pinpoint prey location with incredible precision",
  "Sea turtles navigate thousands of miles using the Earth’s magnetic field as a map",
  "Crows can solve complex puzzles, use tools, and even remember human faces for years",
  "Axolotls can regenerate entire limbs, parts of their brain, and even their heart",
  "Starfish can regenerate their entire body from a single arm in some species",
  "Dolphins have unique names for each other and can call out to specific individuals",
  "Peacocks’ tails contain ultraviolet patterns invisible to humans, attracting mates in secret",
  "Komodo dragons have a venomous bite that stops blood clotting, weakening prey within hours",
  "Orcas can live in tight-knit family pods for decades, passing hunting techniques culturally",
  "Fireflies use a complex bioluminescent language to communicate species, sex, and readiness to mate"
];

const factText = document.getElementById('factText');

const dayOfYear = Math.floor(
  (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
);

const factIndex = dayOfYear % facts.length;
factText.textContent = facts[factIndex];
