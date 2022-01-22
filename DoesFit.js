






doesFit(textString, fontSize, node){
    const w = node.offsetWidth; //614
    const h = node.offsetHeight;// 23
    const canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    context.font = `${size}px`;
  const { width } = context.measureText(textStr);

    if(width > w || size > h){
        return false;
    }
    return true;
}



