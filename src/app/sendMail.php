<?php

header("Access-Control-Allow-Origin: https://alpay-karacabey.de");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Preflight beantworten
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Nur POST zulassen
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Allow: POST, OPTIONS", true, 405);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ==== JSON einlesen & validieren ====
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    http_response_code(422);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Bitte Name, gültige E-Mail und Nachricht angeben.']);
    exit;
}

// ==== PHPMailer laden ====
require __DIR__ . '/vendor/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/vendor/PHPMailer/src/SMTP.php';
require __DIR__ . '/vendor/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // ==== SMTP (ALL-INKL) ====
    $mail->isSMTP();
    $mail->Host       = 'w02085b7.kasserver.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'noreply@alpay-karacabey.de';
    $mail->Password   = '8b6Prfy7ZgEGwNGYxwWV';        
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
    $mail->Port       = 587;                           
    $mail->CharSet    = 'UTF-8';

    // ==== Absender/Empfänger ====
    $mail->setFrom('noreply@alpay-karacabey.de', 'Kontaktformular');
    $mail->addAddress('alpay.karacabey@hotmail.com');       
    $mail->addReplyTo($email, $name);                       

    // ==== Inhalt ====
    $mail->isHTML(true);
    $mail->Subject = "Kontaktformular von {$name} <{$email}>";
    $mail->Body    = "<h3>Neue Kontaktanfrage</h3>"
                    . "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>"
                    . "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>"
                    . "<p><strong>Nachricht:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";
    $mail->AltBody = "Neue Kontaktanfrage\n\nName: {$name}\nEmail: {$email}\n\nNachricht:\n{$message}";

    $mail->send();

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'SMTP-Fehler: ' . $mail->ErrorInfo]);
}
