
function UI(){
  this.profile = document.getElementById('profile');

}

UI.prototype.showProfile = function(user){
    
    console.log(user);

    this.profile.innerHTML = 
    `<div class = "card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank"
        class="btn btn-primary btn-block mb-3">View Profile</a>
        </div> 
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repositories: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>

          <br><br>

          <ul class="list-group">
          <li class="list-group-item">User Name: ${user.login}</li>
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div> 
      </div>
    </div>

    <h4 class="page-heading mb-3">Latest Repositories of <span class ="text-success font-weight-bolder">${user.login}</span></h4>

    <div id="repos" class="text-center">
    </div> ` 
  

}

UI.prototype.showRepos = function(repos){


    let output = '';
    
 
    if(repos.length === 0){
     console.log(repos.length)
      output = 
      `<div class="text-center">
      <h2 class="text-danger">No Repos Found!</h2>
      </div>
      `
      console.log(output);
     
    }
    else{
 
     repos.forEach((repo)=>{
       output += 
       ` <div class="card card-body mb-2 border     border-success">
          <div class="row">
           <div class="col-md-6">
             <a href="${repo.html_url}" target="_blank">${repo.name}</a>
           </div>
           <div class = "col-md-6">
 
           <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
           <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
           <span class="badge badge-success">Forks:${repo.forks_count}</span>
           </div>
           </div>
         </div>
       `
    });}
 
 
  //Show output in UI 
  document.getElementById('repos').innerHTML = output

}

UI.prototype.showAlert = function(msg,className){

  this.profile.innerHTML = 
  `<div class= "${className}">
   <h3>${msg} </h3>
  </div>`

}

 
UI.prototype.clearProfile = function(){

  this.profile.innerHTML = ''

}

// class UI{

//   constructor(){

//     this.profile = document.getElementById('profile');

//   }

//   showProfile(user){
    
//     console.log(user);

//     this.profile.innerHTML = 
//     `<div class = "card card-body mb-3">
//       <div class="row">
//         <div class="col-md-3">
//         <img class="img-fluid mb-2" src="${user.avatar_url}">
//         <a href="${user.html_url}" target="_blank"
//         class="btn btn-primary btn-block mb-3">View Profile</a>
//         </div> 
//         <div class="col-md-9">
//           <span class="badge badge-primary">Public Repositories: ${user.public_repos}</span>
//           <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
//           <span class="badge badge-success">Followers: ${user.followers}</span>
//           <span class="badge badge-info">Following: ${user.following}</span>

//           <br><br>

//           <ul class="list-group">
//           <li class="list-group-item">User Name: ${user.login}</li>
//           <li class="list-group-item">Company: ${user.company}</li>
//           <li class="list-group-item">Blog: ${user.blog}</li>
//           <li class="list-group-item">Location: ${user.location}</li>
//           <li class="list-group-item">Member Since: ${user.created_at}</li>
//           </ul>
//         </div> 
//       </div>
//     </div>

//     <h4 class="page-heading mb-3">Latest Repositories of <span class ="text-success font-weight-bolder">${user.login}</span></h4>

//     <div id="repos" class="text-center">
//     </div> ` 
//   }

//   showRepos(repos){

//    let output = '';
   

//    if(repos.length === 0){
//     console.log(repos.length)
//      output = 
//      `<div class="text-center">
//      <h2 class="text-danger">No Repos Found!</h2>
//      </div>
//      `
//      console.log(output);
    
//    }
//    else{

//     repos.forEach((repo)=>{

//       output += 
//       ` <div class="card card-body mb-2 border     border-success">
//          <div class="row">
//           <div class="col-md-6">
//             <a href="${repo.html_url}" target="_blank">${repo.name}</a>
//           </div>
//           <div class = "col-md-6">

//           <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
//           <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
//           <span class="badge badge-success">Forks:${repo.forks_count}</span>
//           </div>
//           </div>
//         </div>
//       `
//    });


  
//    }


//  //Show output in UI 
//    document.getElementById('repos').innerHTML = output
  

//   }

//   clearProfile(){

//     this.profile.innerHTML = ''

//   }

//   showAlert(msg,className){

  
//     //Alert Simpl
//      this.profile.innerHTML = 
//     `<div class= "${className}">
//      <h3>${msg} </h3>
//     </div>`


//     //Remove Current Alert 
//    /* this.clearAlert();

//     //Create Alert Div
//     const div = document.createElement('div');

//     div.className = className;

//     div.appendChild(document.createTextNode(msg));

//     const container = document.querySelector('.search-container');

//     const search =  document.querySelector('.search');

//     container.insertBefore(div,search);

//     setTimeout(()=>{

//       this.clearAlert();

//     },2000)*/

//   }

//  /* clearAlert(){

//     const currentAlert = document.querySelector('.alert');

//     if(currentAlert){

//       currentAlert.remove();

//     }

//   } */

  

  
// }