const separateThousandsWithCommas = (x) => {
  let rightPart = "";
  let toDo = "";
  let checker = 0;
  x = x.toString();
  if (x[0] == "-") {
    checker = 1;
    let one = x.toString();
    let two = one.split("");
    two.shift();
    x = two.join("");
  }
  if (x.includes("e")) {
    return x;
  }
  if (!Number(x) || x === "Infinity") {
    return x;
  }

  if (x.includes(".")) {
    for (let a = 0; a < x.length; a++) {
      if (x[a] !== ".") {
        toDo += x[a];
      } else {
        rightPart = x.slice(a);
        break;
      }
    }
  } else {
    toDo = x;
  }
  let toDoArray = toDo.split("");
  let sievedArray = [];
  let len = toDoArray.length;
  for (let i = 0; i < len; i++) {
    sievedArray.push(toDoArray[i]);
    if ((len - (i + 1)) % 3 === 0 && i !== len - 1) {
      sievedArray.push(",");
    }
  }
  if (checker) {
    return "-" + sievedArray.join("") + rightPart;
  }
  return sievedArray.join("") + rightPart;
};

export default separateThousandsWithCommas;
