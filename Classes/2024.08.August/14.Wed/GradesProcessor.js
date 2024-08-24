/*

studentProfile = [ NAME:string, GRADES:array, AVERAGE:number, STATUS:string ]

*/
////////////////////
let names = [
    "Hannah Marsh",
    "Ariel Clay",
    "Debbie Holloway",
    "Emil Hubbard",
    "Geraldine Carter",
    "Buddy Mack",
    "Sadie Higgins",
    "Raleigh Norton",
    "Josh Rowland",
    "Maximo Sutton"
];

let studentGrades = [];
// Here we add an array of grades to each student grades
for (let pos = 0; pos < names.length; pos++) {

    let grades = [];
    let sum = 0;
    let average = 0;
    for (let i = 0; i < 5; i++) {

        // Here we assign a random number from 50 to 100
        grades[i] = Math.floor(Math.random()*100);
        // console.log(typeof grades[i])
        // console.log("The type of grade["+`${i}`+"] is: " + typeof grades[i]);
        sum = sum + grades[i];
        // console.log("The type of sum is: " + typeof sum);

        if ( (i+1) == 7){
            average = Math.floor(sum/grades.length);
            console.log("Grades average is: " + average);
        }
    }
    studentGrades[pos] = grades;
    // console.log("Total grades added: " + grades.length)
}
console.table(studentGrades);

let studentDatabase = [];

// create_student_profile(names[0],studentGrades[0]);
// console.log(studentDatabase);

for (let pos = 0; pos < names.length; pos++) {
    create_student_profile(names[pos],studentGrades[pos])
}

// console.log(`
//     Amount of grades: ${studentDatabase[0][0][4]}
//     Average: ${studentDatabase[0][1][2]}
//     Student ID: ${studentDatabase[2][0]+1}
//     `)
// console.table(studentDatabase[0])

/*

Access to:
studentDatabase[id][0][4] - Grades array size
studentDatabase[is][1][0] - Student Name
studentDatabase[id][1][1] - Grades Array
studentDatabase[id][1][2] - Average
studentDatabase[id][1][3] - Status

*/

function get_grades(id) {
    return studentDatabase[id][1][1];
}

function set_grades(id,gradesArray) {
    studentDatabase[id][1][1] = gradesArray;
}

function set_average(id,average) {
    studentDatabase[id][1][2] = average;
}

function get_average(id) {
    return studentDatabase[id][1][2];
}

function set_status(id,status) {
    studentDatabase[id][1][3] = status;
}

function get_status(id) {
    return studentDatabase[id][1][3]
}

