

<template>
    
      <div class="row">
        <nav class="col navbar navbar-expand-lg navbar-light c">
    <div class="container">
    <a class="navbar-brand" href="#">Marl-agency</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul v-for="item in menu" class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light"  :href="item.url" > {{item.declaration}}</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menu: [
          { declaration: 'Solution', url: '',  icon :'./img/solution.png'},
          { declaration: 'Projets', url: '',  icon :'./img/project.png'},
          { declaration: 'A propos', url: '' , icon :'./img/propos.png'},
          { declaration: 'Blog', url: '',  icon :'./img/logo.png'},
          { declaration: 'Contacter-nous', url: '',  icon :'./img/tel.png'},
        ],
      
      };
    }
    }
  
 
  </script>
  
  <style scoped>
  .row nav .navbar-brand::first-letter {
    font-family: 'Dancing Script', cursive;
    text-transform: lowercase;
    font-size: 70px;
    color:  rgb(245, 245, 245);
  }
  .row nav .navbar-brand::first-line
  {
    color: rgb(245, 245, 245);
    font-size: medium;
  }
  .navbar-collapse ul li
  {
    padding: 25px;
  }
  .navbar-collapse
  {
    position:relative;
    padding-left: 200px;
  }
  nav ul li
  {
    font-size: larger;
    font-style:normal;
    font-weight: lighter;
  }
  nav ul li a:hover
  {
  
    border-bottom: 3px white solid;
    padding-top: 2px;
    border-radius:10px;
    text-shadow:lightgrey ;
    opacity: 0.9;
    transition :color 0.2s ease-out;
    
  }
  nav 
  {
    background-color:#0C356A;
  }

  </style>
  