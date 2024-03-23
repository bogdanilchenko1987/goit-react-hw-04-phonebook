import { useState } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <Form action="submit" autoComplete="off" onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name:
        <Input
          type="text"
          name="name"
          placeholder="Enter contact name"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="number">
        Number:
        <Input
          type="tel"
          name="number"
          placeholder="Enter contact number"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

// -------------------------------------------------------

// export const ContactForm = ({ addContact }) => {

//   const [state, setState] = useState({
//     name: '',
//     number: '',
//   });

//   const handleChange = ({ target: { name, value } }) => {
//     setState({
//       [name]: value,
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     addContact({ ...state });

//     setState({ name: '', number: '' });
//   };

//   const { name, number } = state;
//   return (
//     <Form action="submit" autoComplete="off" onSubmit={e => handleSubmit(e)}>
//       <Label htmlFor="name">
//         Name:
//         <Input
//           type="text"
//           name="name"
//           placeholder="Enter contact name"
//           required
//           value={name}
//           onChange={e => handleChange(e)}
//         />
//       </Label>
//       <Label htmlFor="number">
//         Number:
//         <Input
//           type="tel"
//           name="number"
//           placeholder="Enter contact number"
//           required
//           value={number}
//           onChange={e => handleChange(e)}
//         />
//       </Label>
//       <Button type="submit">Add contact</Button>
//     </Form>
//   );
// };
