export const lockScreen = async () => {
  try {
    await window.screen.orientation.lock('portrait');
  } catch (error) {
    console.log(error);
  }
};
