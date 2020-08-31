var btn = document.getElementById('btn')
var skip10 = document.getElementById('skip10')
var num = document.getElementById('num')
var digit = document.getElementById('digit')
var rem = document.getElementById('rem')
var quo = document.getElementById('quotient')
var copySpan = document.getElementById('cp')
var counterSpan = document.getElementById('cnt')
var mul = document.getElementById('mul')
var sum = document.getElementById('sum')
var final = document.getElementById('final')
var cnt = document.getElementById('cnt1')
var repoText = document.getElementById('repoText')
var noList = document.getElementById('found')

var main_num = document.getElementById('main-num')
var n_digit = document.getElementById('n-digit')
var rem_p = document.getElementById('rem-p')
var quo_p = document.getElementById('quo-p')
var cpy_p = document.getElementById('cpy-p')
var cnt_p = document.getElementById('cnt-p')
var count_p = document.getElementById('count-p')
var mul_p = document.getElementById('mul-p')
var sum_p = document.getElementById('sum-p')


var i = 1
var copy = 0
var count = 0
var cnt1 = 0

skip10.disabled = true;

skip10.addEventListener('click', () => {
    if(i < 100 - 10){
        reset()
        i += 10
        copy = i - 1
        num.innerHTML = i-1
        getHighlighted().classList.remove('highlighted')
        document.getElementById('line4').classList.add('highlighted')
    }else{
        skip10.disabled = true
    }
})




btn.addEventListener('click',() => {

    var lastHighlighted = getHighlighted()
    var nextHighlighted = lastHighlighted.nextElementSibling
    var divId = lastHighlighted.id
    skip10.disabled = false

    if(divId == 'line3'){
        removeUpdated()
        if(i <= 100){
            num.innerHTML = i
            copy = i
            i = i + 1      
            changeText("Copying Number to copy")
            addUpdated([main_num])
        }else{
            jumpTo('line24', lastHighlighted)
            changeText("Execution complete.")
        }
        
    }
    else if(divId == 'line4'){
        
        putCopy(copy)
        changeText("Calculating total No. of digits in Number")
        removeUpdated()
        addUpdated([cpy_p])
    }
    else if(divId == 'line5'){
        removeUpdated()
        if(!parseInt(copySpan.innerHTML) > 0){
            jumpTo('line9', lastHighlighted)
            changeText("Again copying Number to copy and setting total no. of digits to cnt")
        }
    }
    else if(divId == 'line6'){
        removeUpdated()
        updateCopy()
        addUpdated([cpy_p])
    }
    else if(divId == 'line7'){
        removeUpdated()
        count++
        putCount(count)
        addUpdated([count_p])
    }
    else if(divId == 'line8'){
        removeUpdated()
        jumpTo('line5', lastHighlighted)
        digit.innerHTML = count
        addUpdated([n_digit])
    }
    else if(divId == 'line9'){
        removeUpdated()
        putCopy(copy)
        cnt1 = count
        cnt.innerHTML = cnt1
        changeText("Looping till copy becomes equal to zero ")
        addUpdated([cpy_p, cnt_p])
        
    }
    else if(divId == 'line10'){
        removeUpdated()
        if(!parseInt(copySpan.innerHTML) > 0){
            jumpTo('line20', lastHighlighted)
            changeText("Checking for Armstrong No.")
        }
    }
    else if(divId == 'line11'){
        removeUpdated()
        updateRem()
        changeText("Calculating power")
        addUpdated([rem_p])
    }
    else if(divId == 'line12'){
        removeUpdated()
        if(parseInt(cnt.innerHTML) == 0){
            jumpTo('line16', lastHighlighted)
        }
        
    }
    else if(divId == 'line13'){  
        removeUpdated()
        updateMul()
        addUpdated([mul_p])
    }
    else if(divId == 'line14'){
        removeUpdated()
        cnt1--
        cnt.innerHTML = cnt1
        addUpdated([cnt_p])
    }
    else if(divId == 'line15'){
        removeUpdated()
        jumpTo('line12', lastHighlighted)
    }
    else if(divId == 'line16'){
        
        updateSum()
        changeText("Dividing copy by 10 to get rid of one's place")
        removeUpdated()
        addUpdated([sum_p])
    }
    else if(divId == 'line17'){

        updateCopy()
        changeText("Resetting Multiplication and cnt value for next loop")
        removeUpdated()
        addUpdated([cpy_p])
    }
    else if(divId == 'line18'){
        removeUpdated()
        mul.innerHTML = 1
        cnt1 = count
        cnt.innerHTML = cnt1
        count = 0
        addUpdated([mul_p, cnt_p, count_p])
    }
    else if(divId == 'line19'){
        removeUpdated()
        jumpTo('line10', lastHighlighted)
    }
    else if(divId == 'line20'){
        removeUpdated()
        if(!(parseInt(sum.innerHTML) == parseInt(num.innerHTML))){   
            final.innerHTML = "This is not a Armstrong No."
            jumpTo('line22', lastHighlighted)
        }else{
            changeText("Resetting values")
        }
            
    }
    else if(divId == 'line21'){
        final.innerHTML = "This is a Armstrong No."
        noList.innerHTML +=  num.innerHTML + ', '
    }
    else if(divId == 'line22'){
        sum.innerHTML = 0
        rem.innerHTML = 0
        cnt.innerHTML = 0
        counterSpan.innerHTML = 0
        final.innerHTML = ''
        repoText.innerHTML = ''
       
    }
    else if(divId == 'line23'){
        jumpTo('line3', lastHighlighted)
    }
    else if(divId == 'line25'){
        alert("Program Execution Completed")
        reset()
    }

    if(divId != getHighlighted().id){
        nextHighlighted = getHighlighted()
        nextHighlighted.classList.add('highlighted')
    }
    else{
        nextHighlighted.classList.add('highlighted')
        lastHighlighted.classList.remove('highlighted')
    }

    btn.innerHTML = "Next"
    
})

