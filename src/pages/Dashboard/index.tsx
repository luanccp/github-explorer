import React, { useState, useEffect, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repositories } from './styles'

import api from '../../services/api'

import logo from '../../assets/logo.svg'

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {

    event.preventDefault()
    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;
    setRepositories([...repositories, repository])

    setNewRepo('')

  }

  return (
    <>
      <img src={logo} alt="Logo Github explorer" />
      <Title>Explore repositórios no github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite seu repositório aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repo => (
          <a key={repo.full_name} href="teste">
            <img
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
              />
            <div>
        <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
