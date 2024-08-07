import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Akash";
const yourPassword = "simmy";
const yourAPIKey = "65a7aa36-260c-4b40-b452-3ed6285703c2";
const yourBearerToken = "45808125-68bf-408c-a35c-b0273a6845a4";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/random');
    console.log('random request get successful: ', response.data);
    res.render("index.ejs",{content :JSON.stringify(response.data)});
  } catch (error) {
    console.error('Error posting data: ', error);
    res.render("index.ejs",{content : error });
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 try {
  const response = await axios.get("https://secrets-api.appbrewery.com/all?page=1", {
      auth: {
        username: yourUsername,
        password: yourPassword
      }
 });
 res.render("index.ejs",{content :JSON.stringify(response.data)});
 console.log('Data fetched successfully:', response.data);
 } catch (error) {
  console.error('Error posting data: ', error);
  res.render("index.ejs",{content : error });

 }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`);
    console.log('Data fetched successfully:', response.data);
    res.render("index.ejs",{content :JSON.stringify(response.data)});
  } catch (error) {
    console.error('Error fetching data:', error);
    res.render("index.ejs",{content:error});
  }
});

app.get("/bearerToken",async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const response = await axios.get(`${API_URL}secrets/42`,{
      headers: {
        'Authorization': `Bearer ${yourBearerToken}`
      }
    });
    console.log('Data fetched successfully:', response.data);
    res.render("index.ejs",{content :JSON.stringify(response.data)});
  } catch (error) {
    console.error('Error fetching data:', error);
    res.render("index.ejs",{content:error});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
