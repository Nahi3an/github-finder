
//Init Github
const profile = new Profile();

const repos = new Repos();
//Init UI
const ui = new UI();

/// Search Input

const userNameInput = document.getElementById('username');


userNameInput.addEventListener('keyup',(e)=>{

 
  //get user name
const userNameTxt = e.target.value;

if(userNameTxt !== ''){


  profile.get(userNameTxt, function(err,response){

    if(err){

      ui.showAlert('User Not Found!', 'alert alert-danger text-center');

    }
    else{

      const user = JSON.parse(response)
      ui.showProfile(user);

      repos.get(userNameTxt, function(err, response){
      
      if(err){

        console.log(response);

      }
      else{

        // ui.showRepos(response);
        const repos = JSON.parse(response);
        ui.showRepos(repos);
        

      }
      
      });


    }});



}
else{

  ui.clearProfile();


}


  /* if(userNameTxt !== ''){
    
    //make http call
    github.getUser(userNameTxt)
    .then(data =>{

      const msg = data.profile.message;
      if( msg === 'Not Found'){
       
        //Show Alert 
        // ui.showAlert('User Not Found!',['text-center','text-danger mt-5']);
        ui.showAlert('User Not Found!', 'alert alert-dismissible alert-danger')

      }
      else{

        //Passing all the profile info
        const profile = data.profile;
        const repos = data.repos;
        // console.log(data.profile);

        ui.showProfile(profile)
        ui.showRepos(repos);
        
        
      }

     
    });

  }
  else{

     ui.clearProfile();
  } */
  
})