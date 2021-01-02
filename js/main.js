// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgUHFu7CWjIycRgMY5YMqV1aZLP8GBhOM",
    authDomain: "contact-form-eb6be.firebaseapp.com",
    projectId: "contact-form-eb6be",
    storageBucket: "contact-form-eb6be.appspot.com",
    messagingSenderId: "665877994355",
    appId: "1:665877994355:web:5c425f5c9ca7da887f8306"
  }
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault()

  const name = getInputVal('name')
  const lastname = getInputVal('lastname')
  const company = getInputVal('company')
  const email = getInputVal('email')
  const message = getInputVal('message')

  console.log(name)
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}
