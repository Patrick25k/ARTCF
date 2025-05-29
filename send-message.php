<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from the form
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Email address to send the message to (replace with your own email!)
    $to = "kwihpatric69@gmail.com"; // Change this email to your own

    // Email content
    $email_subject = "Contact Form: $subject";
    $email_body = "Message sent by: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "<script>alert('Message sent successfully.'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('There was an issue sending the message.'); window.location.href='contact.html';</script>";
    }
} else {
    // Invalid request method
    http_response_code(403);
    echo "Access forbidden.";
}
?>
