// const bandsState = [{
//     title: 'Radiohead',
//     striked: false
// }, {
//     title: 'Porcupine Tree',
//     striked: true
// }]

let bandsState = []

const render = (state) => {
    return state.reduce((acc, todo, index) => {
        const classString = todo.striked ? 'class = "striked"': ''
        return acc + `<li ${classString} data-index="${index}" > ${todo.title} </li>`
    }, '')
}

const paint = function () {
    const html = render(bandsState)
   Document.getElementById('list').innerHTML = html
}

Document.getElementById("addButton").addEventListener('click', e => {
    const inputText = Document.getElementById('inputBox').value
    bandsState.push({
        title: inputText,
        striked: false
    })
    paint()
})

Document.getElementById('list').addEventListener('click', e => {
    const index = e.target.dataset.index
    bandsState[index].striked = !bandsState[index].striked
    paint()
})

Document.getElementById('clearButton').addEventListener('click', e => {
    bandsState = bandsState.filter(band => !band.striked)
    paint()
})