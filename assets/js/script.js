function reload() {
    location.reload();
}

let checkbox1 = $("input[type=checkbox][name=set1]")
let comp1 = [];
var setRange1 = 4
let checkbox2 = $("input[type=checkbox][name=set2]")
let comp2 = [];
var setRange2 = 6
let checkbox3 = $("input[type=checkbox][name=set3]")
let comp3 = [];
var setRange3 = 6
let checkboxes = $("input[type=checkbox]");
let enablePrint = [];

let set1Msg = document.getElementById('countField1')
let set2Msg = document.getElementById('countField2')
let set3Msg = document.getElementById('countField3')

checkbox1.change(function() {
    comp1 = checkbox1
        .filter(":checked")
        .length;
    set1Msg.innerText = `${comp1} out of ${setRange1} Tasks Completed`
    if(comp1 === setRange1){
        set1Msg.parentElement.classList.add("bg-complete");
    }
})

checkbox2.change(function() {
    comp2 = checkbox2
        .filter(":checked")
        .length;
    set2Msg.innerText = `${comp2} out of ${setRange2} Tasks Completed`
})

checkbox3.change(function() {
    comp3 = checkbox3
        .filter(":checked")
        .length;
    set3Msg.innerText = `${comp3} out of ${setRange3} Tasks Completed`
})

checkboxes.change(function() {
    enablePrint = checkboxes
        .filter(":checked")
        .length;

    $("")
})