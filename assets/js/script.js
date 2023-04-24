// Set up reload of page to remove all checks
function reload() {
    location.reload();
}

// Back to top button function
$('.btt-link').click(function () {
    window.scrollTo(0, 0);
    console.log("Scrolling to top of page...")
})


// MAIN CHECKBOX SCRIPT
// ----- setting up the custom variables ---

let checkbox1 = $("input[type=checkbox][name=set1]");
let comp1 = [];

let checkbox2 = $("input[type=checkbox][name=set2]");
let comp2 = [];

let checkbox3 = $("input[type=checkbox][name=set3]");
let comp3 = [];

let checkboxes = $("input[type=checkbox]");
let enablePrint = [];

// ----- Needs to match the number of tasks on main page -----
const setRange1 = $("input[type=checkbox][name=set1").length;
const setRange2 = $("input[type=checkbox][name=set2").length;
const setRange3 = $("input[type=checkbox][name=set3").length;

// ----- sets total number of tasks for print to enable -----
var totalCheckboxes = setRange1 + setRange2 + setRange3;

// ----- Identifies fields that need to be updated but our functions -----
let set1Msg = document.getElementById('countField1');
let set1Container = document.getElementById('complete1');
let set2Msg = document.getElementById('countField2');
let set2Container = document.getElementById('complete2');
let set3Msg = document.getElementById('countField3');
let set3Container = document.getElementById('complete3');
let printButton = document.getElementById('completeField');
let printText = document.getElementById('completeText')


// ----- setting up the functions for first set of tasks -----
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
        console.log("Completed tasks in Set 1");
    };
})


// ----- setting up the functions for second set of tasks -----
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
        console.log("Completed tasks in Set 2");
    };
})

// ----- setting up the functions for third set of tasks -----
checkbox3.change(function() {
    comp3 = checkbox3
        .filter(":checked")
        .length;
    set3Msg.innerText = `${comp3} out of ${setRange3} Tasks Completed`;
    if(comp3 !== setRange3){;
        set3Container.classList.add("bg-incomplete");
        set3Container.classList.remove("bg-complete");
    } else {
        set3Container.classList.remove("bg-incomplete");
        set3Container.classList.add("bg-complete");
        console.log("Completed tasks in Set 3");
    };
})


// ----- Function for final footer print button -----
checkboxes.change(function() {
    enablePrint = checkboxes
        .filter(":checked")
        .length;

    if(enablePrint !== totalCheckboxes){
        printText.innerText = `Print disabled - Complete all tasks first`;
        printButton.classList.remove("bg-complete");
        printButton.classList.add("bg-disabled");
        printButton.classList.add("disabled");
    } else {
        printText.innerText = `All Tasks Complete - Print Report!`
        printButton.classList.remove("bg-disabled");
        printButton.classList.remove("disabled");
        printButton.classList.add("bg-complete");
        console.log("You have completed all tasks");
        console.log("Print has been enabled!")
    }
})


// Function to set the text when page is loaded
function setText() {
    set1Msg.innerText = `0 out of ${setRange1} Tasks Completed`;
    set2Msg.innerText = `0 out of ${setRange2} Tasks Completed`;
    set3Msg.innerText = `0 out of ${setRange3} Tasks Completed`;
    printText.innerText = `Print disabled - Complete all tasks first`;
    console.log("Clearing all completed tasks...")
    console.log("Tasks cleared!")
    console.log("Tasks have been reset - Begin tasks...");
}

window.onload = setText();
