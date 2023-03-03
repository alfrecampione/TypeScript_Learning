interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
let employee: Employee = {
    firstName: "Alfredo",
    lastName: "Montero",
    fullName: function (){
        return this.firstName+ " " + this.lastName;
    }
}
console.log(employee.fullName())