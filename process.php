<?php
// process.php - simple server-side form processing and formatted output
function safe($k){
    return isset($_POST[$k]) ? htmlspecialchars(trim($_POST[$k]), ENT_QUOTES, 'UTF-8') : '';
}
$first = safe('first_name');
$last = safe('last_name');
$email = safe('email');
$phone = safe('phone');
$gender = safe('gender');
$course = safe('course');
$address = nl2br(safe('address'));

// Basic server-side validation
$errors = [];
if(!$first) $errors[] = 'First name is required.';
if(!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email is required.';

if(!empty($errors)){
    echo '<div class="print-window"><div class="print-card"><div class="print-header"><div class="print-title">Submission Errors</div></div><div class="small-muted"><ul>';
    foreach($errors as $e){ echo '<li>'.htmlspecialchars($e).'</li>'; }
    echo '</ul></div></div></div>';
    exit;
}

// Build formatted HTML output (this will be injected back into the page by AJAX)
$output = '<div class="print-window">';
$output .= '<div class="print-card">';
$output .= '<div class="print-header"><div class="print-title">Registration Details</div><div class="small-muted">Submitted: '.date('d M Y H:i').'</div></div>';
$output .= '<div class="print-row"><strong>Name:</strong> '.($first.' '.($last ? $last : '')).'</div>';
$output .= '<div class="print-row"><strong>Email:</strong> '.$email.'</div>';
if($phone) $output .= '<div class="print-row"><strong>Phone:</strong> '.$phone.'</div>';
if($gender) $output .= '<div class="print-row"><strong>Gender:</strong> '.$gender.'</div>';
if($course) $output .= '<div class="print-row"><strong>Course:</strong> '.$course.'</div>';
if($address) $output .= '<div class="print-row"><strong>Address:</strong> '.$address.'</div>';
$output .= '</div></div>';

echo $output;
?>