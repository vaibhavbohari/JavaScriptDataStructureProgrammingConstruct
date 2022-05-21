//1.Find Max and Min Die Roll
let dieRollCountMap = new Map();
dieRollCountMap.set(1, 0);
dieRollCountMap.set(2, 0);
dieRollCountMap.set(3, 0);
dieRollCountMap.set(4, 0);
dieRollCountMap.set(5, 0);
dieRollCountMap.set(6, 0);

while (Array.from(dieRollCountMap.values()).includes(10) != true) {
    let roll = (Math.floor(Math.random() * 10) % 6) + 1;
    let value = dieRollCountMap.get(roll);
    dieRollCountMap.set(roll, value + 1);
}
//console.log(dieRollCountMap);
let minRollValue = Math.min(...dieRollCountMap.values());

for (let [key, value] of dieRollCountMap) {
    if (value == 10) {
        console.log("Maximum rolled number :" + key);
    }
    if (value == minRollValue) {
        console.log("Minimum rolled number :" + key);
    }
}

//2.Individuals with birth in same month
let monthMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]);

for(let i = 1; i <= 50; i++){
let month = (Math.floor(Math.random() * 100) % 12) + 1;
let count = monthMap.get(month);
monthMap.set(month, ++count);
}
console.log(monthMap);