const contain = document.getElementById("rootA");

contain.style.width = "200px"
contain.style.height = "200px"
contain.style.border = "solid black"

const short = "hello"
const long = "with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs."

const shorttext = document.createElement("div")
shorttext.innerText = short
contain.append( shorttext )


function DoesFit(textStr,node,fontSize){
  const ele = document.createElement("div")
   ele.style.height = `${node.clientHeight}px`;
   ele.style.width = `${node.clientWidth}px`;
    ele.style.border = 'solid black'
    ele.style.fontSize = `${fontSize}px`;
    // ele.style.visibility = "hidden";
    ele.innerText = textStr;
    document.body.append(ele);

  return ele.scrollHeight === ele.clientHeight && ele.scrollWidth === ele.clientWidth;

}

console.log(DoesFit(short,contain,300))


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
