<?php
$termsHtml = file_get_contents('http://www.cmsignition.co.za/cpa/terms.html');
$replace = '<strong>' . $_SERVER['HTTP_HOST'] . '</strong>';
$termsHtml = str_replace('[website]', $replace,$termsHtml);
echo $termsHtml;