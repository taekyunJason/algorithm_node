function count(str) {
  let numP = 0;
  let numY = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "P" || str[i] == "p") numP++;
    else if (str[i] == "Y" || str[i] == "y") numY++;
  }
  numY == numP ? console.log(true) : console.log(false);
  if ((numP == 0) | (numY == 0)) console.log(true);
}

count("PyY");
