# Kanban Board
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A JWT authenticated Kanban board application that allows users to create, read, update, and delete taks,s

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. **Install dependencies**
   ```
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

2. **Set up the database**
   
   Create a PostgreSQL database named `kanban_db`:
   ```
   createdb kanban_db
   ```

3. **Create a .env file in the server directory**
   ```
   DB_NAME=kanban_db
   DB_USER=yourusername
   DB_PASSWORD=yourpassword
   JWT_SECRET_KEY=your_jwt_secret
   ```

4. **Seed the database**
   ```
   cd server && npm run seed
   ```

5. **Start the development servers**
   ```
   npm run start:dev
   ```

## Usage

### Default Login Credentials

After seeding the database, you can log in with the following credentials:

- Username: `JollyGuru` (or `SunnyScribe` or `RadiantComet`)
- Password: `password`

### Creating Tickets

1. Log in to the application
2. Click the "New Ticket" button
3. Fill in the ticket details (name, description, status)
4. Assign the ticket to a user
5. Click "Submit Form"

### Updating Tickets

1. Click the "Edit" button on a ticket
2. Modify the ticket details
3. Click "Submit Form"

### Deleting Tickets

1. Click the "Delete" button on a ticket
2. Confirm the deletion

## License

This project is licensed under the MIT License - see [MIT](https://opensource.org/licenses/MIT) for details.

## Credits

Julius Chi, CoPilot, Claude AI

## Tests

```
N/A
```

## Questions

For questions or concerns, please contact me:

GitHub: [JuliusC72](https://github.com/JuliusC72)

Email: [72jules@gmail.com](mailto:72jules@gmail.com)

[Deployed Link](https://kanban-board-u1v3.onrender.com)
