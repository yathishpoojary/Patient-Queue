var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {
   const baseURL = "http://localhost:8080/";
   $scope.problem = "";
   $scope.patientList = [];

   $scope.init = function () {
      getPatientData();
   }

   $scope.deleteFunction = function (patient) {
      $http.post(baseURL + "removePatients", patient)
         .then(function (response) {
            //alert(response);
            getPatientData();
         }, function (error) {
            alert("Error");
         });
   }

   $scope.submitPatientData = function () {
      console.log("name is ", $scope.name);
      console.log(" number is ", $scope.number)
      console.log("address ", $scope.address)
      console.log("problem is", $scope.problem)
      var name = $scope.name;
      var number = $scope.number;
      var address = $scope.address;
      var problem = $scope.problem;

      if (name == "" || name == undefined) {
         alert("Please enter name");
      } else if (number == "" || number == undefined) {
         alert("Please enter number");
      } else if (address == "" || address == undefined) {
         alert("Please enter address");
      } else if (problem == "" || problem == undefined || problem == "Choose") {
         alert("Please select problem");
      } else {
         var patient = new Object();
         patient.pName = name;
         patient.pAddress = address;
         patient.pNumber = number;
         patient.pProblem = problem;

         submitPatient(patient);
      }
   }

   $scope.removePatientList = function () {
      $http.post(baseURL + "removeAllPatients", "")
         .then(function (response) {
            alert(response);
            getPatientData();
         }, function (error) {
            alert("Error");
         });
   }

   submitPatient = function (patient) {
      $http.post(baseURL + "submitPatientData", patient)
         .then(function (response) {
            ///alert(response);
            getPatientData();
         }, function (error) {
            alert("Error");
         });
   }

   getPatientData = function () {
      $http.get(baseURL + "getPatients")
         .then(function (response) {
            $scope.patientList = response.data;
         }, function (error) {
            alert("Error");
         });
   }

   $scope.search=function() {
      var cell;
      var input = document.getElementById("myInput");
      var inputUpper = input.value.toUpperCase();
      const table = document.getElementById("myTable");
      var tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
          if (j == 0 || j == 2 || j == 3) {
            var textValue = td[j].innerText;
            if (textValue) {
              if (textValue.toUpperCase().indexOf(inputUpper) > -1) {
                tr[i].style.display = "";
                break;
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
    
      }
    }

    
});

