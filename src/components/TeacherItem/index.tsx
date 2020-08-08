import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem: React.FC = () => {

const imageItem = "https://avatars3.githubusercontent.com/u/51465694?s=460&u=bf8009fe9d71f6484c3f069e0dd08eb8e3a6920a&v=4"

  return (
    <article className="teacher-item">

        <header>
        <img src={imageItem} alt="perfil"/>
        <div>
            <strong>Angelo Polatto</strong>
            <span>Física</span>
        </div>
        </header>

        <p>Entusiasta das melhores técnologias de Física avançada.</p>
        <br/><br/>
        <p>Apaixonado por Fisica quantica e readições gama. 
        Com uma vasta lista de alunos aprovados em testes práticos.</p>

        <footer>
        <p>
            Preço/Hora
            <strong>R$ 80,00</strong>
        </p>

        <button type="button">
            <img src={whatsappIcon} alt="Entrat em contato"/>
            Entrar em contato
        </button>
        </footer>

    </article>
  );
}

export default TeacherItem;