// Creates all Student tables
for (let pos = 0; pos < studentDatabase.length; pos++){

    let spanTableElement = document.createElement("SPAN");
    spanTableElement.setAttribute("id", `student-id-${studentDatabase[pos][0]}`);
    document.getElementById("div-container").appendChild(spanTableElement);

    // Creates #student-profile-table element inside #div-container element
    var tableElement = document.createElement("TABLE");
    tableElement.setAttribute("id", `student-profile-table-${studentDatabase[pos][0]}`);
    document.getElementById(`student-id-${studentDatabase[pos][0]}`).appendChild(tableElement);

    // NAME row creation
    var theadNameElement = document.createElement("THEAD");
    theadNameElement.setAttribute("id", `thead-name-${studentDatabase[pos][0]}`);
    document.getElementById(`student-profile-table-${studentDatabase[pos][0]}`).appendChild(theadNameElement);

    var trElement = document.createElement("TR");
    trElement.setAttribute("id", `tr-name-${studentDatabase[pos][0]}`);
    document.getElementById(`thead-name-${studentDatabase[pos][0]}`).appendChild(trElement);

    var thElement = document.createElement("TH");
    var thText = document.createTextNode("NAME");
    thElement.setAttribute("id", `th-name-${studentDatabase[pos][0]}`);
    thElement.append(thText);
    document.getElementById(`tr-name-${studentDatabase[pos][0]}`).appendChild(thElement);

    var tdElement = document.createElement("TD");
    var tdText = document.createTextNode(studentDatabase[pos][1][0]);
    tdElement.setAttribute("colspan", `${studentDatabase[pos][1][1].length}`);
    tdElement.setAttribute("id", `td-name-${studentDatabase[pos][0]}`);
    tdElement.append(tdText);
    document.getElementById(`tr-name-${studentDatabase[pos][0]}`).appendChild(tdElement);

    // Grades Row Creation
    var theadGradesElement = document.createElement("THEAD");
    theadGradesElement.setAttribute("id", `thead-grades-${studentDatabase[pos][0]}`);
    document.getElementById(`student-profile-table-${studentDatabase[pos][0]}`).appendChild(theadGradesElement);

    var trElement = document.createElement("TR");
    trElement.setAttribute("id", `tr-grades-${studentDatabase[pos][0]}`);
    document.getElementById(`thead-grades-${studentDatabase[pos][0]}`).appendChild(trElement);

    var thElement = document.createElement("TH");
    var thText = document.createTextNode("GRADES");
    thElement.setAttribute("id", `th-grades-${studentDatabase[pos][0]}`);
    thElement.append(thText);
    document.getElementById(`tr-grades-${studentDatabase[pos][0]}`).appendChild(thElement);

    for (let i = 0; i < studentDatabase[pos][1][1].length; i++){
        var tdElement = document.createElement("TD");
        var tdText = document.createTextNode(`${studentDatabase[pos][1][1][i]}`);    
        tdElement.setAttribute("id", `td-grades-${studentDatabase[pos][0]}`);
        tdElement.append(tdText);
        document.getElementById(`tr-grades-${studentDatabase[pos][0]}`).appendChild(tdElement);
    }

    // Average Row Creation
    var theadAverageElement = document.createElement("THEAD");
    theadAverageElement.setAttribute("id", `thead-average-${studentDatabase[pos][0]}`);
    document.getElementById(`student-profile-table-${studentDatabase[pos][0]}`).appendChild(theadAverageElement);

    var trElement = document.createElement("TR");
    trElement.setAttribute("id", `tr-average-${studentDatabase[pos][0]}`);
    document.getElementById(`thead-average-${studentDatabase[pos][0]}`).appendChild(trElement);

    var thElement = document.createElement("TH");
    var thText = document.createTextNode("AVERAGE");
    thElement.setAttribute("id", `th-average-${studentDatabase[pos][0]}`);
    thElement.append(thText);
    document.getElementById(`tr-average-${studentDatabase[pos][0]}`).appendChild(thElement);

    var tdElement = document.createElement("TD");
    var tdText = document.createTextNode(`${studentDatabase[pos][1][2]}`);
    tdElement.setAttribute("colspan", `${studentDatabase[pos][1][1].length}`);
    tdElement.setAttribute("id", `td-average-${studentDatabase[pos][0]}`);
    tdElement.append(tdText);
    document.getElementById(`tr-average-${studentDatabase[pos][0]}`).appendChild(tdElement);

    // Status Row Creation
    var theadStatusElement = document.createElement("THEAD");
    theadStatusElement.setAttribute("id", `thead-status-${studentDatabase[pos][0]}`);
    document.getElementById(`student-profile-table-${studentDatabase[pos][0]}`).appendChild(theadStatusElement);

    var trElement = document.createElement("TR");
    trElement.setAttribute("id", `tr-status-${studentDatabase[pos][0]}`);
    document.getElementById(`thead-status-${studentDatabase[pos][0]}`).appendChild(trElement);

    var thElement = document.createElement("TH");
    var thText = document.createTextNode("STATUS");
    thElement.setAttribute("id", `th-status-${studentDatabase[pos][0]}`);
    thElement.append(thText);
    document.getElementById(`tr-status-${studentDatabase[pos][0]}`).appendChild(thElement);

    var tdElement = document.createElement("TD");
    var tdText = document.createTextNode(`${studentDatabase[pos][1][3]}`);
    tdElement.setAttribute("colspan", `${studentDatabase[pos][1][1].length}`);
    tdElement.setAttribute("id", `td-status-${studentDatabase[pos][0]}`);
    tdElement.append(tdText);
    document.getElementById(`tr-status-${studentDatabase[pos][0]}`).appendChild(tdElement);

    //Edit button elements creation
    var theadEditElement = document.createElement("THEAD");
    theadEditElement.setAttribute("id", `thead-edit-${studentDatabase[pos][0]}`);
    document.getElementById(`student-profile-table-${studentDatabase[pos][0]}`).appendChild(theadEditElement);

    var trElement = document.createElement("TR");
    trElement.setAttribute("id", `tr-edit-${studentDatabase[pos][0]}`);
    document.getElementById(`thead-edit-${studentDatabase[pos][0]}`).appendChild(trElement);

    var thElement = document.createElement("TH");
    var thText = document.createTextNode("EDIT");
    thElement.setAttribute("id", `th-edit-${studentDatabase[pos][0]}`);
    thElement.append(thText);
    document.getElementById(`tr-edit-${studentDatabase[pos][0]}`).appendChild(thElement);

    var tdElement = document.createElement("TD");    
    tdElement.setAttribute("colspan", `${studentDatabase[pos][1][1].length}`);
    tdElement.setAttribute("id", `td-edit-${studentDatabase[pos][0]}`);
    document.getElementById(`tr-edit-${studentDatabase[pos][0]}`).appendChild(tdElement);

    var ButtonElement = document.createElement("BUTTON");
    var buttonText = document.createTextNode("DEL-LAST");
    ButtonElement.setAttribute("id", `delete-last-button-${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("name", `${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("onClick", "delete_last_grade(this.name)");
    // ButtonElement.setAttribute("colspan", "0");
    ButtonElement.append(buttonText);    
    document.getElementById(`td-edit-${studentDatabase[pos][0]}`).appendChild(ButtonElement);
    
    var ButtonElement = document.createElement("BUTTON");
    var buttonText = document.createTextNode("DEL-FIRST");
    ButtonElement.setAttribute("id", `delete-first-button-${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("name", `${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("onClick", "delete_first_grade(this.name)");
    // ButtonElement.setAttribute("colspan", "0");
    ButtonElement.append(buttonText);    
    document.getElementById(`td-edit-${studentDatabase[pos][0]}`).appendChild(ButtonElement);

    var ButtonElement = document.createElement("BUTTON");
    var buttonText = document.createTextNode("ADD-LAST");
    ButtonElement.setAttribute("id", `add-last-button-${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("name", `${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("onClick", "add_last_grade(this.name)");
    // ButtonElement.setAttribute("colspan", "2");
    ButtonElement.append(buttonText);    
    document.getElementById(`td-edit-${studentDatabase[pos][0]}`).appendChild(ButtonElement);

    var ButtonElement = document.createElement("BUTTON");
    var buttonText = document.createTextNode("ADD-FIRST");
    ButtonElement.setAttribute("id", `add-last-button-${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("name", `${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("onClick", "add_first_grade(this.name)");
    // ButtonElement.setAttribute("colspan", "2");
    ButtonElement.append(buttonText);    
    document.getElementById(`td-edit-${studentDatabase[pos][0]}`).appendChild(ButtonElement);

    var ButtonElement = document.createElement("BUTTON");
    var buttonText = document.createTextNode("SORT");
    ButtonElement.setAttribute("id", `sort-button-${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("name", `${studentDatabase[pos][0]}`);
    ButtonElement.setAttribute("value", "desc");
    ButtonElement.setAttribute("onClick", "sort_grades(this.name,this.value)");
    // ButtonElement.setAttribute("colspan", "2");
    ButtonElement.append(buttonText);    
    document.getElementById(`td-edit-${studentDatabase[pos][0]}`).appendChild(ButtonElement);

    update_status_count();
}


function delete_last_grade(id) {
    // alert(`Before deleting last grade: [${studentDatabase[id][1][1]}]`)
    if(studentDatabase[id][1][1].length == 1){
        alert("CAN'T DELETE MORE GRADES");
        //document.getElementById("delete-last-button-"+id).setAttribute("disabled", "disabled");
    }
    else {
        //document.getElementById("delete-last-button-"+id).removeAttribute("disabled");
        studentDatabase[id][1][1].pop();
        // alert(`After deleting last grade: [${studentDatabase[id][1][1]}]`)
        update_student_profile(id);
    }
}

function add_last_grade(id) {
    // alert(`Before deleting last grade: [${studentDatabase[id][1][1]}]`)
    if(studentDatabase[id][1][1].length == 8){
        alert("REACHED MAXIMUM GRADES AMOUNT");
    }
    
    else{
        studentDatabase[id][1][1].push(Math.floor(Math.random()*100));
        // alert(`After deleting last grade: [${studentDatabase[id][1][1]}]`)
        update_student_profile(id);
    }    
}

function delete_first_grade(id) {
    // alert(`Before deleting last grade: [${studentDatabase[id][1][1]}]`)
    if(studentDatabase[id][1][1].length == 1){
        alert("CAN'T DELETE MORE GRADES");
    }
    else {
        studentDatabase[id][1][1].shift();
        // alert(`After deleting last grade: [${studentDatabase[id][1][1]}]`)
        update_student_profile(id);
    }
}

function add_first_grade(id) {
    // alert(`Before deleting last grade: [${studentDatabase[id][1][1]}]`)
    if(studentDatabase[id][1][1].length == 8){
        alert("REACHED MAXIMUM GRADES AMOUNT");
    }
    
    else{
        studentDatabase[id][1][1].unshift(Math.floor(Math.random()*100));
        // alert(`After deleting last grade: [${studentDatabase[id][1][1]}]`)
        update_student_profile(id);
    }    
}

function sort_grades(id,order) {
    
    let gradesArray = get_grades(id);

    if (order == "desc") {  
        // The function inside sort() is needed when sorting numeric values      
        gradesArray.sort(function(a, b){return a-b});
        document.getElementById("sort-button-"+id).setAttribute("value", "asce");
    }

    else if (order == "asce"){
        // The function inside reverse() is needed when sorting numeric values
        gradesArray.sort(function(a, b){return b-a});
        document.getElementById("sort-button-"+id).setAttribute("value", "desc");
    }

    set_grades(id,gradesArray);
    update_grades_row(id);
}

// Updates the student profile in the Database
function update_student_profile(id) {
    let gradesAverage = calculate_grades_average(studentDatabase[id][1][1]);
    let status = is_approved(gradesAverage);
    set_average(id,gradesAverage);
    set_status(id,status);
    update_student_table(id)
}

function update_grades_row(id) {

    let element = document.getElementById("tr-grades-"+id);
    // Removes all elements within an element.
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }

    let thElement = document.createElement("TH");
    let thText = document.createTextNode("GRADES");
    thElement.setAttribute("id", "th-grades-"+id);
    thElement.append(thText);
    document.getElementById("tr-grades-"+id).appendChild(thElement);

    for (let i = 0; i < studentDatabase[id][1][1].length; i++){
        var tdElement = document.createElement("TD");
        var tdText = document.createTextNode(`${studentDatabase[id][1][1][i]}`);    
        tdElement.setAttribute("id", `td-grades-${studentDatabase[id][0]}`);
        tdElement.append(tdText);
        document.getElementById(`tr-grades-${studentDatabase[id][0]}`).appendChild(tdElement);
    }
}

function update_student_table(id) {
    
    document.getElementById("td-name-"+id).setAttribute("colspan", `${studentDatabase[id][1][1].length}`);    

    update_grades_row(id);

    document.getElementById("td-average-"+id).innerHTML = get_average(id);
    document.getElementById("td-average-"+id).setAttribute("colspan", `${studentDatabase[id][1][1].length}`);

    document.getElementById("td-status-"+id).innerHTML = get_status(id);

    update_status_count();

    document.getElementById("td-status-"+id).setAttribute("colspan", `${studentDatabase[id][1][1].length}`); 

    document.getElementById("td-edit-"+id).setAttribute("colspan", `${studentDatabase[id][1][1].length}`);
}

// Updates the counter of the ammount of students that approved or not
function update_status_count(){
    let easyCakeCount = 0;
    let goodEnoughCount = 0;
    let survivedCount = 0;
    let ripCount = 0;

    for (let pos = 0; pos < 10; pos++) {
        if ( get_status(pos) == "Easy Cake?") {
            easyCakeCount += 1;
        }

        if ( get_status(pos) == "Good Enough") {
            goodEnoughCount += 1;
        }

        if ( get_status(pos) == "Barely Survived") {
            survivedCount += 1;
        }

        if ( get_status(pos) == "R.I.P.") {
            ripCount += 1;
        }
    }
    document.getElementById("easy-cake").innerHTML = `Easy Cake: ${easyCakeCount}`;
    document.getElementById("good-enough").innerHTML = `Good Enough: ${goodEnoughCount}`;
    document.getElementById("survived").innerHTML = `Barely Survived: ${survivedCount}`;
    document.getElementById("rip").innerHTML = `R.I.P.: ${ripCount}`;
}


/*


studentProfile = [ NAME:string, GRADES:array, AVERAGE:number, STATUS:string ]

*/
// let a = [["NAME","GRADES","AVERAGE","STATUS"],["Fulano Smith",[100,100,100,100],100,"Approved"]]
// console.log(a[1][1].length)
// console.table([["NAME","GRADES","AVERAGE","STATUS"],["Fulano Smith",[100,100,100,100],100,"Approved"]]);


function create_student_profile(studentName,grades) {    
    // console.log(`
    //     Recieved student data...
    //     -----------------------------------
    //     Name: ${studentName}
    //     Grades: ${grades}
    //     -----------------------------------
    //     -----------------------------------
    //     `)

    let studentID = studentDatabase.length;        
    let gradesAverage = calculate_grades_average(grades);

    // console.log(`
    //     Calculating student average...
    //     -----------------------------------
    //     Average: ${gradesAverage}
    //     Approved?: ${is_approved(gradesAverage)}
    //     -----------------------------------
    //     -----------------------------------
    //     `)
    
    let studentData = [studentName,grades,gradesAverage,is_approved(gradesAverage)];

    // console.log(`
    //     Merging student data cmoplete
    //     -----------------------------------
    //     -----------------------------------
    //     `)

    let studentProfile = [studentID,studentData];

    // console.log(`
    //     Profile created successfully
    //     -----------------------------------        
    //     `)
    // console.table(studentProfile)

    studentDatabase.push(studentProfile)

    // console.log(`
    //     -----------------------------------
    //     -----------------------------------
    //     `)

    // console.log(`
    //     Student added to the database.        
    //     -----------------------------------        
    //     `)
    console.table(studentDatabase)
}

function calculate_grades_average(gradesArray) {
    let sum = 0;
    for (let pos = 0; pos < gradesArray.length; pos++) {
        sum += gradesArray[pos];
    }
    // console.log("Total average of " + gradesArray + " is: " + Math.floor(sum/gradesArray.length));
    return Math.floor(sum/gradesArray.length);
}

// Returns a string indicating if the student approved or not.
function is_approved(average_number) {
    if (average_number >= 60 && average_number <= 69) {
        return "Barely Survived"
    }

    else if (average_number >= 70 && average_number <= 79) {
        return "Good Enough"
    }

    else if (average_number >= 80) {
        return "Easy Cake?"
    }

    else {
        return "R.I.P."
    }
}