
$(document).ready(function(){
                
    function about_student(data){
            
            var StudentNo, NameofCandidate,Registration,Grade,Gender,Nameofschool,DateofBirth,CityofResidence, Dateandtimeoftest,CountryofResidence,	Extratimeassistance,QuestionNo,TimeSpentonquestion,Scoreifcorrect, Scoreifincorrect,Attemptstatus, Whatyoumarked,CorrectAnswer,Outcome,Yourscore;
           
            var temp = [];
            
            for(var x in data){
                
                temp.push(data[x].NameofCandidate);
                
            }
            
            console.log(temp);
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    NameofCandidate = temp[1];
                }
            }
            
            $('#Nameofcandidates').replaceWith('<input id="Nameofcandidates" value='+NameofCandidate+' type="text">');
            
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].Grade);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    Grade = temp[1];
                }
            }
            
            $('#Grade').replaceWith('<input id="Grade" value='+Grade+' type="text">');
            
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].Gender);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    Gender = temp[1];
                }
            }
            
            $('#Gender').replaceWith('<input id="Gender" value='+Gender+' type="text">');
            
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].Nameofschool);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    Nameofschool = temp[1];
                }
            }
            
            $('#SchoolName').replaceWith('<input id="SchoolName" value='+Nameofschool+' type="text">');
           
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].Gender);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    Gender = temp[1];
                }
            }
            
            $('#Gender').replaceWith('<input id="Gender" value='+Gender+' type="text">');
            
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].Registration);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    Registration = temp[1];
                }
            }
            
            $('#RegistrationNos').replaceWith('<input id="RegistrationNos" value='+Registration+' type="text">');
            
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].DateofBirth);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    DateofBirth = temp[1];
                }
            }
            
            $('#Dateofbirth').replaceWith('<input id="Dateofbirth" value='+DateofBirth+' type="text">');
            
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].Dateandtimeoftest);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    Dateandtimeoftest = temp[1];
                }
            }
            
            $('#DateofTest').replaceWith('<input id="DateofTest" value='+Dateandtimeoftest+' type="text">');
            
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].Extratimeassistance);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    Extratimeassistance = temp[1];
                }
            }
            
            $('#ExtraTimeassistance').replaceWith('<input id="ExtraTimeassistance" value='+	Extratimeassistance+' type="text">');
             
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].CountryofResidence);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    CountryofResidence = temp[1];
                }
            }
            
            $('#CountryofResidence').replaceWith('<input id="CountryofResidence" value='+CountryofResidence+' type="text">');
             
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].CityofResidence);
                
            }
            
            for(var x in temp){
                
                if(temp[1]==temp[x]){
                    
                    CityofResidence = temp[1];
                }
            }
            
            $('#CityofResidence').replaceWith('<input id="CityofResidence" value='+CityofResidence+' type="text">');
            
            temp =[];
            
            for(var x in data){
                
                temp.push(data[x].Yourscore);
                
            }
            
            var sum = 0, Percentage , elements = 0;
            
            for(var x in temp){
                
                sum = sum + parseInt(temp[x]);
                
                elements++;
                  
            }
            
            var temp2 =[];
            
            for(var x in data){
                
                temp2.push(data[x].Scoreifcorrect);
                
            }
            
            var sum1 = 0, Percentage;
            
            for(var x in temp2){
                
                sum1 = sum1 + parseInt(temp2[x]);
                  
            }
            
            Percentage = (sum/sum1)*100;
            
            $('#TotalScore').replaceWith('<input id="TotalScore" value='+sum+' type="text">');
            
            $('#YourOverallPercentile').replaceWith('<input id="YourOverallPercentile" value='+Percentage+' type="text">');
            
        }
        
    function create_list(data){
       
            var table = $('#table');
            
            table.html('');
            
            var table_head = $('<tr>');
            
            table_head.append($('<th>').text('Question No'))
            table_head.append($('<th>').text('Time Spent on question (sec)'))
            table_head.append($('<th>').text('Score if correct'))
            table_head.append($('<th>').text('Score if incorrect'))
            table_head.append($('<th>').text('Attempt status'))
            table_head.append($('<th>').text('What you marked'))
            table_head.append($('<th>').text('Correct Answer'))
            table_head.append($('<th>').text('Outcome (Correct/Incorrect/Not Attempted)'))
            table_head.append($('<th>').text('Your Score'))
            table.append(table_head);
          
            for(var x in data){
            
                var tr = $('<tr>');
                tr.append($('<td>').text(data[x].QuestionNo));
                tr.append($('<td>').text(data[x].TimeSpentonquestion));
                tr.append($('<td>').text(data[x].Scoreifcorrect));
                tr.append($('<td>').text(data[x].Scoreifincorrect));
                tr.append($('<td>').text(data[x].Attemptstatus));
                tr.append($('<td>').text(data[x].Whatyoumarked));
                tr.append($('<td>').text(data[x].CorrectAnswer));
                tr.append($('<td>').text(data[x].Outcome));
                tr.append($('<td>').text(data[x].Yourscore));
                table.append(tr);
           
            };
        
        }
        
    function create_graph(data){
            
        var timespent = [];
            
        var questionNo = [];
            
        for(var x in data){
            
            questionNo.push(data[x].QuestionNo);
                
            timespent.push(parseInt(data[x].TimeSpentonquestion));
        }
             
        console.log(timespent)
        // Set up the chart
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'timeVsQuestion',
                backgroundColor: 'aliceblue',
                type: 'column',
                options3d: {
                  enabled: true,
                  alpha: 15,
                  beta: 15,
                  depth: 50,
                  viewDistance: 25
                }
              },
              title: {
                text: 'Time  (sec)'
              },
              subtitle: {
                text: 'Time Vs Question'
              },
              plotOptions: {
                column: {
                  depth: 25
                }
              },
            exporting: {
                enabled: false
            },
            xAxis: {
            categories:questionNo,
            labels: {
              skew3d: true,
              style: {
                fontSize: '16px'
              }
            }
          },
              series: [{
                data: timespent
              }]
            });


    }

    function total_time(data){
            
        var timespent = [];

        var questionNo = [];

        for(var x in data){

            questionNo.push(data[x].QuestionNo);

            timespent.push(parseInt(data[x].TimeSpentonquestion));
        }
        
         Highcharts.chart('timeVsque', {
             chart: {
                 type: 'pie',
                 backgroundColor: 'aliceblue',
                 options3d: {
                     enabled: true,
                    alpha: 45,
                     beta: 0
                 }
             },
             exporting: {
                 enabled: false
             },
             title: {
             
                 text: 'Time spent as a function of total time'
             },
             accessibility: {
                point: {
                  valueSuffix: '%'
                }
              },
              tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  depth: 35,
                  dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                  },
                    showInLegend: true
                }
              },
              series: [{
                type: 'pie',
                name: 'Time Vs Questions',
                data: [

                    [questionNo[0]+':-'+timespent[0],timespent[0]],
                    [questionNo[1]+':-'+timespent[1], timespent[1]],
                    [questionNo[2]+':-'+timespent[2], timespent[2]],
                    [questionNo[3]+':-'+timespent[3], timespent[3]],
                    [questionNo[4]+':-'+timespent[4], timespent[4]],

                ]
              }]
            });
   
        
    }
        
    function AttemptedOrNot(data){
            
            var AttemptedQuestion = [];
            
            var Question = [];

            for(var x in data){
            
                Question.push(data[x].Attemptstatus);
                
            }
            
            var count = 0; 
            
            var encount = 0;
            
            for(var x in Question){
                
                if(Question[x] == 'Attempted'){
                    
                    count++;
                    
                    
                }
                
                else if(Question[x] == 'Unattempted'){
                    
                    encount++;
                   
                }
                
            }
            
            AttemptedQuestion.push(count);
            
            AttemptedQuestion.push(encount);
        
            
        Highcharts.chart('AttemptedorNot', {
          chart: {
            type: 'pie',
              backgroundColor: 'aliceblue',
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            }
          },
             exporting: {
                enabled: false
            },
          title: {
            text: 'Attempts'
          },
          accessibility: {
            point: {
              valueSuffix: '%'
            }
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                enabled: true,
                format: '{point.name}'
              },
                showInLegend: true
            }
          },
          series: [{
            type: 'pie',
            name: 'NO OF ATTEMPTS',
            data: [
                
              ['Attempted Question:-'+AttemptedQuestion[0], AttemptedQuestion[0]],
              ['Unattempted Question:-'+AttemptedQuestion[1], AttemptedQuestion[1]],
              
            ]
          }]
        });
    
          
            
            
        }
        
    function CorrectOrNot(data){
            
            var CorrectQuestion = [];
            
            var Outcome = [];

            for(var x in data){
            
                Outcome.push(data[x].Outcome);
                
            }
            
            var count = 0; 
            
            var encount = 0;
            
            for(var x in Outcome){
                
                if(Outcome[x] == 'Correct'){
                    
                    count++;
                    
                    
                }
                
                else if(Outcome[x] == 'Incorrect'){
                    
                    encount++;
                   
                }
                
            }
            
            CorrectQuestion.push(count);
            
            CorrectQuestion.push(encount);
        
            
        Highcharts.chart('CorrectorNot', {
            chart: {
              type: 'pie',
              backgroundColor: 'aliceblue',
                options3d: {
                  enabled: true,
                  alpha: 45,
                  beta: 0
                }
              },
             exporting: {
                enabled: false
            },
              title: {
                text: 'Accuracy from attempted questions'
              },
              accessibility: {
                point: {
                  valueSuffix: '%'
                }
              },
              tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  depth: 35,
                  dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                  },
                showInLegend: true
                }
              },
              series: [{
                type: 'pie',
                name: 'FROM NO OF ATTEMPTS',
                data: [

                  ['Correct Question:-'+CorrectQuestion[0], CorrectQuestion[0]],
                  ['Incorrect Question:-'+CorrectQuestion[1], CorrectQuestion[1]],

                ]
              }]
            });
    
            
            
    }
      
    function Performance(data){
    
        var CorrectQuestion = [];
            
        var Outcome = [];

        for(var x in data){
            
            Outcome.push(data[x].Outcome);
                
        }
            
        var correct = 0; 
            
        var incorrect = 0;
            
        var Unattempted = 0;
            
        for(var x in Outcome){
                
            if(Outcome[x] == 'Correct'){
                    
                correct++;
                    
                        
            }
                
            else if(Outcome[x] == 'Incorrect'){
                    
                incorrect++;
                   
            }
                
            else if(Outcome[x] == 'Unattempted'){
                    
                Unattempted++;
                   
            }
                
        }
            
        CorrectQuestion.push(correct);
            
        CorrectQuestion.push(incorrect);
            
        CorrectQuestion.push(Unattempted);
         
        Highcharts.chart('Performance', {
          chart: {
            type: 'pie',
              backgroundColor: 'aliceblue',
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            }
          },
             exporting: {
                enabled: false
            },
          title: {
            text: 'Overall performance against the test'
          },
          accessibility: {
            point: {
              valueSuffix: '%'
            }
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                enabled: true,
                format: '{point.name}'
              },
                showInLegend: true
            }
          },
          series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                
              ['Correct Question:-'+CorrectQuestion[0], CorrectQuestion[0]],
              ['Incorrect Question:-'+CorrectQuestion[1], CorrectQuestion[1]],
              ['Unattempted Question:-'+CorrectQuestion[2], CorrectQuestion[2]],
              
            ]
          }]
        });
    }
    
    $('#submit').click(function(){
        
        var filter = $('#RegistrationNo').val();
          
        $.ajax({  

            url:"fetch.php",  

            method:"POST",  

            data:{

                filter:filter,
                 
            },    

            success:function(data){  
                
                var d = JSON.parse(data);
                
                about_student(d);
                
                Performance(d);
                
                CorrectOrNot(d);
                
                AttemptedOrNot(d);
                
                create_graph(d);
                
                create_list(d);
            
                total_time(d)
                
            }  

        }) 
        
        $.ajax({  

            url:"fetch_Student_image.php",  

            method:"POST",  

            data:{

                filter:filter,
                 
            },    

            success:function(data){  
                
                $('#StudentPic').html(data);
            
            }  

        }) 
    })  

})
