class User {
  constructor(email, password) {
    this.email = email
    this.password = password
    this.inbox = []
  }

  sendMessage() {
    let message = new Message ()
    rec.inbox.push(msg)
  }
}

class Message {
  constructor(content) {
    this.content = prompt('Enter a message')
  }
}

user1 = new User('aldane@example.com','1111111')

user2 = new User('greninja@smash.com','1111111')

user3 = new User('treevile@pokemon.com','2222222')

let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-inbox')
window.addEventListener('keydown', function(event){
  if(event.which == 13) {
    sendMessage()
  }
})

function sendMessage() {
  let text = document.getElementById('msg-content')
  let p = document.createElement('p')
  p.innerText = text.value
  user2inbox.appendChild(p)
  text.value=''
  text.focus()
}

user1form.addEventListener('submit', function(event) {
  event.preventDefault()
  sendMessage()
})

//
