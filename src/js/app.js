// const {Game, GameSavingData, readGameSaving: loadGame, writeGameSaving: saveGame} = require('./game')
import { Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

const game = new Game();
game.start();