import './App.css';
import Section from 'componets/Section';
import InputsForm from 'componets/InputsForm';
import ContactList from 'componets/ContactList';


function App() {

  return (
    <div className="App">
      <h1>Phonebook</h1>

      <Section>
        <InputsForm/>
      </Section>

      <Section>
          <ContactList/>
      </Section>

    </div>
  )
};

export default App;
