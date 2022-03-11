function star(a, b) {
  let star = "*".repeat(a) + "\n";
  for (let i = 0; i < b; i++) {
    console.log(star);
  }
}

star(5, 3);
