document.addEventListener("DOMContentLoaded", () => {
  const savedUnmute = sessionStorage.getItem("isunmute");
  const savedVolume = sessionStorage.getItem("globalVolume");
  const navType = performance.getEntriesByType("navigation")[0]?.type;

  const btn = document.getElementById("virtual-sound-trigger");
  if (savedUnmute === "true" && navType !== "reload") {
    btn?.click(); // simulation de click
  }


  if (btn) {
    btn.addEventListener("click", () => {
      const fakeAudio = new Audio();
      fakeAudio.src = "../resources/sound/briquet.mp3";

      // Volume selon si le son est activé ou non
      if (savedUnmute === "true") {
        const volume = savedVolume !== null ? parseFloat(savedVolume) : 0.5;
        fakeAudio.volume = volume;
      } else {
        fakeAudio.volume = 0; 
      }

      fakeAudio.play().catch(() => {});
    });
  }
});
