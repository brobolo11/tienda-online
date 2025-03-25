<?php
session_start();
session_regenerate_id(true);
if (isset($_SESSION['username'])) {
    echo "1";
} else {
    echo "0";
}
?>