
const titleEl = document.querySelector('.titleEl')
const textEl = document.querySelector('.textEl')
const authorEl = document.querySelector('.authorEl')
const dateEl = document.querySelector('.dateEl')

const buttonEl = document.querySelector('.btnEl')

let news = document.querySelector('.block');


buttonEl.onclick = function(){

    if(titleEl.value.length === 0){
        return
    }
    if(textEl.value.length === 0){
        return
    }
    if(authorEl.value.length === 0){
        return
    }
    if(dateEl.value.length === 0){
        return
    }

    news.insertAdjacentHTML('beforeend', `

    <div class="block1">

        <div class="mini-block">

            <div class="title">${titleEl.value}</div>
            <div class="date">${dateEl.value}</div>

        </div>

        <p class="text">${textEl.value}</p>

        <div class="mini-block1">

            <p class="name">${authorEl.value}</p>
            <p class="id"></p>

        </div>

    </div>

    `)

    titleEl.value = ""
    textEl.value = ""
    dateEl.value = ""
    authorEl.value = ""

    event.preventDefault()

}    


