import React from 'react';
import { Input } from 'semantic-ui-react';

const Filter = ({ value, onChange }) => {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <Input
        icon= 'search'
        placeholder='Search...'
        value={value}
        onChange={onChange}
        style={{ width: '80%'}}
      />
    </form>
  );
};

export default Filter;
