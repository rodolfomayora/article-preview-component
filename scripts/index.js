let //references;
  shareButton = null,
  shareLabel  = null;

const toggleShareButton = () => {
  shareButton.classList.toggle('js-active');
  shareLabel.classList.toggle('js-active');
}

const init = () => {
  const [jsButton] = document.getElementsByClassName('js-button');
  const [jsShare] = document.getElementsByClassName('js-share');
  shareButton = jsButton;
  shareLabel = jsShare;

  shareButton.addEventListener('click', toggleShareButton);
}

document.addEventListener('DOMContentLoaded', init);