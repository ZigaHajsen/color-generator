import React, { Fragment, useState } from 'react';
import Values from 'values.js';
import { SingleColor } from '../';
import {
  SectionContainer,
  Title,
  Input,
  Button,
  SectionColors,
} from './AppStyles';

const App: React.FC = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello');
  };

  return (
    <Fragment>
      <SectionContainer>
        <Title>color generator</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            value={color}
            placeholder='#f15025'
            onChange={(event) => setColor(event.target.value)}
          />
          <Button type='submit'>submit</Button>
        </form>
      </SectionContainer>
      <SectionColors>
        <h4>list goes here</h4>
      </SectionColors>
    </Fragment>
  );
};

export default App;
