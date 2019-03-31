import axios from "axios";

export default {
  // Gets all alumnos
  getAlumnos: function() {
    console.log("getAlumnos API");
    return axios.get("/api/alumnos/");
  },
  // Gets the alumno with the given id
  getOneAlumno: function(id) {
    return axios.get("/api/alumnos/" + id);
  },
  // Deletes the alumno with the given id
  deleteAlumno: function(id) {
    return axios.delete("/api/alumnos/" + id);
  },
  // Saves a alumno to the database
  saveAlumno: function(alumnoData) {
    return axios.post("/api/alumnos", alumnoData);
  },

  updateAlumno: function(id, alumnoData) {
    return axios.put("/api/alumnos/" + id, alumnoData);
  },

  //----------CSV-----------------------

  saveCSV: function(csvData) {
    return axios.post("/api/userIndex", csvData);
  },

  getCSV: function(csvData) {
    return axios.get("/api/userIndex", csvData);
  },

  savePopulate: function(populateData) {
    return axios.post("/api/populateduser", populateData);
  },

  //------USER--------
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  //----------AUTHENTICATION---------------
  getUser: function(id) {
    return axios.get(`/api/authenticate/${id}`);
  },

  register: function(registerData) {
    return axios.post("/api/authentication/register", registerData);
  },

  login: function(loginData) {
    return axios.post("/api/authentication/login", loginData);
  },

  logout: function() {
    return axios.get("/api/authentication/logout");
  },

  //---------PRODUCTS---------------
  getProducts: function(productsData) {
    return axios.get("/api/userIndex/products", productsData);
  },

  //-----------PAYPAL------------------------
  checkout: function(checkoutData) {
    return axios.get("/api/paypal/pay", checkoutData);
  },

  payment: function(checkoutData) {
    return axios.post("/api/paypal/pay", checkoutData);
  },

  success: function(checkoutData) {
    return axios.get("/api/paypal/sucess", checkoutData);
  },

  cancel: function(checkoutData) {
    return axios.get("/api/paypal/cancel", checkoutData);
  },

  //-----------------Render Table--------------
  getOneTable: function(tableData) {
    return axios.post("/api/table", tableData);
  }
};
