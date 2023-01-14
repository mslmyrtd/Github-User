import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';


const Repos = () => {
  const { repos } = useGlobalContext()
  //reach to laanguages
  let languages = repos.reduce((total, item) => {
    //@ts-ignore
    const { language } = item
    if (!language) return total
    //@ts-ignore
    if (!total[language]) {
      //@ts-ignore
      total[language] = { label: language, value: 1 }
    } else {
      //@ts-ignore
      total[language] = { ...total[language], value: total[language].value + 1 }
    }
    //@ts-ignore
    return total
  }, {})
  languages = Object.values(languages).sort((a, b) => {
    return b.value - a.value
  }).slice(0, 5)
  console.log(languages);




  return <section>
    <Wrapper className='section-center'>
      {/* @ts-ignore */}
      <Pie3D data={languages} />
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
