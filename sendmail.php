<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (!empty($_POST['name']) && (!empty($_POST['email']) || !empty($_POST['comment']))){
    if (isset($_POST['name'])) {
      if (!empty($_POST['name'])){
        $name = strip_tags($_POST['name']) . "<br>";
        $nameFieldset = "<b>Name:</b>";
       }
    }
    if (isset($_POST['email'])) {
      if (!empty($_POST['email'])){
        $email = strip_tags($_POST['email']) . "<br>";
        $emailFieldset = "<b>Email:</b>";
    }
    }
    if (isset($_POST['comment'])) {
      if (!empty($_POST['comment'])){
        $comment = strip_tags($_POST['comment']) . "<br>";
        $commentFieldset = "<b>Comment:</b>";
      }
    }
    if (isset($_POST['formInfo'])) {
      if (!empty($_POST['formInfo'])){
        $formInfo = strip_tags($_POST['formInfo']);
        $formInfoFieldset = "<b>Letter subject:</b>";
      }
    }

    $to = "pupszp@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom = "test@gmail.com"; /*Укажите адрес, с которого будет приходить письмо */
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";
    $subject = "$formInfo";
    $message = "$nameFieldset $name
                $emailFieldset $email
                $commentFieldset $comment
                $formInfoFieldset $formInfo";

    $send = mail ($to, $subject, $message, $headers);
        if ($send == 'true') {
            echo '<p class="success">Thank you for your massege!</p>';
        } else {
          echo '<p class="fail"><b>Mistake. Massege does not send!</b></p>';
        }
  } else {
    echo '<p class="fail">Mistake. Fill in all required fields please!</p>';
  }
}

