const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findUserByUsername(users, username){
    return users.find(function(user){
        return user.username === username;
    })
}

function removeUser(users, username){
    foundIdx = users.findIndex(function(user){
        return user.username === username;
    })
    if(foundIdx === -1) return;

    return users.splice(foundIdx, 1)[0];
}