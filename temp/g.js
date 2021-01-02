const fetchData = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};

var tasks = [1000, 500, 700, 300];

const startup = async () => {
  let total = 0;
  for (let value of tasks) {
    let val = await fetchData(value);
    total = total + val;
    console.log(total);
  }
  console.log(total);
}

const startup2 = async () => {
  let total = 0;
  tasks.forEach(async (value) => {
    let val = await fetchData(value)
    total = total + val;
    console.log(total)
  })
  console.log(total);
}

startup()