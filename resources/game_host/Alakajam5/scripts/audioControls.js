var isPlaying = false;

function toggleMusic() {
    if (isPlaying == false) {
        document.getElementById('backgroundMusic').play();
        document.getElementById('BGMusicButtonLabel').textContent = "BG Music: On";
        isPlaying = true;
    } else {
        document.getElementById('backgroundMusic').pause()
        document.getElementById('BGMusicButtonLabel').textContent = "BG Music: Off";
        isPlaying = false;
    }
}