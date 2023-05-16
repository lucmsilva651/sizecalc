function gbToMb() {
    var gb = document.getElementById("gb").value;
    var mb = gb * 1024;
    document.getElementById("mb").value = mb;
}

function mbToGb() {
    var mb = document.getElementById("mb").value;
    var gb = mb / 1024;
    document.getElementById("gb").value = gb;
}