function reload() {
    location.reload();
}

let checkbox1 = $("input[type=checkbox][name=set1]")
let comp1 = [];
let checkbox2 = $("input[type=checkbox][name=set2]")
let comp2 = [];
let checkbox3 = $("input[type=checkbox][name=set3]")
let comp3 = [];
let checkboxes = $("input[type=checkbox]");
let enablePrint = [];

checkbox1.change(function() {
    comp1 = checkbox1
        .filter(":checked")
        .length;

    $("")
    console.log(comp1, "out of 4 Tasks Completed")
})

checkbox2.change(function() {
    comp2 = checkbox2
        .filter(":checked")
        .length;

    console.log(comp2)
})

checkbox3.change(function() {
    comp3 = checkbox3
        .filter(":checked")
        .length;

    $("")
})

checkboxes.change(function() {
    enablePrint = checkboxes
        .filter(":checked")
        .length;

    $("")
})