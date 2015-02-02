<?php
$privacyHtml = file_get_contents('http://www.cmsignition.co.za/cpa/privacy.html');
$replace = '<strong>' . $_SERVER['HTTP_HOST'] . '</strong>';
$privacyHtml = str_replace('[website]', $replace,$privacyHtml);
echo $privacyHtml;