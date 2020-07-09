const handleAjaxError = (err: Error) => {
  console.error(err);
  return {
    status: 500,
    body: {
      message: 'There is a network issue!',
    },
  };
};

export default handleAjaxError;
