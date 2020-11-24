import styled from 'styled-components/macro';

export const SectionContainer = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  text-align: center;
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: 2rem;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export const Title = styled.h3`
  margin-bottom: 0;
  margin-right: 2rem;

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  border-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);

  @media screen and (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

export const Button = styled.button`
  background: var(--clr-primary-5);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-color: transparent;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  text-transform: capitalize;
  color: var(--clr-white);
  cursor: pointer;

  @media screen and (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

export const SectionColors = styled.section`
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
`;
