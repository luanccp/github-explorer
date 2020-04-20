import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repositories } from './styles'

import logo from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo Github explorer" />
      <Title>Explore repositórios no github</Title>
      <Form>
        <input placeholder="Digite seu repositório aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/5742015?s=460&u=5a5d1bb959f8b639afbb5583c3ecd1c23ba58b5a&v=4"
            alt="Luan"
          />
          <div>
            <strong>Titulos</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
