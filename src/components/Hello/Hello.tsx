import React from 'react';
import './Hello.css';
import Button from '@material-ui/core/Button';

interface Props {
  userName : string;
}

const Hello: React.FC<{ title: string }> =({
  title
}) => (
  <div className="Hello" data-testid="Hello">
    <h2>Hello user: { title } !</h2>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

export default Hello;
