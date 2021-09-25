const profileList = (state=[], action) =>{
    var profileState = Object.assign([], state); // to fetch old state value from store
    
    if(action.type==="submitProfile"){
        profileState.push(action.profiledetails);
        
    }
    if(action.type==="remove"){
        profileState.splice(action.index,1);
    }

    return profileState; // list of item from store
}

export default profileList;
