






doesFit(textString, fontSize, node){
    const w = node.clientHeight; //614
    const h = node.offsetHeight;// 23
    const canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
  context.font = `${fontSize}px`;
  //To set the height in the Canvas.
  const { width } = context.measureText(textStr);

    if(width > w || fontSize > h){
        return false;
    }
    return true;
}

// offset height instead of client height. when text spreads into padding, it's also considered an overflow

function getMaxFontSize(textStr, node){
    let left = 1;
    let right = node.offsetHeight;
    while(left <= right){
        const mid = parseInt((left+right)/2);
        if(doesFit(textStr, node, mid)){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return right;
}
