<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
	$div='<div class="row"><div class="col-md-4">';
	$div.=generateLink("post.php?id=".${"postId".$number},'<img src="images/'.${"thumb".$number}.'"> '  ,"");
	$div.='</div><div class="col-md-8">';
	$div.='<h2>'.${"title".$number}.'<h2>';
	$div.='<div class="details">Posted by'.generateLink('user.php?id='.${"userId".$number},${"userName".$number},'').'<span class="pull-right">'.${"date".$number}.'</span>';
	$div.='<p>'.constructRating(${"reviewsRating".$number}).''.${"reviewsNum".$number}.'Reviews</p></div>';
	$div.='<p>'.generateLink("post.php?id=".${"postId".$number},'Read more','btn btn-primary btn-sm').'</p>';
	$div.='</div>';
	$div.='</div><hr>';
	echo $div;
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>