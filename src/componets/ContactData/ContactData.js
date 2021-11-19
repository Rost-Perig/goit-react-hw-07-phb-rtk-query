import PropTypes from 'prop-types';
import s from './ContactData.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

const ContactData = ({ contactObj }) => {
    
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    const {name, id, phone} = contactObj;
    return (
        <>
            <p className={s.textItem}>
                <span>{name}:</span>
                <span>{phone}</span>
            </p>
            <button
                className={s.btn}
                type={"button"}
                data-key={id}
                disabled={isDeleting}
                onClick={e => deleteContact(e.target.dataset.key)}>
                
                {isDeleting ? 'DELETING...' : 'Delete'}
                
            </button>
        </>
    );
};

ContactData.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};

export default ContactData;

/*===================то же с пояснениями===================*/

// import PropTypes from 'prop-types';
// import s from './ContactData.module.css';
// //=====всё это не надо с RTK Query=====//
// // import { useDispatch } from 'react-redux';
// // import { delContact } from 'redux/contacts/contacts-operations';

// import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

// const ContactData = ({ contactObj }) => {
    
//     const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation()
//      //=====всё это не надо с RTK Query=====//   
//     // const dispatch = useDispatch();    
//     // const deleteContact = e => dispatch(delContact(e.target.dataset.key));
//     const {name, id, phone} = contactObj;
//     return (
//         <>
//             <p className={s.textItem}>
//                 <span>{name}:</span>
//                 <span>{phone}</span>
//             </p>
//             <button
//                 className={s.btn}
//                 type={"button"}
//                 data-key={id}
//                 onClick={e => deleteContact(e.target.dataset.key)}>
                
//                 {isDeleting ? 'Deleting...' : 'Delete'}
                
//             </button>
//         </>
//     );
// };

// ContactData.propTypes = {
//   name: PropTypes.string,
//   phone: PropTypes.string,
//   id: PropTypes.string,
// };

// export default ContactData;