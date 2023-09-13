

<template>
       <div class="heading">
           <h1> Vous aviez une question ou un projet, <span>Nous serions ravi d'en discuter</span> </h1>
       </div>
       <div class="form_control">
               <form action="" post="">
                    <div class="nom">
                         <label for="">Nom:</label>
                    </div>
                    <div class="prenom">
                         <label for="prenom">Prenom:</label>
                    </div>
                    <div class="email">
                              <label for="" >E-amil</label>
                    </div>
                    <div class="tel">
                              <label for="tel">Tel:</label>
                    </div>
                    <div class="msg">
                              <label for="">Message:</label>
                    </div>

                         
               </form>

              
       </div>
       <div class="passwor">
          <i>
               <i>
               <slot name="password_reset"></slot>
               </i>
          </i>
       </div>
       <div class="socialConnect">
          <i>
               <slot name="google_connect"></slot>
          </i>

       </div>


</template>

<style scoped>
          template{
          
               width: 400px;
               height: 300px;
               margin: auto 200px;
               background-color: rgb(243, 253, 232);
          }


</style>