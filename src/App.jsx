//TODO: Модуль 2 Заняття 1

import { useState } from 'react';

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;
};

//TODO: Модуль 2 Заняття 2

//? Хук UseEffect
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

//? Етап розмонтовування 1
// import Modal from './components/Modal';
// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

//? Етап розмонтовування 2
// import { useEffect } from 'react';
// const App = () => {
//   useEffect(() => {
//     console.log('Effect');

//     return () => {
//       console.log('Clean up');
//     };
//   });

//   return <div>App</div>;
// };

//? Етап розмонтовування 3
// import { useEffect, useState } from 'react';
// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

//?Декілька ефектів
// import { useState, useEffect } from 'react';
// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log('First updated: ', first);
//   }, [first]);

//   useEffect(() => {
//     console.log('Second updated: ', second);
//   }, [second]);

//   useEffect(() => {
//     console.log('First or second updated: ', first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

//? Робота з Local Storage
// import { useState, useEffect } from 'react';
// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem('saved-clicks');
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem('saved-clicks', clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

//!Не коментувати
export default App;
//!Не коментувати
