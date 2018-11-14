
    $(document).ready(function async() {
      // Data Display
            $.ajax({
              url: 'http://assignmentapi.aspcore.net/api/users',
              dataType: 'json',
              type: 'get',
              success: function (data) {
                var user = '';
                console.log('data', data.data);
                $(data.data).each(function (index, value) {
                  user += '<tr>';
                  user += '<td>' + value.firstName + '</td>';
                  user += '<td>' + value.lastName + '</td>';
                  user += '<td>' + value.email + '</td>';
                  user += '<td>' + value.phone + '</td>';
                  user += '<td>' + '<button type="button" class="btn btn-info" data-toggle="modal"  onclick="edit(this,' + value.id + ')" >Edit</button>' +
                    '&emsp;<button type="button" class="btn btn-info" onclick="delet(' + value.id + ')">Delete</button>' + '</td>';
                  user += '</tr>';
                });
                $('#mytable').append(user);
              }
            });
            setTimeout(() => {
              pagination();
            }, 1000);
      
          });
      // Pagination
          async function pagination() {
            var totalRows = $('#mytable').find('tr:has(td)').length;
            var recordPerPage = 8;
            var totalPages = Math.ceil(totalRows / recordPerPage);
            var $pages = $('<div id="pages"></div>');
            $('<br /><br /><span class="page" id="prev">&nbsp;Previous</span>').appendTo($pages);
            $('<span class="page" id="1" style="background: #c3d7ec;color: #0056b3;" >&nbsp;1</span>').appendTo($pages);
            $('<span class="page" id="2">&nbsp;2</span>').appendTo($pages);
            $('<span class="page" id="3">&nbsp;3</span>').appendTo($pages);
            $('<span class="page" id="4">&nbsp;4</span>').appendTo($pages);
            $('<span class="page" id="next">&nbsp;Next</span>').appendTo($pages);
            $pages.appendTo('#mytable');
      
            $('table').find('tr:has(td)').hide();
            var tr = $('table tr:has(td)');
            for (var i = 0; i <= recordPerPage - 1; i++) {
              $(tr[i]).show();
            }
      
            let currentpage = 1;
            let prevElement = document.getElementById('1');
      
            $('span').click(function (event) {
              // Highlighting page number
              prevElement.style.backgroundColor = "#007bff";
      
              const elementId = $(this).attr('id');
              const clickedElement = document.getElementById(elementId);
              clickedElement.style.backgroundColor = "#c3d7ec";
              clickedElement.style.color = "#0056b3";
              prevElement = clickedElement;
      
              if (($(this).text().trim()) == 'Previous' && currentpage != 0) {
                currentpage--;
              }
              else if (($(this).text().trim()) == 'Next' && currentpage <= totalPages) {
                currentpage++;
              }
              else if (currentpage > 0 && currentpage < totalPages) {
                currentpage = $(this).text();
              }
      
              $('#mytable').find('tr:has(td)').hide();
              var nBegin = (currentpage - 1) * recordPerPage;
              var nEnd = currentpage * recordPerPage - 1;
              for (var i = nBegin; i <= nEnd; i++) {
                $(tr[i]).show();
              }
            });
      
          }
          // Add user validation
          function valid() {
      
            let e = document.getElementById("em").value;
            let a = e.indexOf("@");
            let d = e.lastIndexOf(".");
            let p = document.getElementById("ph").value;
            if (a < 1 || d < a + 2 || d + 2 >= e.length) {
              document.getElementById("email").innerHTML = "Please enter  correct email id.";
            }
            else {
              document.getElementById("email").innerHTML = "";
            }
      
            if (p.length != 10 || typeof p == "NAN") {
              document.getElementById("phone").innerHTML = "Please enter correct phone no.";
            }
            else {
              document.getElementById("phone").innerHTML = "";
            }
            if (a < 1 || d < a + 2 || d + 2 >= e.length || p.length != 10 || typeof p == "NAN") {
              return false;
            }
            else {
              return true;
            }
          }
      
      
          var xmlhttp;
          xmlhttp = new XMLHttpRequest();
          xmlhttp.open("POST", "http://assignmentapi.aspcore.net/api/users", true);
          xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      
      
      
      
          function delet(id) {
            $.ajax({
              url: 'http://assignmentapi.aspcore.net/api/users/' + id,
              type: 'delete',
              success: function (response) {
                window.location.reload(true);
                alert("User Deleted!!");
              }
            });
          }
          let id;
      
          function edit(buttonReference, idd) {
            id = idd;
      
            let f_name = buttonReference.parentElement.parentElement.cells[0].textContent;
            let l_name = buttonReference.parentElement.parentElement.cells[1].textContent;
            let email = buttonReference.parentElement.parentElement.cells[2].textContent;
            let phone = buttonReference.parentElement.parentElement.cells[3].textContent;
      
            if (true) {
              $("#editfname").val(f_name);
              $("#editlname").val(l_name);
              $("#editem").val(email);
              $("#editph").val(phone);
      
              $('#editform').modal('show');
            }
          }
      
          // for edit valid validation
      
          function edit_valid() {
      
            let e = document.getElementById("editem").value;
            let a = e.indexOf("@");
            let d = e.lastIndexOf(".");
            let p = document.getElementById("editph").value;
            if (a < 1 || d < a + 2 || d + 2 >= e.length) {
              document.getElementById("editemail").innerHTML = "Please enter  correct email id.";
            }
            else {
              document.getElementById("editemail").innerHTML = "";
            }
      
            if (p.length != 10 || typeof p == "NAN") {
              document.getElementById("editphone").innerHTML = "Please enter correct phone no.";
            }
            else {
              document.getElementById("editphone").innerHTML = "";
            }
            if (a < 1 || d < a + 2 || d + 2 >= e.length || p.length != 10 || typeof p == "NAN") {
              return false;
            }
            else {
              return true;
            }
          }
      
          function update() {
            const dataToUpdate = {
              firstName: $("#editfname").val(),
              lastName: $("#editlname").val(),
              email: $("#editem").val(),
              phone: $("#editph").val(),
            }
            $.ajax({
              url: 'http://assignmentapi.aspcore.net/api/users/' + id,
              method: 'POST',
              data: dataToUpdate,
              success: function (response) {
                console.log("---reponse---", response);
                alert('updated !!');
              }
            });
          }
      
       
      