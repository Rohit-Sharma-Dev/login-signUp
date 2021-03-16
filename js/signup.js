function signUp(){
    var user={}
    user['firstname'] =document.querySelector("#firstname");
    user['lastname'] =document.querySelector("#lastname");
    user['dob'] =document.querySelector("#dob");
    user['email'] =document.querySelector("#email");
    user['password'] =document.querySelector("#password");
    user['cpassword'] =document.querySelector("#cpassword");
    user['image'] =document.querySelector("#image");


    var information=window.localStorage("info",user);
  
}

console.log(signUp());
