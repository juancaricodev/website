// Mobile menu
const menu = document.querySelector('.mobile-navbar')
const menuButton = document.querySelector('#mobile-menu')

menuButton.addEventListener('click', showMenu)

function showMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
  } else {
    menu.classList.add('active')
  }
}

function dropMenu(x) {
  x.classList.toggle('drop-menu')
}


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBgUHFu7CWjIycRgMY5YMqV1aZLP8GBhOM',
    authDomain: 'contact-form-eb6be.firebaseapp.com',
    projectId: 'contact-form-eb6be',
    storageBucket: 'contact-form-eb6be.appspot.com',
    messagingSenderId: '665877994355',
    appId: '1:665877994355:web:5c425f5c9ca7da887f8306'
  }
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Connection to Firestore
const db = firebase.firestore()

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

// Submit form
function submitForm(e) {
  e.preventDefault()

  // Get values
  const name = getInputVal('name')
  const company = getInputVal('company')
  const email = getInputVal('email')
  const message = getInputVal('message')

  // Save message
  saveMessage(name, company, email, message)

  // Send email
  sendEmail(name, company, email, message)
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// Save message to Firestore
function saveMessage(name, company, email, message) {
  return db.collection('messages').add({
    name: name,
    company: company,
    email: email,
    message: message,
    date: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    // Hide error if shown
    document.querySelector('.contact__form-fail').style.display = 'none'

    // Show successful alert
    document.querySelector('.contact__form-success').style.display = 'block'
    // Clear form
    document.getElementById('contactForm').reset()

    // Hide alert
    setTimeout(() => {
      document.querySelector('.contact__form-success').style.display = 'none'
    }, 5000);
  })
  .catch(error => {
    console.error(`Error saving message => ${error}`)

    // Show successful alert
    document.querySelector('.contact__form-fail').style.display = 'block'
  })
}

// Send email with message
function sendEmail(name, company, email, message ) {
  Email.send({
    Host : 'smtp.gmail.com',
    Username : 'juancarico0528@gmail.com',
    Password : 'ojaqldynlkjhqkgi',
    To : 'juancaricodev@gmail.com',
    From : 'form@juancarico.dev',
    Subject : `[juancarico.dev] ${name} from the company ${company} sent you a message`,
    Body : `
    <strong>Name</strong>: ${name} <br>
    <strong>Company</strong>: ${company} <br>
    <strong>Email</strong>: ${email} <br><br>
    <strong>Message</strong>:<br> ${message} <br><br>
    <i>This message was sent from the contact form in <strong>juancarico.dev</strong></i>
    `
  })
  .then(message => {
    console.log(`Email successfully sent => ${message}`)
  })
  .catch(error => {
    console.error(`Error sending email => ${error}`)
  })
}
