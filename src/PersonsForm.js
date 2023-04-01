import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const PersonForm = ({ onSubmit, newName, handlePersonChange, newNumber, handleNumberChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Name:</label>
        <input placeholder='Enter name' value={newName} onChange={handlePersonChange} />
      </Form.Field>
      <Form.Field>
        <label>Number:</label>
        <input placeholder='Enter number' value={newNumber} onChange={handleNumberChange} />
      </Form.Field>
      <Button color = 'blue' type='submit'>Add</Button>
    </Form>
  );
};

export default PersonForm;
