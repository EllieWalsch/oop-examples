const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/photos",
];

// TODO: fetch data from all 4 endpoints and use promise.all to wait for all of them to complete

// map returns a new array with the callback applied to each item in the original array
// a fetch returns a promise
// A fetch returns a Promise, so we can use Promise.all to wait for all of them to complete
Promise.all(urls.map((url) => fetch(url)))
  .then((responses) =>
    // then convert all the promises to JSON
    Promise.all(responses.map((response) => response.json()))
  )
  .then((allData) => {
    console.log(allData);
  })
  .catch((error) => {
    console.error(error);
  });

// seperate example that uses await, no need for so many callbacks
try {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const datum = await Promise.all(responses.map((response) => response.json()));

  console.log(datum);
} catch (error) {
  console.error(error);
}
