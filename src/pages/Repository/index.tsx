import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';


import logo from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Logo Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="teste" alt="testes"/>
          <div>
            <strong>nome do repo</strong>
            <p>Descricao do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>821</strong>
            <p>Stars</p>
          </li>
          <li>
            <strong>821</strong>
            <p>Forks</p>
          </li>
          <li>
            <strong>821</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        {/* <Link key={repo.full_name} to={`/repository/${repo.full_name}`}> */}
        <Link to="asdasd">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository
