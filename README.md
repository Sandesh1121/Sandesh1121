body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333333;
  }
  
  .jobs-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  
  .job {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .job:hover {
    transform: translateY(-5px);
  }
  
  .job h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #333333;
  }
  
  .job-company {
    font-weight: bold;
    color: #777777;
  }
  
  .status {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #555555;
  }
  
  .job-actions a {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .job-actions a:hover {
    background-color: #0056b3;
  }
  
  
  .no-jobs-message {
    text-align: center;
    font-style: italic;
    color: #888888;
    margin-top: 20px;
  }
  .para {
    text-align: center;
    margin-top: 20px;
  }
  
  .para a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .para a:hover {
    background-color: #0056b3;
  }
  
  
