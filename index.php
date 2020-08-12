<?php

//database_connection.php

$connect = new PDO("mysql:host=localhost;dbname=wisdomtest", "root", "");

?>

<!doctype html>
<html lang="en">
 
    <head>
         
        <!-- Required meta tags -->
        
        <meta charset="utf-8">
        
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
        <link rel="stylesheet" href="css/style.css">
        
        <script src="js/jquery-3.5.1.min.js"></script>
       
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>
        
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
    
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js"></script>
      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
        
        <script src="js/score.js"></script>
        
        <script src="js/Download.js"></script>
        
        <script src="js/save_Result.js"></script>
        
        <script src="https://code.highcharts.com/highcharts.js"></script>
      
        <script src="https://code.highcharts.com/highcharts-3d.js"></script>
        
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        
        <script src="https://code.highcharts.com/modules/export-data.js">
        </script>
        
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>


        <title>Hello, world!</title>
        
    
    </head>
    
    <body>
    
        <h1>WISDOM TEST AND RESULT PORTAL!</h1>
        
        <hr class="mb-5">
        
        <div class="container">
            
            <h1>Download Marksheet</h1>
            
            <hr class="mb-5">
        
            <div class="row">
                
                <div class="col-sm-3">
         
                </div>
        
                <div class="col-sm-3">
                    
                    <label class="label">Registration No:-</label>
        
                    <input id="RegistrationNo" type="text">
            
                </div>
                
                
                <div class="col-sm-3">
         
                    <button class="btn btn-success" id="submit">Submit</button>
            
                </div>
                
                <div class="col-sm-3">
                    
                    
            
                </div>
               
            </div>
            
        </div>
        
        <div class="container mainContainer" id="Result">

            <div class="container">

                <h1>Wisdom Tests and Math Challenge</h1>

                <hr class="mb-5">
                
                <div class="row">

                    <div class="col">
                        
                    </div>
                    
                    <div class="col">
                        
                        <img class="logo" src="res/1200px-Olympic_rings_without_rims.svg.webp">

                    </div>
                    
                    <div class="col" id="StudentPic">
                        
                    </div>
                    
                </div>

                <div class="row">

                    <div class="col">

                        <label>Name of candidate:</label>

                        <input id="Nameofcandidates" type="text"><br>

                        <label>Grade:</label>

                        <input id="Grade" type="text"><br>

                        <label>School Name:</label>

                        <input id="SchoolName" type="text"><br>

                        <label>City of Residence:</label>

                        <input id="CityofResidence" type="text"><br>

                        <label>Country of Residence:</label>

                        <input id="CountryofResidence" type="text"><br>

                    </div>

                    <div class="col">

                        <label>Registration No:</label>

                        <input id="RegistrationNos" type="text"><br>

                        <label>Gender:</label>

                        <input id="Gender" type="text"><br>

                        <label>Date of birth:</label>

                        <input id="Dateofbirth" type="text"><br>

                        <label>Date of Test:</label>

                        <input id="DateofTest" type="text"><br>

                        <label>Extra Time assistance:</label>

                        <input id="ExtraTimeassistance" type="text"><br>

                    </div>

                </div>

            </div>

            <div class="container">

                <div class="row">

                    <div class="container">

                        <h1>Student Performances</h1>

                        <hr class="mb-5">

                        <div class="table-responsive">

                            <table class="table table-striped table-hover table-bordered" id="table">

                            </table>

                        </div>
                        
                        <div class="row">

                    <div class="col">

                        <label>Total Score:</label>

                        <input id="TotalScore" type="text"><br>

                    </div>

                    <div class="col">

                        <label>Your overall percentile:</label>

                        <input id="YourOverallPercentile" type="text"><br>

                    </div>

                </div>

                    </div>

                </div>

            </div>

            <hr class="mb-5">

            <div class="container">

                <div class="row">

                    <div class="col">

                        <div id="timeVsQuestion" style="height: 500px;"></div>

                    </div>

                    <div class="col">

                        <div id="timeVsque" style="height: 500px;"></div>

                    </div>

                </div>

            </div>

            <hr class="mb-5">

            <div class="container">

                <div class="row">

                    <div class="col">

                        <div id="AttemptedorNot" style="height: 500px;"></div>

                    </div>

                    <div class="col">

                        <div id="CorrectorNot" style="height: 500px;"></div>

                    </div>

                </div>

            </div>

            <hr class="mb-5">

            <div class="container">

                <div id="Performance" style="height: 500px;"></div>

            </div>

        </div>
       
        <div class="container">
            
            <button class="btn btn-lg btn-success" id="download">Download Score Card</button>
            
            <button class="btn btn-lg btn-success" onclick="generate();">Save Score Card As Image</button>

        </div>
        
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        
        

    </body>

</html>