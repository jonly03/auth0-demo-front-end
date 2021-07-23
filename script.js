const baseURL = "https://auth0books.herokuapp.com";

fetch(`${baseURL}/user/me`)
  .then((res) => res.json())
  .then(({ user }) => {
    toggleRightNav(user);
  });

function toggleRightNav(user) {
  let navItem = "";

  if (user !== undefined) {
    navItem = `
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="https://auth0books.herokuapp.com/logout">Logout</a>
            </li>
        `;
  } else {
    navItem = `
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="https://auth0books.herokuapp.com/login">Login</a>
            </li>
        `;
  }

  document.getElementById("right-nav").innerHTML = navItem;
}
