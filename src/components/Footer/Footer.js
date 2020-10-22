import React from 'react'
import '../Footer/Footer.css';
import { UserConsumer } from "../App/contextUser"
const Footer = () => {
  return (
    <UserConsumer>
      {value =>
        <footer>
          <div className="footer-container">
            <p> Desafio de tripulaciones proyecto realizado por ....   </p>
          </div>
        </footer>
      }
    </UserConsumer>
  )
}

export default Footer
