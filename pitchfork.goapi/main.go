package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type department struct {
	DepartmentID string `json:"DepartmentID"`
	Activity     string `json:"Activity"`
	Industry     string `json:"Industry"`
	Standard     string `json:"Standard"`
}

type allDepartments []department

var departments = allDepartments{
	{
		DepartmentID: "A",
		Activity:     "Jordbruk, skogsbruk och fiske",
		Industry:     "Företag inom jordbruk, skogsbruk och fiske",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "B",
		Activity:     "Utvinning av mineral",
		Industry:     "Gruvor och mineralutvinningsindustri",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "C",
		Activity:     "Tillverkning",
		Industry:     "Tillverkningsindustri",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "D",
		Activity:     "Försörjning av el, gas, värme och kyla",
		Industry:     "El-, gas- och värmeverk",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "E",
		Activity:     "Vattenförsörjning; avloppsrening, avfallshantering och sanering",
		Industry:     "Vattenverk; reningsverk o.d., avfallsanläggningar",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "F",
		Activity:     "Byggverksamhet",
		Industry:     "Byggindustri",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "G",
		Activity:     "Handel; reparation av motorfordon och motorcyklar",
		Industry:     "Handel; serviceverkstäder för motorfordon och motorcyklar",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "H",
		Activity:     "Transport och magasinering",
		Industry:     "Transport- och magasineringsföretag",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "I",
		Activity:     "Hotell- och restaurangverksamhet",
		Industry:     "Hotell och restauranger",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "J",
		Activity:     "Informations- och kommunikationsverksamhet",
		Industry:     "Informations- och kommunikationsföretag",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "K",
		Activity:     "Finans- och försäkringsverksamhet",
		Industry:     "Kreditinstitut och försäkringsbolag",
		Standard:     "SNI2007",
	},
	{
		DepartmentID: "L",
		Activity:     "Fastighetsverksamhet",
		Industry:     "Fastighetsbolag och fastighetsförvaltare",
		Standard:     "SNI2007",
	},
}

func getAllDepartments(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(departments)
}

func getDepartment(w http.ResponseWriter, r *http.Request) {
	departmentID := mux.Vars(r)["id"]
	for _, department := range departments {
		if department.DepartmentID == departmentID {
			w.Header().Add("Content-Type", "application/json")
			json.NewEncoder(w).Encode(department)
		}
	}
}

func createDepartment(w http.ResponseWriter, r *http.Request) {
	var newDepartment department
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Bad request!")
	}

	json.Unmarshal(reqBody, &newDepartment)
	departments = append(departments, newDepartment)

	w.WriteHeader(http.StatusCreated)
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newDepartment)
}

func updateDepartment(w http.ResponseWriter, r *http.Request) {
	departmentID := mux.Vars(r)["id"]
	var updatedDepartment department
	reqBody, err := ioutil.ReadAll(r.Body)

	if err != nil {
		fmt.Fprintf(w, "Bad request!")
	}

	json.Unmarshal(reqBody, &updatedDepartment)

	for i, department := range departments {
		if department.DepartmentID == departmentID {
			department.Activity = updatedDepartment.Activity
			department.Industry = updatedDepartment.Industry
			department.Standard = updatedDepartment.Standard
			departments = append(departments[:i], department)

			w.Header().Add("Content-Type", "application/json")
			json.NewEncoder(w).Encode(department)
		}
	}
}

func deleteDepartment(w http.ResponseWriter, r *http.Request) {
	departmentID := mux.Vars(r)["id"]

	for i, department := range departments {
		if department.DepartmentID == departmentID {
			departments = append(departments[:i], departments[i+1:]...)
			fmt.Fprintf(w, "The department with ID %v has been deleted successfully", departmentID)
		}
	}
}

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to Pitchfork Go API!")
}

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homeLink)
	router.HandleFunc("/departments", getAllDepartments).Methods("GET")
	router.HandleFunc("/departments/{id}", getDepartment).Methods("GET")
	router.HandleFunc("/department", createDepartment).Methods("POST")
	router.HandleFunc("/departments/{id}", updateDepartment).Methods("PATCH")
	router.HandleFunc("/departments/{id}", deleteDepartment).Methods("DELETE")
	log.Fatal(http.ListenAndServe(":1337", router))
}
