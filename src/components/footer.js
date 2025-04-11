document.addEventListener('DOMContentLoaded', function () {
  const footer = document.createElement('div')
  footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-logo">
          <img src="images/logo1.png" alt="Tony's Delight EU Logo" />
       
        </div>
        
        <div class="footer-info">
          <h3>Opening Times:</h3>
          <p>Monday - Friday: 09:00 - 17:00</p>
          <p>Sat-Sun: Available on WhatsApp</p>
        </div>
  
        <div class="footer-contact">
          <h3>Contact:</h3>
          <p>Mob: <a href="tel:+447442712265">+447442712265</a></p>
          <p>Email: <a href="mailto:info@tonysdelighteu.com">tony@tonysdelight.co.uk</a></p>
          <p>Or: <a href="mailto:sales@tonysdelighteu.com">sales@tonysdelighteu.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/+447442712265" target="_blank">+447442712265</a></p>
        </div>
  
        <div class="footer-address">
          <h3>Address:</h3>
          <p>Tony's Delight UK Ltd<br>
             Unit 4, Britannia Business Park<br>
             Stourport Rd, Kidderminster DY11 7PZ<br>
             United Kingdom</p>
        </div>
      </div>
      <p class="footer-copyright">Copyright © All Rights Reserved</p>
    `

  document.querySelector('footer').appendChild(footer)
})
