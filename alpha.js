function brazil() {
    document.getElementById('fire').style.display = 'block';
}
function italy() {
    document.getElementById('fire').style.display = 'none';
}
function france() {
    const name = document.getElementById('name').value;
    const blog = document.getElementById('blog').value;
    argentina(name, blog);
    document.getElementById('name').value = '';
    document.getElementById('blog').value = '';
}

function argentina(name, blog) {
    var land = document.createElement('space');
    var sky = document.createElement('meteoroid');
    land.innerHTML = '<br><h2>' + name + '</h2>Blog:<br>' + blog;
    sky.innerHTML = 'Comment';
    sky.addEventListener('click', function germany() {
        let universe = prompt('Name ?', 'Anonymous');
        let multiverse = prompt('Write a Comment ', 'Just a Comment');
        if (universe == null || multiverse == null) {
            land.appendChild(galaxy);
        }
        else
            if (universe == '' || multiverse == '') {
                land.appendChild(galaxy);
            }
            else {
                var galaxy = document.createElement('p');
                galaxy.innerHTML = '<br>Comment by:&nbsp;' + universe + '<br>Comment:&nbsp;' + multiverse;
                land.appendChild(galaxy);
            }
    });
    document.body.appendChild(land);
    document.body.appendChild(sky);
}