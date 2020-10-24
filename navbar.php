<?php

echo '
<header class="nav">
    <a href="#" class="logo">NomeSito</a>
    <ul>
      <li><a href="index.php" title="homepage">Home</a></li>
      <li><a href="vetrina.php" title="vetrina">Abbonamento</a></li>
       <li><a href="vetrina.php" title="vetrina">I nostri siti</a></li>
       <li><a href="about.php" title="contatti">Contattaci</a></li>
    </ul>
</header>
<script type="text/javascript">
  window.addEventListener("scroll", function(){
   var header =document.querySelector("header");
   header.classList.toggle("sticky",window.ScrollY>0); 
  })
</script>
';


?>