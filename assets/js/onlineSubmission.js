let studentNameGrade = [];

function validateInput(){
    console.log("Validating Input");
    var checkSub = document.getElementById("subjectInput").value;
    var checkName = document.getElementById("nameInput").value;
    var checkGrade = document.getElementById("gradeInput").value;

   if(checkSub === "" || checkSub === null){
        console.log("Invalid Subject");
        return false;
    } else if (checkName === "" || checkName === null){
        console.log("Invalid Name");
        return false;
    } else if (checkGrade === "" || checkGrade === null) {
        console.log("Invalid Grade");
        return false;
    } else {
        console.log(checkSub + checkName + checkGrade);
        return true;
    }
}

function resetTextFields(){
    document.getElementById("subjectInput").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("gradeInput").value = "";
}


function updtStudentNameGrade(name, subject, grade){
    console.log("Updating Student Name, Subject and Grade")
    // var result = document.getElementById("studentTable");

    //reset table content
    if(studentNameGrade == 1 || studentNameGrade == 0){
        document.getElementById("gradeList").innerHTML = "";
        result.innerHTML = "";
    }
    
    //display items 
    var ul = document.getElementById("gradeList");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(name + " - " + subject + "(" + grade + ")"));

    li.setAttribute("id", name);
    ul.appendChild(li);
    
}

function addStudentToList(){
    var nameInput = document.getElementById("nameInput").value;
    var gradeInput = document.getElementById("gradeInput").value;
    var subjectInput = document.getElementById("subjectInput").value;

    if(validateInput()){
        var item = [nameInput, subjectInput, gradeInput];

        studentNameGrade.push(item);

        console.log(studentNameGrade);

        updtStudentNameGrade(nameInput, subjectInput, gradeInput);
        resetTextFields();
        
    } else {
        return false;
    }
    
}
