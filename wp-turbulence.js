document.addEventListener('DOMContentLoaded', function () {
  //  alert("script runs")

  function randFont(mult = 100) {
    return Math.random() * mult;
  }

  function applyTurbulence(element) {
    console.log("applying turbulence to " + element);
    const speed = Math.random() * 3 + 1; // Random speed between 1 and 4
    const delay = Math.random() * 100; // Random delay between 0 and 100ms
    console.log("speed: " + speed + " delay: " + delay);
    element.style.animation = `shake ${speed}s infinite linear`;
    element.style.animationDelay = `${delay}ms`;
}

  function traverseElements(element) {
    applyTurbulence(element);
    for (let i = 0; i < element.children.length; i++) {
      traverseElements(element.children[i]);
    }
  }

  function applyTurbulenceToPage() {
    const rootElement = document.documentElement;
    traverseElements(rootElement);
  }

  applyTurbulenceToPage();
});
