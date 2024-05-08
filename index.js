import inquirer from "inquirer";
//First number prompt
let step1 = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "pleaase enter your first number:",
    },
]);
//Second number prompt
let step2 = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: "please enter second number:",
    },
]);
//Print to get output
let output = step1.num1 + step2.num2;
console.log(output);
