var diffTotal = 0;
var diff;
var diff2;

function aquireDiff(a){
  while (isNaN(a) || a < 0 || a > 8 || a == null || a ==""){
  a = prompt("Please enter a difficulty rating between 0 and 8 inclusive.");
  diffTotal += Number(a);
} 
}
aquireDiff(diff);
aquireDiff(diff2);

const averageDiff = diffTotal / 2;

var exec;
var execs = [];
const judges = 5;

for(let i = 0; i < judges; i++){
  exec = prompt("Please enter an execution rating between 0 and 10 inclusive.");
  if(isNaN(exec) || exec < 0 || exec > 10 || exec == null || exec == ""){
    break;
  }
  execs.push(exec);
}

execs.sort(function(a, b){return a - b});

const execTotal = Number(execs[1]) + Number(execs[2]) + Number(execs[3]);
const averageExec = execTotal / 3;
const finalScore = averageDiff + averageExec;

if(execs[4]){
  alert(finalScore);
}