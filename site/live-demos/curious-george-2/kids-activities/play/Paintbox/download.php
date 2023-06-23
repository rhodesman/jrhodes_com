<?php
/* this file is no longer used, but it is here as a reference for the donwload script */
$encoded_image = isset($_POST['image']) ? $_POST['image'] : false;
$image = $encoded_image ? base64_decode($encoded_image) : false;

if (!$image) {
  /* the error image sould be a 570x458 png image with a generic error message */
  $image = file_get_contents(realpath(dirname(__FILE__)) . '/images/download-error.png');
}

/* generate a random filename, so that if the same user saves multiple images won't have to type a new name */
$chars = "bcdfghjklmnpqrstvwxyz123456789";
$rand = '';
for($i=0, $len=strlen($chars); $i<4; $i++) {
	$rand .= $chars[rand(0, $len-1)];
}
$filename = 'curious-george-' . $rand . '.png';

header('Content-Disposition: attachment; filename="' . $filename . '"');
header("Content-Type: image/png");
echo $image;
