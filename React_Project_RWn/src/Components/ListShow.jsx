// /* eslint-disable react/prop-types */
// export default function ListShow(props) {
//   // console.log(contact);

//   const { contact, removeContact } = props;

//   const contactList = contact.map((val, index) => {
//     return (
//       <div
//         key={index} // Corrected key prop
//         style={{
//           border: "1px solid blue",
//           borderRadius: "5px",
//           color: "green",
//           width: "500px",
//           margin: "10px"
//         }}
//       >
//         <div>
//           <div>Name : {val.name}</div>
//           <div>Email : {val.email} </div>
//           <div>
//             <button onClick={() => removeContact(val.id)}>Delete</button>
//           </div>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <>
//       <div>
//         <h2
//           style={{
//             textTransform: "uppercase",
//             background: "tan",
//             borderRadius: "5px",
//             color: "brown"
//           }}
//         >
//           Contactlist
//         </h2>
//       </div>
//       <div>{contactList}</div>
//     </>
//   );
// }

/* eslint-disable react/prop-types */
export default function ListShow(props) {
  // console.log(contact);

  const { contact, removeContact } = props;

  const contactList = contact.map((val, index) => {
    return (
      <div key={index}>
        <div>
          <div>Name : {val.name}</div>
          <div>Email : {val.email} </div>
          <div>
            <button onClick={() => removeContact(val.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div>
        <h2>Contactlist</h2>
      </div>
      <div>{contactList}</div>
    </>
  );
}
