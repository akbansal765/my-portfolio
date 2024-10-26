import './App.css';
import Introduction from './Components/Introduction';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';

import projectImg1 from './images/expense_tracker.png';
import projectImg2 from './images/hangman.png';
import projectImg3 from './images/crypto_watcher.png';
import projectImg4 from './images/optic_app.png';

function App() {

  const projectArray = [
    {title: 'Optic App',
     desc: 'A secure web application designed for optical businesses, offering streamlined customer data storage and management. Enhances data accessibility, improves operational efficiency, and supports better customer service through organized, easily retrievable information.',
     image: projectImg4,
     url: 'https://optic-app-02.netlify.app'
    },
    {title: 'Crypto Watcher',
     desc: 'A real-time cryptocurrency watcher utilizing WebSockets and a chart library to provide live updates and dynamic data visualization. Offers seamless tracking of cryptocurrency trends, ensuring users have immediate access to the latest market insights.',
     image: projectImg3,
     url: 'https://cryptocurrency-watcher.netlify.app'
    },
    {title: 'Hangman',
     desc: 'An interactive Hangman game application with a user-friendly interface, designed to enhance engagement and enjoyment through intuitive gameplay and visually appealing elements.',
     image: projectImg2,
     url: 'https://hangman-game-02.netlify.app'
    },
    {title: 'Expense Tracker',
     desc: 'An expense tracker built with ReactJS, featuring the Context API and useState hook for efficient state management. Enables users to calculate monthly expenses, download statements, and view data with customizable filters for date, month, and year, making budget tracking seamless and organized.',
     image: projectImg1,
     url: 'https://expense-tracker-02.netlify.app'
    }
  ]


  return (
    <div className="App">
      <Navbar />
      <Introduction />
      {projectArray.map((obj , i) => {
        return <Project title={obj.title} description={obj.desc} image={obj.image} url={obj.url} key={i}/>
      })}
      <About />
      <Contact />
    </div>
  );
}

export default App;
