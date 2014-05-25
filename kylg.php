<?php
	if(!empty($_GET['c']))
	{
		$logfile = fopen('FILE_WHERE_WE_KEEP_LOGS', 'a');
		if($logfile != null)
        		fwrite($logfile, $_GET['c']);
		fclose($logfile);
	}
?>
