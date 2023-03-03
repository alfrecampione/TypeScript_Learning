enum ContractStatus {
    Permanent,
    Temporary,
    Apprentice
}
let employeeStatus: ContractStatus = ContractStatus.Temporary;
console.log(employeeStatus);
interface Employee {
    name: string;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}
type ManagmentEployee = Employee & Manager;
let manager: ManagmentEployee = {
    name: "Jhon",
    age: 30,
    stockPlan: true
}

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 3;//Valid
/*diceRoll = 7;  Invalid*/

let list0: number[] = [1, 2, 3];

let list1: [number, string] = [1, "two"];