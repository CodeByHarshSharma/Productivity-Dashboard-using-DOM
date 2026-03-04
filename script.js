function openFeatures(){
    let allElems = document.querySelectorAll(".elem")
    let allFullElems = document.querySelectorAll(".fullElem")
    let allFullElemsBackBtn = document.querySelectorAll(".fullElem .back")

    allElems.forEach(function(elem){
        elem.addEventListener('click',function(){
            allFullElems[elem.id].style.display = 'block'
    })
})

    allFullElemsBackBtn.forEach(function(back){
        back.addEventListener('click',function(){
            allFullElems[back.id].style.display = 'none'
    })
})
}

openFeatures();