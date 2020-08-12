
<?php

$connect = new PDO("mysql:host=localhost;dbname=wisdomtest", "root", "");

$output = '';

if(isset($_POST['filter']) && $_POST['filter'] != '' )
{
   
    $id = $_POST['filter'];
    
    $query = "
    SELECT StudentImage FROM score WHERE StudentNo = $id LIMIT 1
    ";
            
    $statement = $connect->prepare($query);
    
    $statement->execute();

    $result = $statement->fetchAll();

    $total_row = $statement->rowCount();
    
    $output .= '
    <div class="col" id="StudentPic">
    ';
                        
    
    if($total_row > 0)
    {
            
        foreach($result as $row)

        {
            $output .= '
            <img class="StudentLogo" src="data:image/jpeg;base64,'.base64_encode($row['StudentImage'] ).'"/>
            ';
        }

    
    }
    
    $output .= '
    </div>
    ';
    
}

    

echo $output;





?>