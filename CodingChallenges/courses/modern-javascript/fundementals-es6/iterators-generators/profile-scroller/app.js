// creating the data
// usually this would come from an api or backend
const data = [
  {
    name: ' John Doe',
    age: 32, 
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);
// call the first profile on load
nextProfile();


  // next event
  document.getElementById('next').addEventListener('click', nextProfile)
  // next profile display
  function nextProfile() {
      const currentProfile = profiles.next().value;
      // wrapping in an if else statement for usability and to avoid errors
      // if there is still another profile to view then we will display it
      if (currentProfile !== undefined) {
      // add data to the profile display
      document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
    </ul>
    `;
      // add data to the image display
      document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  // if there are no more profiles then we will do nothing and reload the page and start from the top again
    } else {
      window.location.reload();
    }
  }




// creating the iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  };
}