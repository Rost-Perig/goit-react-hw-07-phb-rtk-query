import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import {getContactsFilter} from 'redux/contacts/contacts-selectors';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import s from './ContactList.module.css'
import ContactData from '../ContactData';
import FindForm from '../FindForm';
import Spinner from '../Spinner';


export let tempContactArr; //создание ссылки на data, для передачи её в инпуты (для проверки вводимого имени или номера)

const ContactList = () => {

    const { data, error, isFetching } = useFetchContactsQuery();

    tempContactArr = data;  //создание ссылки на data, для передачи её в инпуты (для проверки вводимого имени или номера)

    // const findValue = useSelector(state => state.contacts.filter);
    const findValue = useSelector(getContactsFilter);

     return (
        <div>

            <FindForm />
             
            {error && <h2 className={s.errorInfo}>ERROR. INTERNET DISCONNECTED</h2>}
                
            {data && (<ul className={s.list}>
                 {[...data].sort((a, b) => a.name.localeCompare(b.name)).filter(item => item.name.toLowerCase().includes(findValue.toLowerCase())).map(item => {
                    const { id } = item;
                    return (
                        <li key={id} className={s.listItem}>
                            < ContactData contactObj={item} />
                        </li>
                    );
                })}
             </ul>)}
             
             {isFetching && <Spinner size={120}/>}
                
        </div>
    );
};

ContactList.propTypes = {
  id: PropTypes.string,
};

export default ContactList;


/*===================то же с пояснениями===================*/

// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { getContactsItems, getContactsFilter, getLoadingSpinner } from 'redux/contacts/contacts-selectors';
// import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
// import s from './ContactList.module.css'
// import ContactData from '../ContactData';
// import FindForm from '../FindForm';
// import Spinner from '../Spinner';
// //=====всё это не надо с RTK Query=====//
// // import { useEffect } from 'react'; 
// // import {fetchContacts} from 'redux/contacts/contacts-operations';


// export let tempContactArr = []; //создание ссылки на data, для передачи её в инпуты (для проверки вводимого имени или номера)

// const ContactList = () => {

//     const { data, isFetching } = useFetchContactsQuery();

//     tempContactArr = data;  //создание ссылки на data, для передачи её в инпуты (для проверки вводимого имени или номера)

//     const findValue = useSelector(getContactsFilter);
    
//     //=====всё это не надо с RTK Query=====//
//     // const dispatch = useDispatch();
//     // const contactArr = useSelector(state => state.contacts.items);
//     // const findValue = useSelector(state => state.contacts.filter);
//     // const isLoadingContacts = useSelector(state => state.contacts.loadingSpinner);
//     // const contactArr = useSelector(getContactsItems);
//     // const tempContactArr = [...data].sort((a, b) => a.name.localeCompare(b.name));
//     // const isLoadingContacts = useSelector(getLoadingSpinner);
//     // useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);
//     // const tempContactArr = [...contactArr].sort((a, b) => a.name.localeCompare(b.name));

//      return (
//         <div>

//             <FindForm/>
                
//             {data && (<ul className={s.list}>
//                  {[...data].sort((a, b) => a.name.localeCompare(b.name)).filter(item => item.name.toLowerCase().includes(findValue.toLowerCase())).map(item => {
//                     const { id } = item;
//                     return (
//                         <li key={id} className={s.listItem}>
//                             < ContactData contactObj={item} />
//                         </li>
//                     );
//                 })}
//              </ul>)}
             
//             {isFetching && <Spinner/>}
                
//         </div>
//     );
// };

// ContactList.propTypes = {
//   id: PropTypes.string,
// };

// export default ContactList;