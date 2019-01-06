export default (milliSec: number = 1000): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliSec);
  });
};
