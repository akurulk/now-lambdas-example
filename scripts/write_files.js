const fs = require('fs');

for (let lc=0; lc<50; lc++) {
  fs.writeFileSync(`page${lc+1}.php`, `<marquee>This is page${lc+1}</marquee>`)
}