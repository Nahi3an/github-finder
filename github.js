/**
 * Using Ajax & XHR 
 */
/* function Profile(){

  this.client_id = 'a6cd4bff870bd92556c6';
  this.client_secret = 'b9c9f03edeccffef430d610403931b18ccf566a2';
  this.pro = new XMLHttpRequest();
  
}

function Repos(){

  this.client_id = 'a6cd4bff870bd92556c6';
  this.client_secret = 'b9c9f03edeccffef430d610403931b18ccf566a2';
  this.repo = new XMLHttpRequest();

  this.repos_amount = 5;
  this.repos_sort = 'created: asc';
  
}

Repos.prototype.get = function(user,callback){

  this.repo.open('GET',`https://api.github.com/users/${user}/repos?per_page=${this.repos_amount}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

  this.repo.onload = function(){

    if(this.status = 200){

      callback(false,this.responseText);

      
    }
    else{

      callback(true,'No Repos Found');

    }

  }

  this.repo.send(); 



}


Profile.prototype.get = function(user,callback){


  this.pro.open('GET', `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`, true);

  

  this.pro.onload = function(){


    if(this.status===200){

      console.log(this.responseText);

      callback(false, this.responseText);

    }
    else{

      callback(true, 'There is an error!');

    }
  }
 
  this.pro.send();
} */


/**
 * Using Fetch and Promises
 */
/* class Github{
  
  constructor(){

    this.client_id = 'a6cd4bff870bd92556c6';
    this.client_secret = 'b9c9f03edeccffef430d610403931b18ccf566a2';
    this.repos_amount = 5;
    this.repos_sort = 'created: asc';
    
  }

  //to get the user profile
  getUserProfile(user){

    const promise = new Promise((resolve,reject)=>{

      fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .then(res => res.json())
      .then(profile => resolve(profile))
      .catch(error => reject(error));
    });

    return promise;

  }

  //To get the repos
  getUserRepos(user){

    const promise = new Promise((resolve,reject)=>{

      fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_amount}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .then(res => res.json())
      .then(repos => resolve(repos))
      .catch(error => reject(error));
    });

    return promise;

  }

}
*/

/**
 * Using Async And Await 
*/

class Github{

  constructor(){

    this.client_id = 'a6cd4bff870bd92556c6';
    this.client_secret = 'b9c9f03edeccffef430d610403931b18ccf566a2';

  }

 async getUserInfo(user){

    const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`); 

    const repoRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_amount}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileRes.json();
    
    const repos = await repoRes.json();

    return {profile, repos};


  }
}



// class GitHub{
//   constructor(){

//     
//     this.repos_amount = 5;
//     this.repos_sort = 'created: asc';

//   }

//   //get user method
//   async getUser(user){

//     const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

//     const reposResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_amount}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

//     const profile = await profileResponse.json();
//     const repos = await reposResponse.json();

//     //Passing As An Object : Promise always returns an object 
//     return {
//       profile, repos
//     };
//   }

// }


