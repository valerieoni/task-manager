document.addEventListener('DOMContentLoaded', function() {
    //sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

document.addEventListener('DOMContentLoaded', function() {
  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});