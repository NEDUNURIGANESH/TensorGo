import React, { useState } from 'react';
import styles from './styles.module.css';

// const Compose = () => {
//   const [to, setTo] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleToChange = (e) => {
//     setTo(e.target.value);
//   };

//   const handleSubjectChange = (e) => {
//     setSubject(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // You can perform additional actions here, such as sending the email.
//     // For simplicity, let's just log the details to the console.
//     console.log('To:', to);
//     console.log('Subject:', subject);
//     console.log('Message:', message);

//     // Clear the form fields after submission
//     setTo('');
//     setSubject('');
//     setMessage('');
//   };

//   return (
//     <div className={styles['compose-mail-container']}>
//       <h2>Compose Mail</h2>
//       <form className={styles['compose-mail-form']} onSubmit={handleSubmit}>
//         <label className={styles['compose-mail-label']} htmlFor="to">
//           To:
//         </label>
//         <input
//           className={styles['compose-mail-input']}
//           type="text"
//           id="to"
//           value={to}
//           onChange={handleToChange}
//           required
//         />

//         <label className={styles['compose-mail-label']} htmlFor="subject">
//           Subject:
//         </label>
//         <input
//           className={styles['compose-mail-input']}
//           type="text"
//           id="subject"
//           value={subject}
//           onChange={handleSubjectChange}
//           required
//         />

//         <label className={styles['compose-mail-label']} htmlFor="message">
//           Message:
//         </label>
//         <textarea
//           className={styles['compose-mail-textarea']}
//           id="message"
//           value={message}
//           onChange={handleMessageChange}
//           required
//         />

//         <button className={styles['compose-mail-button']} type="submit">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

import { useNavigate } from 'react-router-dom';

const Compose= () => {
  const navigate = useNavigate();

  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming your mail sending logic is synchronous for simplicity
    // In a real application, this might be an asynchronous operation
    console.log('Sending mail:', { to, subject, message });

    // For demonstration purposes, simulate asynchronous operation with setTimeout
    setTimeout(() => {
      console.log('Mail sent successfully');
      // Redirect to a success page
      navigate('/mail-sent');
    }, 2000); // Simulating a delay, adjust as needed
  };

  return (
    <div className={styles['compose-mail-container']}>
      <h2>Compose Mail</h2>
      <form className={styles['compose-mail-form']} onSubmit={handleSubmit}>
        <label className={styles['compose-mail-label']} htmlFor="to">
          To:
        </label>
        <input
          className={styles['compose-mail-input']}
          type="text"
          id="to"
          value={to}
          onChange={handleToChange}
          required
        />

        <label className={styles['compose-mail-label']} htmlFor="subject">
          Subject:
        </label>
        <input
          className={styles['compose-mail-input']}
          type="text"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
          required
        />

        <label className={styles['compose-mail-label']} htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles['compose-mail-textarea']}
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
        />

        <button className={styles['compose-mail-button']} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Compose;
