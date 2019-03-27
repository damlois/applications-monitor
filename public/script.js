const appsArray = [];

readApplicationsFile = ()=>{
$.getJSON("applications.json", function (data) {
    $.each(data, function (index, value) {
        appsArray.push(value);      
    });
    createTable();
});
}

createTable = ()=>{
    for(app of appsArray) {
    switch(app.status) {
        case "okay":
        badge = "okay"
        break;
        case "warning":
        badge = "warning"
        break;
        case "down":
        badge = "down"
        break;
    }
    $("#table").append(`<tr><td>${app.name}<span class='status-badge badge-${badge}'>${app.status}</span></td></tr>`);  
  }
}

searchApp = ()=>{
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }




