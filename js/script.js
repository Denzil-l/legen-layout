const wrapper = document.querySelector('.wrapper')

setInterval(()=>{
    
    let x = getComputedStyle(wrapper).width
    let y = parseInt(x)*0.75 + 'px'
    wrapper.style.height = y
    console.log(x)
    console.log(y)
},1)



