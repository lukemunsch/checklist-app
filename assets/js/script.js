function reload() {
    location.reload();
}

let checkbox1 = $("input[type=checkbox][name=set1]");
let comp1 = [];
var setRange1 = 4;
let checkbox2 = $("input[type=checkbox][name=set2]");
let comp2 = [];
var setRange2 = 6;
let checkbox3 = $("input[type=checkbox][name=set3]");
let comp3 = [];
var setRange3 = 6;
let checkboxes = $("input[type=checkbox]");
let enablePrint = [];


var totalCheckboxes = setRange1 + setRange2 + setRange3;


let set1Msg = document.getElementById('countField1');
let set1Container = document.getElementById('complete1');
let set2Msg = document.getElementById('countField2');
let set2Container = document.getElementById('complete2');
let set3Msg = document.getElementById('countField3');
let set3Container = document.getElementById('complete3');


checkbox1.change(function() {
    comp1 = checkbox1
        .filter(":checked")
        .length;
    set1Msg.innerText = `${comp1} out of ${setRange1} Tasks Completed`;
    if(comp1 !== setRange1){;
        set1Container.classList.add("bg-incomplete");
        set1Container.classList.remove("bg-complete");
    };
    if(comp1 === setRange1){
        set1Container.classList.remove("bg-incomplete");
        set1Container.classList.add("bg-complete");
    };
})

checkbox2.change(function() {
    comp2 = checkbox2
        .filter(":checked")
        .length;
    set2Msg.innerText = `${comp2} out of ${setRange2} Tasks Completed`;
    if(comp2 !== setRange2){;
        set2Container.classList.add("bg-incomplete");
        set2Container.classList.remove("bg-complete");
    };
    if(comp2 === setRange2){
        set2Container.classList.remove("bg-incomplete");
        set2Container.classList.add("bg-complete");
    };
})

checkbox3.change(function() {
    comp3 = checkbox3
        .filter(":checked")
        .length;
    set3Msg.innerText = `${comp3} out of ${setRange3} Tasks Completed`;
    if(comp3 !== setRange3){;
        set3Container.classList.add("bg-incomplete");
        set3Container.classList.remove("bg-complete");
    };
    if(comp3 === setRange3){
        set3Container.classList.remove("bg-incomplete");
        set3Container.classList.add("bg-complete");
    };
})

checkboxes.change(function() {
    enablePrint = checkboxes
        .filter(":checked")
        .length;

    if(enablePrint === totalCheckboxes){
        set3Msg.innerText = `All Tasks have been Completed`;
        $("#completeField").classList.remove("bg-disabled");
        $("#completeField").classList.add("bg-complete");
    } else {
        $("#completeField").classList.add("bg-disabled");
        $("#completeField").classList.remove("bg-complete");
    }
})