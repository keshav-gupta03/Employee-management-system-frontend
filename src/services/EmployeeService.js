import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URl="http://localhost:8080/api/v1/employees";
class EmployeeService{
    getEmployees(){
        return axios.get(BASE_URl);
    }

    createEmployee(employee){
        return axios.post(BASE_URl,employee);
    }

    getEmployeeById(employeeId){
        return axios.get(BASE_URl + '/' + employeeId);
    }
    getEmployeeByEmailId(emailId){
        return axios.get("http://localhost:8080/api/v1/employee/" + emailId);
    }

    updateEmployee(employee,employeeId){
        return axios.put(BASE_URl + "/" +employeeId , employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(BASE_URl + "/" + employeeId);
    }

    downloadInformation(employeeId){
        window.location.href = "http://localhost:8080/api/v1/employee/export/pdf" + "/" + employeeId ;
        return "successfully downloaded information";
    }

    uploadFile(file,id){
        
        const data = new FormData() 
        data.append('file', file);
        console.warn(file);
        let url = "http://localhost:8080/api/v1/upload-file?id="+id;
 
        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })
    }
}

export default new EmployeeService();