document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter() {
  let character = document.querySelector('input').value.toLowerCase()
  let url = `https://rickandmortyapi.com/api/character/${character}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.image
      document.querySelector('h2').innerText = data.name
      document.querySelector('h3').innerText = data.location.name
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

  let gif = document.querySelector('input').value
  fetch(`http://i.giphy.com/l41lI4bYmcsPJX9Go.gif:${gif}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      // document.querySelector('#card').src = data.data[0].images.large
    })
    .catch(err => {
      ;`error ${err}`
    })
}
