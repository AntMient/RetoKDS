export const calculateTimeRemaining = (time: number) => {
    const targetTime = time + 30 * 60 * 1000;
    const remainingTime = targetTime - Date.now();

    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return { minutes, seconds };
};

export const generateTimestamp = () => {
    const currentTime = Date.now();

    const randomOffset = Math.floor(Math.random() * 10 * 60 * 1000) * -1;

    const timestamp = currentTime + randomOffset;

    return timestamp;
};