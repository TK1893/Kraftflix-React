// fetch User
useEffect(() => {
  if (!user) {
    return;
  }
  fetch(
    `https://kraftflix-api-d019e99d109c.herokuapp.com/users/${user.Username}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('Data from API : ', data);
      // const userFromApi = data;
      // console.log('User from API : ', userFromApi);
      setUser(data);
      console.log('User:', user);
    })
    .catch((e) => {
      console.log(e);
    });
}, []);
