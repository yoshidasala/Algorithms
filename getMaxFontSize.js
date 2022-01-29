function getMaxFontSize(textString, domNode) {
  const containerWidth = domNode.scrollWidth;
  const textElem = document.createElement('span');

  textElem.textContent = textString;
  textElem.style.visibility = 'hidden';
  textElem.style.position = 'absolute';
  textElem.style.fontSize = '1px';

  document.body.append(textElem);

  // getBoundingClientRect is used for a purpose of accuracy, since it return width with decimals
  const fontSizeMultiplier = textElem.getBoundingClientRect().width;

  textElem.remove();

  return Math.floor(containerWidth / fontSizeMultiplier)
}

const target = document.getElementById('target');


function doesFit(textString, fontSize, domNode) {
  // I assume that text can wrap within the domNode. And we should check that it fits both, vertically and horizontally
  const containerWidth = domNode.scrollWidth;
  const containerHeight = domNode.scrollHeight;

  const textElem = document.createElement('span');

  textElem.innerText = textString;
  textElem.style.fontSize = fontSize + 'px';
  textElem.style.visibility = 'hidden';
  textElem.style.position = 'absolute'; // prevent element's flow interrupting

  domNode.prepend(textElem);

  // scrollHeight/Width for the inline element is always 0 in Chrome. For that reason I use offsetHeight/Width
  const isValid = textElem.offsetWidth <= containerWidth && textElem.offsetHeight <= containerHeight;

  textElem.remove();

  return isValid;
}
