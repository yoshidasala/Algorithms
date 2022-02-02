function prettyHTML(string, styles) {
  styles.sort((first, second) => (first[0] > second[0] ? 1 : -1));
  const hash = new Map();
  for (let i = 0; i < styles.length; i++) {
    const [start, end, tag] = styles[i];
    if (!hash.has(start)) {
      hash.set(start, [`<${tag}>`]);
    } else {
      hash.get(start).push(`<${tag}>`);
    }

    for (let [index, value] of hash) {
      if (index > start && index <= end) {
        hash.get(index).unshift(`</${tag}>`);
        hash.get(index).push(`<${tag}>`);
      }
    }

    if (!hash.has(end + 1)) {
      hash.set(end + 1, [`</${tag}>`]);
    } else {
      hash.get(end + 1).unshift(`</${tag}>`);
    }
  }

  const arr = [];
  for (let k = 0; k < string.length; k++) {
    if (isNaN(string[k])) {
      arr.push(string[k]);
    } else {
      arr.push(" " + string[k + 1]);
      k += 1;
    }
  }

  let html = "";
  for (let idx = 0; idx < arr.length; idx++) {
    html += hash.has(idx) ? hash.get(idx).join("") + arr[idx] : arr[idx];
  }
  html += hash.get(arr.length).join("");
  return html;
}
