
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


// function getMaxFontSize(textStr, node) {
//   let smallest = 1;
//   let largest = node.clientHeight;
//   while (smallest <= largest) {
//       const mid = parseInt((smallest + largest) / 2);
//       if (doesFit(textStr, node, mid)) {
//           smallest = mid + 1;
//       }
//       else {
//           largest = mid - 1;
//       }
//   }
//   return largest;
// }
