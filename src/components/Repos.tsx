import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';


const Repos = () => {
  const { repos } = useGlobalContext()
  //reach to laanguages
  const languages = repos.reduce((total, item) => {
    //@ts-ignore
    const { language, stargazers_count } = item
    if (!language) return total
    //@ts-ignore
    if (!total[language]) {
      //@ts-ignore
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      //@ts-ignore
      total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count }
    }
    //@ts-ignore
    return total
  }, {})
  const mostUsed = Object.values(languages).sort((a, b) => {
    return b.value - a.value
  }).slice(0, 5)

  //most starts per language

  const mostPopular = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars
  }).map((item) => {
    return { ...item, value: item.stars }
  }).slice(0, 5)

  //stars, forks
  //@ts-ignore
  let { stars, forks } = repos.reduce((total, item) => {
    //@ts-ignore
    const { stargazers_count, name, forks } = item;
    //@ts-ignore
    total.stars[stargazers_count] = { label: name, value: stargazers_count }
    //@ts-ignore
    total.forks[forks] = { label: name, value: forks }
    return total;
  }, {
    stars: {},
    forks: {}
  })
  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()

  return <section>
    <Wrapper className='section-center'>
      {/* @ts-ignore */}
      <Pie3D data={mostUsed} />
      {/* @ts-ignore */}
      <Column3D data={stars} />
      {/* @ts-ignore */}
      <Doughnut2D data={mostPopular} />
      {/* @ts-ignore */}
      <Bar3D data={forks} />
    </Wrapper>
  </section>;

};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
