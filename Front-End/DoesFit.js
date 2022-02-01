function doesFit(textStr, node, fontSize) {
  // create another element with the same height and width
  const tmp = document.createElement("div");
  tmp.style.height = `${node.clientHeight}px`;
  tmp.style.width = `${node.clientWidth}px`;
  tmp.style.fontSize = `${fontSize}px`;
  tmp.innerText = textStr;
  tmp.style.border = "thin solid black";
  tmp.style.marginLeft = -(tmp.style.height + 10);
  doesFit.ref.append(tmp);

  console.log(
    `scrollHeight: ${tmp.scrollHeight}, scrollWidth: ${tmp.scrollWidth}, clientHeight: ${tmp.clientHeight}, clientWidth: ${tmp.clientWidth}`
  );

  return (
    tmp.scrollHeight === tmp.clientHeight && tmp.scrollWidth === tmp.clientWidth
  );
}

// doesFit.ref = document.querySelector(".main");

// function doesFit_DC(textStr, node, fontSize) {
//   const w = node.clientWidth;
//   const h = node.clientHeight;
//   const c = document.createElement("canvas");
//   c.style.overflowY = node.style.overflowY;
//   c.style.overflowX = node.style.overflowX;
//   var ctx = c.getContext("2d");
//   ctx.font = `${fontSize}px`;
//   const { width } = ctx.measureText(textStr);
//   console.log(width, w);
//   if (width > w || fontSize*width > h)  {
//     return false;
//   }
//   return true;
// }


// function doesFit(textStr, node, fontSize) {
//   // create another element with the same height and width
//   const tmp = document.createElement('div');
//   tmp.style.height = `${node.clientHeight}px`;
//   tmp.style.width = `${node.clientWidth}px`;
//   tmp.style.fontSize = `${fontSize}px`;
//   tmp.style.visibility = "hidden";
//   tmp.innerText = textStr;
//   document.body.append(tmp);

//   return tmp.scrollHeight === tmp.clientHeight && tmp.scrollWidth === tmp.clientWidth;
// }


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
