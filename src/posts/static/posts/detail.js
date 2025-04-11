console.log('Hello from detail.js')

const backBtn = document.getElementById('back-btn')

backBtn.addEventListener('click', (e) => {
    history.back()
})