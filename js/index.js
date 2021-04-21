function fetchGithubByValue(value){
       fetch (`https://api.github.com/search/users?q=${value}`,{
           headers: {
               "Accecpt": "application/vnd.github.v3+json"
           }
       })
       .then(res => res.json())
       .then(json => json.items.forEach(user) => {
          appendLi(createLi(user))
       }))
}

const submitBtn = document.getElementById ('submit-button')
const searchBox = document.getElementById ('search')
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchGithubByValue(searchBox.value)
})

function createLi (user){

}

function appendLi(li){
    userList.append(li)
}