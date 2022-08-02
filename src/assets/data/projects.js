import { v4 as uuidv4 } from 'uuid';
import TaskManager from '../images/task-manager.png';
import ChessTic from '../images/chess-tic.png';
import Hagiografies from '../images/hagiografies.png';
import CoinTrackerImg from '../images/cointracker.jpg';

const projects = [
  {
    id: uuidv4(),
    title: 'Chess and TicTacToe',
    desc:
      'An application to play Chess & TicTacToe multiplayer. Supports cryptography, password validation & users can take part in tournaments.',
    img: ChessTic,
    url: 'https://github.com/AposLaz/Chess-TicTacToe-multiplayer-game'
  },
  {
    id: uuidv4(),
    title: 'Hagiographies Dimas',
    desc:
      'A portfolio for Ilias Dimas. An artist from Grevena city. Owner can login and update gallery. The portfolio is made using HTML5, CSS3, JS, Bootstrap, PHP and MySQL.',
    img: Hagiografies,
    url: 'https://github.com/AposLaz/Hagiographies-Website'
  },
  {
    id: uuidv4(),
    title: 'Task Manager',
    desc:
      'This app supports jwt authentication, user manages his tasks and save them in mongoDB. Exists API for users and tasks.',
    img: TaskManager,
    url: 'https://github.com/AposLaz/task-manager'
  }
];

export default projects;
