<?php
 
if (!function_exists('role')) {
    /**
     * Returns a human readable file size
     *
     * @param integer $bytes
     * Bytes contains the size of the bytes to convert
     *
     * @param integer $decimals
     * Number of decimal places to be returned
     *
     * @return string a string in human readable format
     *
     * */
    function role($num)
    {
       switch ($num) {
           case 1:
               return 'Admin';
               break;
           case 2: 
                return 'Author';
           default:
                return 'User';
               break;
       }
    }
}