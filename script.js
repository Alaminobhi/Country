async function loadData() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();
    console.log(data);
    return data;
}
loadData().then(data => {
    const parentList = document.getElementById('data-list');
    var c = 0;
    var rs = "";
    for (i in data){
    rs += "<tr>";
    c += 1;
    rs += "<td>" +c+ "</td>";
    rs += "<td><img src='"+data[i].flag+"' style='height: 80px;width:150px'></td>";
    rs += "<td> <h1>"+ data[i].name + "</h1> </td>";
    rs += "<td>" + data[i].capital +"</td>";
    rs += "<td>" + data[i].population +"</td>";
    rs += "</tr>";
    console.log(rs);
    }
    document.getElementById("result").innerHTML = rs;
    $('#abcd').DataTable();
});