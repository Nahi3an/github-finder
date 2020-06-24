const userNameInput = document.getElementById('username');

/**
 * AJAX & XHR 
*/

/*
const profile = new Profile();
const repos = new Repos();

const ui = new UI();

userNameInput.addEventListener('keyup',(e)=>{

//get user name
const userNameTxt = e.target.value;

if(userNameTxt !== ''){
 
  profile.get(userNameTxt, function(err,response){

  if(err){

    ui.showAlert('User Not Found!', 'alert alert-danger text-center');

  }else{

      const user = JSON.parse(response)
      ui.showProfile(user);
      repos.get(userNameTxt, function(err, response){
      if(err){

        console.log(response);

      }
      else{

        const repos = JSON.parse(response);
        ui.showRepos(repos);
       }
      });
    }});
  }
else{

 ui.clearProfile();

}
})*/



const github = new Github();
const ui = new UI();

/**
 * Using Fetch , Promises
 */

/*userNameInput.addEventListener('keyup',function(e){
  
  const userNameTxt = e.target.value;

  if(userNameTxt!==''){
  //Sending user name to fetch
    github.getUserProfile(userNameTxt)
    .then((profile)=>{
      
      if(profile.message){

        ui.showAlert('User Not Found!', 'alert alert-danger text-center');
      
      }
      else{

        ui.showProfile(profile);

        github.getUserRepos(userNameTxt)
        .then((repos)=>{

         console.log(repos);
         ui.showRepos(repos);

        })
        .catch((error)=>{

          console.log(error);
        })
        }
      })
    .catch((error)=>{

      console.log(error);

    })
  }
  else{
    
    ui.clearProfile();

  }
}) */


/**
 * Using Async Await 
*/

userNameInput.addEventListener('keyup',function(e){

  const userNameTxt = e.target.value;

  if(userNameTxt!==''){

    github.getUserInfo(userNameTxt)
    .then(data=>{

     

      if(data.profile.message){

        ui.showAlert('User Not Found!', 'alert alert-danger text-center');

      }else{

        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        
      }
    })

  }
  else{
        ui.clearProfile();
        
  }


})