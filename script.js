const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    //if we get past the # of circles we have then reset the currentActive to #of circles
    if (currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    //if we get past the # of circles then reset the currentActive to #of circles
    if (currentActive < 1){
        currentActive = 1
    }
    update()
})


function update(){

    circles.forEach((circle, index) =>{
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    //al cl 2/4 = 50%, 3/4 = 75, 4/4 = 100
    console.log(actives.length, circles.length)
    // 1/3 = 33.33, 2/3 = 66.66, 3/3 = 100
    console.log(((actives.length-1)/(circles.length-1))*100 + '%')

    //setting the width as per above adjustment
    progress.style.width = ((actives.length-1)/(circles.length-1))*100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    }else if (currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled= false
        next.disabled = false
    }
}