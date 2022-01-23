






doesFit(textString, fontSize, node){
    const w = node.offsetWidth; //614
    const h = node.offsetHeight;// 23
    const canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    context.font = `${fontSize}px`;
  const { width } = context.measureText(textStr);

    if(width > w || fontSize > h){
        return false;
    }
    return true;
}



