import React, { useState, useEffect, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repositories, Error } from './styles'

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
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplore:repositories')

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });
  const [InputError, setInputError] = useState('');


  useEffect(() => {
    localStorage.setItem('@GithubExplore:repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {

    event.preventDefault()

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório.');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository])
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório.')
    }

  }

  return (
    <>
      <img src={logo} alt="Logo Github explorer" />
      <Title>Explore repositórios no github</Title>
      <Form hasError={!!InputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite seu repositório aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      {InputError && <Error>{InputError}</Error>}

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
