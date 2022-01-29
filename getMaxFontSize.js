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
