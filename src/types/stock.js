// @flow
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

declare class Audio extends HTMLAudioElement {}
