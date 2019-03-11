const data = [
  {
    name: 'Jane Doe',
    age: 27,
    gender: 'male',
    lookingFor: 'Women',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/men/65.jpg'
  },
  {
    name: 'Allie Dean',
    age: 27,
    gender: 'female',
    lookingFor: 'Women',
    location: 'Los Angeles CA',
    image: 'https://randomuser.me/api/portraits/women/84.jpg'
  },
  {
    name: 'Gary Jones',
    age: 34,
    gender: 'female',
    lookingFor: 'Women',
    location: 'Denver',
    image: 'https://randomuser.me/api/portraits/men/14.jpg'
  }
];

// The iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < profiles.length ? 
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  }
}

const profiles = profileIterator(data);
nextProfile();

// Listeners
document.getElementById('next').addEventListener('click', nextProfile);


function nextProfile() {
  const imageEl = document.getElementById('image-display');
  const profileEl = document.getElementById('profile-display');
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    profileEl.innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Interested in: ${currentProfile.lookingFor}</li>
      </ul>
    `;
  
    imageEl.innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    window.location.reload();
  }
}