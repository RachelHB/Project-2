
//Hide the last question and be taken back to the first welcome page which reloads to clear any data------------

function backtoquiz() {
  document.getElementById("intro").style.display = "inline-block";
  document.getElementById("results").style.display = "none";
  location.reload();
}

//Hides intro page and shows question 1-------------------------------------------------------------------------

function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}


//Hides question 1 and shows question 2 - Validates the input on question 1 - makes sure that at least one radio button is checked--------------------------

function question2() {

  if(document.querySelector('input[name="quest1"]:checked') == null) {
    alert("You need to choose an option!");
    return false;
    } else
        document.getElementById("question1").style.display = "none" ;
        document.getElementById("question2").style.display = "inline-block";
}

//Hides question 2 and shows question 3 - Validates the input on question 2 - makes sure that at least one radio button is checked-------------------------------------------------------------------------

function question3() {

  if(document.querySelector('input[name="quest2"]:checked') == null) {
    alert("You need to choose an option!");
    return false;
    } else
      document.getElementById("question2").style.display = "none";
      document.getElementById("question3").style.display = "inline-block";
}


//Hides question 3 and shows question 4 - Validates the input on question 3 - makes sure that at least one radio button is checked--------------------------------------------------------------------------

function question4() {

  if(document.querySelector('input[name="quest3"]:checked') == null) {
    alert("You need to choose an option!");
    return false;
    } else
      document.getElementById("question3").style.display = "none";
      document.getElementById("question4").style.display = "inline-block";
}

//Hides question 4 and shows question 5 - Validates the input on question 4 - makes sure that at least one radio button is checked--------------------------------------------------------------------------

function question5() {
  
  if(document.querySelector('input[name="quest4"]:checked') == null) {
    alert("You need to choose an option!");
    return false;
    } else
      document.getElementById("question4").style.display = "none";
      document.getElementById("question5").style.display = "inline-block";
}

//Hides question 5 and shows question 6 - Validates the input on question 5 - makes sure that at least one radio button is checked--------------------------------------------------------------------------

function question6() {

  if(document.querySelector('input[name="quest5"]:checked') == null) {
    alert("You need to choose an option!");
    return false;
    } else
      document.getElementById("question5").style.display = "none";
      document.getElementById("question6").style.display = "inline-block";
  
}

//Hides last question and shows teh Results page - Validates the input on question 6 - makes sure that at least one radio button is checked-----------------------------------------------------------------

function results() {

  if(document.querySelector('input[name="quest6"]:checked') == null) {
    alert("You need to choose an option!");
    return false;
    } else
      calculateResults()
      document.getElementById("question6").style.display = "none";
      document.getElementById("results").style.display = "inline-block";
}



//Calculates the Results and displays them-------------------------------------------------------------------------------

function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;       
          break;
      }
    }

  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          break;
      }
  }

  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          break;
      }
  }

  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          break;
      }
  }

  const radios6 = document.querySelectorAll('input[name="quest6"]');
  let q6Value;
  for (const rb of radios6) {
      if (rb.checked) {
          q6Value = rb.value;
          break;
      }
  }


  //Adds the results from each questions together--------------------------------------------------------------------------

  let total = Number(q1Value) + Number(q2Value) +  Number(q3Value) +  Number(q4Value) +  Number(q5Value) +  Number(q6Value);
  let result = total;


  //Depending on how many the user got correct the resutls page will show a result--------------------------------------------------------------------------

  if (result == 1) {
      msg = "You need to watch more Disney!";
  } else if (result == 2) {
      msg = "You may have seen some Disney but not enough!";
  } else if (result == 3) {
      msg = "Good job, but more TV time needed!";
  } else if (result == 4) {
      msg = "You know your stuff but dont be shy when it comes to Disney!";
  } else if (result == 5) {
      msg = "Your a pro but could still improve!";
  } else if (result == 6) {
      msg = "You are a Disney expert! Congratulations!!!";
  } else {
    msg = "Disney? Disney Who?";
  }

  document.getElementById("result").innerHTML = msg

}

