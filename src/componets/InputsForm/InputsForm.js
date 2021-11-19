import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './InputsForm.module.css';
import { useCreateContactMutation } from 'redux/contacts/contactsSlice';
import { tempContactArr } from '../ContactList/ContactList';

export default function InputsForm() { 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [createContact, {isLoading}] = useCreateContactMutation();

  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'subscriber':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        break;
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (tempContactArr.findIndex(item => item.name === name) !== -1) {
      return alert(`Абонент с именем ${name} уже существует!`) 
    };
    if (tempContactArr.findIndex(item => item.phone === phone) !== -1) {
      return alert(`Такой номер ${phone} уже присвоен другому абоненту!`);
    };
    createContact({name, phone});
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
      <div className={s.frame}>
      <form
        onSubmit={handleSubmit}
        className={s.form}
        autoComplete="on">
            {/* <h3>Name</h3> */}
            <label >
              <input
                className={s.input}
                type="text"
                name="subscriber"
                placeholder="name"
                value={name}
                onChange={handleInputChange}  
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>
            
            {/* <h3>Number</h3> */}

            <label>
                <input
                className={s.input}
                type="tel"
                name="number"
                placeholder="phone"
                value={phone}
                onChange={handleInputChange} 
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </label> 
        <button
          type="submit"
          disabled={isLoading}
          className={s.btn}>
          {isLoading ? 'ADDITION...' : 'Add contact'} 
        </button>
        </form> 
      </div>
    )
  };

InputsForm.propTypes = {
  subscriber: PropTypes.string,
  number: PropTypes.string,
};



/*===================то же с пояснениями===================*/

// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import s from './InputsForm.module.css';
// import { useCreateContactMutation } from 'redux/contacts/contactsSlice';
// import { tempContactArr } from '../ContactList/ContactList';
// //=====всё это не надо с RTK Query=====//
// // import { useSelector, useDispatch } from 'react-redux'; 
// // import  { addContact } from 'redux/contacts/contacts-operations';
// // import { getContactsItems } from 'redux/contacts/contacts-selectors';

// export default function InputsForm() { 
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');

//   const [createContact] = useCreateContactMutation();

//   //=====всё это не надо с RTK Query=====//
//   // // const contArr = useSelector(state => state.contacts.items);
//   // const contArr = useSelector(getContactsItems);
//   // const dispatch = useDispatch();
//   // const contactToServer = ({name, phone}) => dispatch(addContact({name, phone}));  

//   const handleInputChange = e => {
//     switch (e.currentTarget.name) {
//       case 'subscriber':
//         setName(e.currentTarget.value);
//         break;
//       case 'number':
//         setPhone(e.currentTarget.value);
//         break;
//       default:
//         break;
//     };
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log('tempContactArr: ', tempContactArr)
    
//     if (tempContactArr.findIndex(item => item.name === name) !== -1) {
//       return alert(`Абонент с именем ${name} уже существует!`) 
//     };
//     if (tempContactArr.findIndex(item => item.phone === phone) !== -1) {
//       return alert(`Такой номер ${phone} уже присвоен другому абоненту!`);
//     };
//     createContact({name, phone});


//     // contactToServer({name, phone});
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setPhone('');
//   };

//   return (
//       <div className={s.frame}>
//       <form
//         onSubmit={handleSubmit}
//         className={s.form}
//         autoComplete="on">
//             {/* <h3>Name</h3> */}
//             <label >
//               <input
//                 className={s.input}
//                 type="text"
//                 name="subscriber"
//                 placeholder="name"
//                 value={name}
//                 onChange={handleInputChange}  
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                 required
//               />
//             </label>
            
//             {/* <h3>Number</h3> */}

//             <label>
//                 <input
//                 className={s.input}
//                 type="tel"
//                 name="number"
//                 placeholder="phone"
//                 value={phone}
//                 onChange={handleInputChange} 
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                 required
//               />
//             </label> 
//           <button type="submit" className={s.btn}>Add contact</button> 
//         </form> 
//       </div>
//     )
//   };

// InputsForm.propTypes = {
//   subscriber: PropTypes.string,
//   number: PropTypes.string,
// };
