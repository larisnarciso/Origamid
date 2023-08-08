import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <Select
        options={['Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input id='email' label='Email' value={email} setValue={setEmail} />
    </form>
  );
};

export default App;
