let gm= false;
function girlMode() {
    if (gm==false) {
        document.getElementById('name').innerHTML = "Skye";
        document.getElementById('navName').innerHTML = "Skye Spencer";
        /*                document.getElementById('nav').style= "color:#ffff"*/
        /*document.getElementById('body').style="background:#450062; animation:gmTransition 5s; color:#ffff !important;";
        document.getElementById('hi').className="display-1";*/
        var link = document.createElement('link');
        link.rel='stylesheet';
        link.href='GM.css';
        link.type='text/css';
        link.id='girlmode';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
        gm=true;

    }
    else{
        document.getElementById('name').innerHTML="Jack";
/*        document.getElementById('name').className="display-1 text-blue-400";*/
        document.getElementById('navName').innerHTML = "Jack Spencer";
/*        document.getElementById('hi').className="display-1";
        document.getElementById('body').style="background:#fffbf2;";*/
        document.getElementById('girlmode').remove()
        gm=false;
    }
}