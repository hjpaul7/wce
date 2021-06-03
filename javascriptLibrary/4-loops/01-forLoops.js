for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Challenge, using a for loop count to 20 by 2
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// challenge count from 0, going down by 2, to -24
for (let i = 0; i >= -24; i -= 2) {
  console.log(i);
}

// challenge using a for loop, go through a name and display each letter individually
let name = "hustin";
for (i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// challenge write for loop that adds up all numbers from 1-50 (should equal 1275)
sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(sum);
