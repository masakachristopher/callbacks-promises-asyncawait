const button = document.querySelector('button');
const div = document.querySelector('div')


const setText = text => div.textContent = text;

const checkAuth = callback =>{
    setText('Checking auth...');
    setTimeout(()=>{
        callback(true);
    }, 2000);
}

const fetchUser = callback =>{
    setText('Fetching user...');
    setTimeout(()=>{
        callback({name : "CHRIS"})
    }, 2000)
}
button.addEventListener('click', ()=>{
    checkAuth(auth =>{
        if(auth){
            fetchUser(user =>{
                setText(user.name)
            })
        }
    })
})