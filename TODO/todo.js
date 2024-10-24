const element = document.querySelector(".add")
const form = document.querySelector("form")
const input = document.querySelector("input")

function handler(e) {
    e.preventDefault()

    const button = document.createElement('button')
    button.innerText = 'X'
    button.style.display = 'inline-block'
    button.style.height = '30px'
    button.style.width = '30px'
    button.style.marginLeft = '10px'
    button.style.backgroundColor = '#f44336'  
    button.style.color = 'white'
    button.style.border = 'none'
    button.style.borderRadius = '5px'
    button.style.cursor = 'pointer'


    const label = document.createElement('label')
    label.innerText = input.value
    label.style.display = 'inline-block'
    label.style.marginRight = '100px'
    label.style.fontSize = '16px'
    label.style.verticalAlign = 'middle'


    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.style.marginLeft = '20px'
    checkbox.style.verticalAlign = 'middle'
    checkbox.style.height = '20px'


    const wrapper = document.createElement('div')
    wrapper.style.display = 'flex'
    wrapper.style.marginTop = '30px'
    wrapper.style.alignItems = 'center'
    wrapper.style.marginBottom = '10px'


    wrapper.appendChild(checkbox)
    wrapper.appendChild(label)
    wrapper.appendChild(button)

   
    form.after(wrapper)

   checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
            label.style.textDecoration = 'line-through'
            label.style.textDecorationColor = 'red'
        }
        else{
            label.style.textDecoration = 'none'
        }
   })

   button.addEventListener('click', (e)=>{
        checkbox.remove()
        label.remove()
        button.remove()
   })

   
}

element.addEventListener('click', handler)



