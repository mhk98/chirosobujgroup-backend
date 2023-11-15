## Technology used

This repository uses a number libraries to work:

- [NodeJs]
- [ExpressJs]
- [Cors]
- [Sequelize]
- [MySQL]

# Express.js Project

This is a sample Express.js project. It provides a basic setup with instructions on how to run the project and test its endpoints using Postman.

## Getting Started

Follow these steps to run and test the project:

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mhk98/BlockStakReportManagementMERN.git

   ```

2. Open command prompt and type cd BlockStakReportManagementMERN
3. npm install (Install project dependencies)
4. npm run dev (Run the BlockStakReportManagementMERN project server)
5. Database: I use remote database. That's why no need to setup local mysql database environment.
6. The server will be running at http://localhost:5000


# Blockstak Report Management

Welcome to the Project Name project! This README provides information about the available API endpoints.

## API Endpoints

### Create a New User

- **Route:** POST `/api/v1/user/signup`
- **Description:** Create a new user.

### Login User

- **Route:** POST `/api/v1/user/login`
- **Description:** Login user.

### Get a List of Users

- **Route:** GET `/api/v1/user/`
- **Description:** Get a list of users.

### Generate Refresh Token

- **Route:** POST `/api/v1/user/refresh-token/:`
- **Description:** Generate a refresh token after the access token expires.

### Create a New Report

- **Route:** POST `/api/v1/report/create-report`
- **Description:** Create a new report.

### Get All Reports

- **Route:** GET `/api/v1/report/`
- **Description:** Get all reports.

### Get Single Report

- **Route:** GET `/api/v1/report/:id`
- **Description:** Get a single report by ID.

### Delete a Report

- **Route:** DELETE `/api/v1/report/:id`
- **Description:** Delete a report by ID.

### Update a Report

- **Route:** PUT `/api/v1/report/:id`
- **Description:** Update a report by ID.

#### JSON Data for Creating a New Report

To create a new report, send a POST request with the following JSON data:

   ```json
   {
   "Name":"Mohsin",
   "Email":"test123@gmail.com",
   "Password":"test@123",
   "Phone":"01518301096",
   "Address":"Dhaka",
   "Profession":"Engineer",
   "Favorite_colors":"Black"
   }
````

#### JSON Data for Creating a New Report

To create a new report, send a POST request with the following JSON data:

```json
{
  "Name": "Mohsin",
  "Email": "mohsinkabir2017@gmail.com",
  "Phone": "01518301038",
  "Address": "Dhaka",
  "Profession": "Engineer",
  "Favorite_colors": "Black"
}



### Facing Challenges

I haven't faced any technical challenges, but I had some trouble understanding certain aspects of the task. However, I have resolved those issues by emailing you.




