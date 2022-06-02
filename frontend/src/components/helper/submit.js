export const addArtist = (artist) => {
    return fetch(`http://localhost:4000/api/v1/addArtist`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(artist)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };