const botoesOpenPreview = document.querySelectorAll('.open-preview');
const modal = document.getElementById('meuModal');
const videoPlayer = document.getElementById('videoPlayer');
const trilhaSonora = document.getElementById('trilha-sonora');
const elements = document.querySelectorAll('.disco-age')

let trilhaSonoraTocando = false;

trilhaSonora.volume = 0.1;

function abrirPreview(event) {

  trilhaSonoraTocando = !trilhaSonora.paused;
  trilhaSonora.pause();

  const videoURL = event.currentTarget.getAttribute('data-video');
  videoPlayer.src = videoURL;
  modal.style.display = 'block';
  videoPlayer.play();
  videoPlayer.volume = 0.3;
}

function fecharPreview() {

  if (trilhaSonoraTocando) {
    trilhaSonora.play();
  }

  videoPlayer.pause();
  modal.style.display = 'none';
}

botoesOpenPreview.forEach(botao => {
  botao.addEventListener('click', abrirPreview);
});

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('close-preview')) {
    fecharPreview();
  }
});

window.addEventListener('scroll', () => {
  elements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const nextElement = elements[index + 1];

    if (nextElement) {
      const nextRect = nextElement.getBoundingClientRect();

      if (nextRect.top <= 0) {
        element.style.visibility = 'hidden';
      } else {
        element.style.visibility = 'visible';
      }
    }
  });
});