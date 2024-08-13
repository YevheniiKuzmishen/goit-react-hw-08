import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import Error from "../../components/Error/error";
import Loader from "../../components/Loader/loader";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.contactsBook}>
      <h1 className={css.titleBook}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {isError && (
        <Error>Contacts are not available, please try again later...</Error>
      )}
      <ContactList />
    </div>
  );
}
