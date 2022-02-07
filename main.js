function showData(){

   let name = document.getElementById("name").value
   let email = document.getElementById("email").value
   let pnumber = document.getElementById("pnumber").value
   let subject = document.getElementById("subject").value
   let message = document.getElementById("message").value

   document.getElementById("name").value = ""

   console.log(name)
   console.log(email)
   console.log(pnumber)
   console.log(subject)
    console.log(message)

    if ( name == "") {
        alert('name input must not be empty')
    }
    
    if ( email == "") {
        alert('name input must not be empty')
    }

    if ( pnumber == "") {
        alert('pnumber input must not be empty')
    }

    if ( subject == "") {
        alert('subject input must not be empty')
    }

    if ( message == "") {
        alert('message input must not be empty')
    }

    // Email Process
    // Dom membuat element
    let emailReceiver = 'fariziachmad97@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name} ${pnumber} ${subject} ${message}`

    a.click()

}
