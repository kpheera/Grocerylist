var p;

function ajax() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "<h2>Grocery items</h2><br>  <select id=mylist onchange=list()><option  disabled selected>Department</option><option>All</option><option>Stationary</option><option>Vegetables</option><option>Bakery</option></select>   <table><tr><th>Index No.</th><th>Product</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";

            p = response.list;


            for (let i = 0; i < p.length; i++) {
                output += "<tr> <th>" + p[i].serialnumber + "</th>" + "<th>" + p[i].product + "</th>" + "<th>" + p[i].Quantity + "</th>" + "<th>" + p[i].unit + "</th>" + "<th>" + p[i].Department + "</th>" + "<th>" + p[i].notes + "</th>" + "</tr>";
            }
            output += "</table>";
            document.getElementById("demo").innerHTML = output;


        }
    }
    xhttp.open("GET", "list.json", true);
    xhttp.send();

}

function list() {
    input = document.getElementById("mylist").value;   
    var output = "<h2>Grocery items</h2><br>  <select id=mylist onchange=list()><option disabled selected>Department</option><option>All</option><option>Stationary</option><option>Vegetables</option><option>Bakery</option></select>   <table id=mytable><tr><th>Index No.</th><th>Product</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";  

    for (let i = 0; i < p.length; i++) {
        if (input == "Stationary") {
            if (p[i].Department == 'Stationary') {
                output += "<tr> <th>" + p[i].serialnumber + "</th>" + "<th>" + p[i].product + "</th>" + "<th>" + p[i].Quantity + "</th>" + "<th>" + p[i].unit + "</th>" + "<th>" + p[i].Department + "</th>" + "<th>" + p[i].notes + "</th>" + "</tr>";
            }
        }
        else if (input == "Vegetables") {
            if (p[i].Department == 'Vegetables') {
                output += "<tr> <th>" + p[i].serialnumber + "</th>" + "<th>" + p[i].product + "</th>" + "<th>" + p[i].Quantity + "</th>" + "<th>" + p[i].unit + "</th>" + "<th>" + p[i].Department + "</th>" + "<th>" + p[i].notes + "</th>" + "</tr>";
            }
        }
        else if (input == "Bakery") {
            if (p[i].Department == 'Bakery') {
                output += "<tr> <th>" + p[i].serialnumber + "</th>" + "<th>" + p[i].product + "</th>" + "<th>" + p[i].Quantity + "</th>" + "<th>" + p[i].unit + "</th>" + "<th>" + p[i].Department + "</th>" + "<th>" + p[i].notes + "</th>" + "</tr>";
            }
        }
        else {
                output += "<tr> <th>" + p[i].serialnumber + "</th>" + "<th>" + p[i].product + "</th>" + "<th>" + p[i].Quantity + "</th>" + "<th>" + p[i].unit + "</th>" + "<th>" + p[i].Department + "</th>" + "<th>" + p[i].notes + "</th>" + "</tr>";
        }
    }
    output += "</table>";
    document.getElementById("demo").innerHTML = output;
}