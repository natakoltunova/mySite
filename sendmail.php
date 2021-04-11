<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  //declaration and setting encoding
  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->isHTML(true); //possibility of html tag in a letter

  //who sent the letter
  $mail->setForm('dirtytrick@mail.ru', 'Я-я');
  //to whom to send the letter
  $mail->addAddress('dirtytrick@mail.ru');
  $mail->Subject = 'Хеллоу!';

  //Не хочу?
  $wish = "Хочу!";
  if($_POST['wish'] == "dontwant"){
    $wish = "Нет!"
  }

  //body of letter
  $body = "<h1>Встречайте супер-письмо!</h1>";

  //check "if the field is not empty ..."
  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>'  
  }
  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>'  
  }
  if(trim(!empty($_POST['wish']))){
    $body.='<p><strong>Желание:</strong> '.$wish.'</p>'  
  }
  if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>'  
  }

  //assembled (собранная) variable body is assigned (присваиваем) to the plugin
  $mail->Body = $body;

  //Sending (dispatch handler)
  if (!$mail->send()) {
    $message = 'Ошибка!';
  } else {
    $message = 'Данные отправлены!';
  }

  //form json
  $response = ['message' => $message];

  //return in js
  header('Content-type: application/json');
  echo json_encode($response);
?>










