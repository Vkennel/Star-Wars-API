
function fetchData() {
    fetch("https://swapi.dev/api/people")
    .then(response => {
        if(!response.ok) {
            throw Error("Error");
        }
        return response.json(); 
    })
    .then(data => {
        const html = data.results.map((user, i) => {
            let hideButton = document.getElementById(`${i}`)
            
             return `
            <div class='user'>
            <p><img src="/new pic/Coruscant Guards by OrangeSavannah on DeviantArt.png" height="300" width="300"></p>
             <p id=${i}>Name: ${user.name}</p>
             <p>Gender: ${user.gender}</p>
             <p>Height: ${user.height}</p>
            </div>
            `
        }
            
            ).join('');
            
            document.querySelector('#app')
            .insertAdjacentHTML("afterbegin", html);

    })
    .catch(error => {
        console.log(error);
    });

}
fetchData();