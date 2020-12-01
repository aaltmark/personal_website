document.addEventListener("DOMContentLoaded", () => {
    // projects details 
    const sidebar = document.querySelector('.sidebar')
    const title = document.querySelector('.video-container__title')
    const description = document.querySelector('.video-container__description')
    const video = document.querySelector('.video-container__video')

    sidebar.addEventListener("click", (e) => {
        if (e.target.innerText === 'ALT INSTRUCTION' || e.target.id === 'alt-instruction') {
            title.innerText = 'Alt Instruction'
            description.innerText = "Alt Instruction is an application to be ski and snowboard instructors directly online. It was my final project for Flatiron School's immersive Software Engineering program. The application is built with a Rails backend and a React/Redux frontened."
            video.src = "https://www.youtube.com/embed/qh4bfjuxxvQ"
        }
        if (e.target.innerText === 'SHIROMARK' || e.target.id === 'shiromark') {
            title.innerText = 'ShiroMark'
            description.innerText = `ShiroMark is a restaurant review site I completed with Shiro Han from my Flatiron cohort. It includes full CRUD actions for reviews and comments, as well as a social component that dynamically changes the home page and other features using React. We seeded our Rails database using the Yelp API.`
            video.src = "https://www.youtube.com/embed/b5H0Ihqbf0s"
        }
        if (e.target.innerText === 'MADE TO MAKE' || e.target.id === 'made-to-make') {
            title.innerText = 'Made to Make'
            description.innerText = "This project was made during the JavaScript module of Flatiron School. I worked with Alex Ortiz and Anna Romsa to create this marketplace for indigenous artists. Artists could add, remove, and update their listings and purchase items from the shop."
            video.src = "https://www.youtube.com/embed/QOfju2k-TcY"

        }
    })


})