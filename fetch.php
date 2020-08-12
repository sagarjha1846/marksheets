<?php

if(isset($_POST["filter"]))  
{

    $con=mysqli_connect("localhost","root","","wisdomtest");
      // Check connection
    if (mysqli_connect_errno())

    {

        echo "Failed to connect to MySQL: " . mysqli_connect_error();

    }

    $sql = "
    SELECT `StudentNo`, `NameofCandidate`, `Registration`, `Grade`, `Gender`, `Nameofschool`, `DateofBirth`, `CityofResidence`, `Dateandtimeoftest`, `CountryofResidence`, `Extratimeassistance`, `QuestionNo`, `TimeSpentonquestion`, `Scoreifcorrect`, `Scoreifincorrect`, `Attemptstatus`, `Whatyoumarked`, `CorrectAnswer`, `Outcome`, `Yourscore` FROM score WHERE StudentNo = '".$_POST["filter"]."' 
    ";
   
    $result = mysqli_query($con,$sql);

    $rows = array();
    
    while($r = mysqli_fetch_array($result)) {
    
        $rows[] = $r;
    
    }
    
    echo json_encode($rows);

    mysqli_close($con);
}
?>
