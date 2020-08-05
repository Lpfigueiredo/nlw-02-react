import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (<article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/60974999?s=460&u=25fe7272944c3349f30d6bfce38ce4331c64a2f9&v=4" alt="Leonardo Figueiredo" />
      <div>
        <strong>Leonardo Figueiredo</strong>
        <span>Matemática</span>
      </div>
    </header>
    <p>
      Texto descritivo do professor.
  </p>

    <footer>
      <p>
        Preço/hora
      <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsAppIcon} alt="WhatsApp" />
      Entrar em contato
    </button>
    </footer>
  </article>)
}

export default TeacherItem;
