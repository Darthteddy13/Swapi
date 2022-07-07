


const button = document.querySelector('button')


const clicked = () =>
{
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)

    .then((res) =>
    {
        console.log(res.data.results[0].residents)
        res.data.results[0].residents.forEach(element => 
            {
            axios.get(element)

            .then((res) => {
               let h = document.createElement(`h2`);
                h.textContent = res.data.name;
                console.log(h.textcontent);
               let body = document.querySelector(`body`);
                body.appendChild(h);
            })
        
        });
    })
}

button.addEventListener(`click`, clicked)