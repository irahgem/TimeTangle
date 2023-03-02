const fetchData = async () => {
  try {
    const response = await fetch('data.json'); // pass the relative path to the file
    console.log(response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
