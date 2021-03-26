const button = document.querySelector('button');
const div = document.querySelector('div')


const setText = text => div.textContent = text;

const checkAuth = () =>{
    return new Promise((resolve, reject)=>{
        setText('Checking auth...');
        setTimeout(()=>{
            resolve(true);
        }, 2000);
    })
  
}

const fetchUser = () =>{
    return new Promise((resolve, reject)=>{
        setText('Fetching user...');
        setTimeout(()=>{
        resolve({name : "Chris"})
    }, 2000)
    })
    
}
button.addEventListener('click', ()=>{
    checkAuth()
        .then(
            isAuth =>{
                if(isAuth){
                    return fetchUser()
                }
            }
        )
        .then(
            user => setText(user.name)
        )
})