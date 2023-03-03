var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temporary"] = 1] = "Temporary";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temporary;
console.log(employeeStatus);
