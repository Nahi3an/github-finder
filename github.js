// class GitHub{
//   constructor(){

//     this.client_id = 'a6cd4bff870bd92556c6';
//     this.client_secret = 'b9c9f03edeccffef430d610403931b18ccf566a2';

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


function Github(){

  this.client_id = 'a6cd4bff870bd92556c6';
  this.client_secret = 'b9c9f03edeccffef430d610403931b18ccf566a2';
  this.xhr = new XMLHttpRequest();
  
}

Github.prototype.get = function(user,callback){


  this.xhr.open('GET', `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`, true);


  this.xhr.onload = function(){


    if(this.status===200){

      console.log(this.responseText);

      callback(false, this.responseText);

    }
    else{

      callback(true, 'There is an error!');

    }
  }
 
  this.xhr.send();
}