function getHighlighted(){
    var highlightedDiv = document.getElementsByClassName('highlighted')
    return highlightedDiv[0]
}

function jumpTo(id, lastHighlighted){
    document.getElementById(id).classList.add('highlighted')
    lastHighlighted.classList.remove('highlighted')
}

function putCopy(cp){
    copySpan.innerHTML = cp
}

function putCount(CNT){
    counterSpan.innerHTML = CNT
}

function updateCopy(){
    copySpan.innerHTML = parseInt(parseInt(copySpan.innerHTML) / 10)
}
function updateRem(){
    rem.innerHTML = parseInt(parseInt(copySpan.innerHTML) % 10)
} 

function updateMul(){
    mul.innerHTML = parseInt(parseInt(mul.innerHTML) * parseInt(rem.innerHTML))
}

function updateSum(){
    sum.innerHTML = parseInt(parseInt(sum.innerHTML) + parseInt(mul.innerHTML))
}

function changeText(text){
    repoText.innerHTML = text
}
function reset(){
    mul.innerHTML = 1
    sum.innerHTML = 0
    num.innerHTML = ''
    digit.innerHTML = ''
    counterSpan.innerHTML = 0
    copySpan.innerHTML = ''
    rem.innerHTML = ''
    quo.innerHTML = ''
    final.innerHTML = ''
    cnt.innerHTML = ''
    count = 0
    cnt1 = 0
    repoText.innerHTML = ''
}

function addUpdated(eleList){
    for(var i in eleList) {
        eleList[i].classList.add('updated')
    }
}
function removeUpdated(){
    var updated = document.getElementsByClassName('updated')
    if(updated.length > 0){
        for(var i in updated) {
            updated[i].classList.remove('updated')
        }
    }
    
}


window.onresize = checkWidth
function checkWidth(){
    var width = window.innerWidth
    console.log(width)
    var md_12 = document.getElementsByClassName('col-md-12')
    if(width <= 768){  
        for(var i in md_12){
            md_12[i].parentElement.style.flexDirection = 'column'
        }
    }
    else{
        for(var i in md_12){
            md_12[i].parentElement.style.flexDirection = 'row'
        }
    }
}

checkWidth()