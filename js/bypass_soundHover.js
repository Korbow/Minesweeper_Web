document.addEventListener("DOMContentLoaded", () => {
  const savedUnmute = sessionStorage.getItem("isunmute");
  const navType = performance.getEntriesByType("navigation")[0]?.type;

  if (savedUnmute === "true" && navType !== "reload") {
    const btn = document.getElementById("virtual-sound-trigger");
    if (btn) {
      btn.click(); // Simule une interaction
    }
  }

  const trigger = document.getElementById("virtual-sound-trigger");
  if (trigger) {
    trigger.addEventListener("click", () => {
      const fakeAudio = new Audio();
      fakeAudio.volume = 0;

      // Mini audio silencieux
      fakeAudio.src = "../resources/sound/briquet.mp3";

      fakeAudio.play().catch(() => {});
    });
  }
});