import React from 'react';
import { List, Button } from 'semantic-ui-react';

const Persons = ({ filteredNames, deletePerson }) => {
  return (
    <List divided relaxed>
      {filteredNames.map((person) => (
        <List.Item key={person.id}>
          <List.Content floated='left'>
            <List.Header>{person.name}</List.Header>
            <List.Description>{person.number}</List.Description>
          </List.Content>
          <List.Content floated='right'>
            <Button color='red' onClick={() => deletePerson(person.id, person.name)}>Delete</Button>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Persons;
