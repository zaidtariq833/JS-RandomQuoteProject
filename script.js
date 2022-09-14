const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.writer'),
dateModified = document.querySelector('.date'),
dateAdded = document.querySelector('.added')
quoteBtn = document.querySelector('.btn')

quoteBtn.addEventListener('click', function(){
    fetch('http://api.quotable.io/random')
    .then(res => res.json())
    .then (result => {
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        dateModified.innerText = result.dateModified;
        dateAdded.innerText = result.dateAdded;
    })
})

// const quoteText = document.querySelector('.quote'),
// writerChanged = document.querySelector('.writer'),
// dateModification = document.querySelector('.date'),
// dateAdded = document.querySelector('.added')
// quoteBtn = document.querySelector('.btn')

// quoteBtn.addEventListener('click', function(){
//     fetch('http://api.quotable.io/random')
//     .then(res => res.json())
//     .then(result => {
//         quoteText.innerText = result.content;
//         writerChanged.innerText = result.author;
//         dateModification.innerText = result.dateModified;
//         dateAdded.innerText = result.dateAdded; 
//     })
// })