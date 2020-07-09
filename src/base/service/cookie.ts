const getCookie = (cookieName: string) => {
  // Split cookie string and get all individual cookieName=value pairs in an array
  const cookieArr = document.cookie.split(';');

  // Loop through the array elements
  for (let i = 0; i < cookieArr.length; i += 1) {
    const cookiePair = cookieArr[i].split('=');

    /* Removing whitespace at the beginning of the cookie cookieName
    and compare it with the given string */
    if (cookieName === cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
};

export default getCookie;
