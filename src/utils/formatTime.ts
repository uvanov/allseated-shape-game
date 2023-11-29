import {CONFIG} from "../game.config.ts";

export const formatTime = (time: number) => {
  return (time / 1000).toFixed(CONFIG.TIME_SYMBOLS_AFTER_DOT);
}