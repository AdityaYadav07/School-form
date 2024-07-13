function updateCard() {
    document.getElementById("schoolNameVal").innerText = document.getElementById("schoolName").value;
    document.getElementById("studentNameVal").innerText = document.getElementById("studentName").value;
    document.getElementById("dateofBirthVal").innerText = document.getElementById("dateOfBirth").value;
    document.getElementById("classVal").innerText = document.getElementById("class").value;
    document.getElementById("rollNumberVal").innerText = document.getElementById("rollnumber").value;
    document.getElementById("contactnumberVal").innerText = document.getElementById("contactnumber").value;
  }

  function printIdCard(){
    window.print();
  }