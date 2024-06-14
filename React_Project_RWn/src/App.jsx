// import { useEffect, useState } from "react";
import "./App.css";
// import Form from "./Components/Form";
// import Header from "./Components/Header";
// import ListShow from "./Components/ListShow";
// import uuid4 from "uuid4";
// import UserList from "./Components/UserList";
import NormalCrud from "./Components/NormalCrud&LocalCrud";
// import Demo from "./Components/Demo";
import Demo1 from "./Components/Demo1";

function App() {
  // const localStorageKey = "contact";
  // // const [contact, setContact] = useState([]);

  // const [contact, setContact] = useState(() => {
  //   return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  // });

  // useEffect(() => {
  //   localStorage.setItem(localStorageKey, JSON.stringify(contact));
  // }, [contact]);

  // const addContact = (data) => {
  //   // console.log(data);
  //   setContact([...contact, { id: uuid4(), ...data }]);
  // };

  // const removeContact = (id) => {
  //   const updatedList = contact.filter((val) => {
  //     return val.id !== id;
  //   });
  //   setContact(updatedList);
  // };

  return (
    <>
      {/* <Header /> */}
      {/* <Form addContact={addContact} /> */}
      {/* <ListShow contact={contact} removeContact={removeContact} /> */}
      {/* <UserList /> */}
      {/* <Demo /> */}
      <NormalCrud />
      <Demo1 />
    </>
  );
}

export default App;
