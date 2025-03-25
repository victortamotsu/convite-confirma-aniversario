# Birthday Invitation Site

This project is a simple web application created to send out invitations for a special birthday celebration. The site is designed to be responsive and user-friendly, allowing guests to confirm their attendance and provide information about their family members.

## Project Structure

```
birthday-invitation-site
├── public
│   ├── index.html        # Main HTML document for the site
│   ├── styles.css       # Styles for the website
│   └── favicon.ico      # Favicon for the website
├── src
│   ├── app.js           # Entry point for the JavaScript application
│   ├── components
│   │   ├── Form.js      # Component for the confirmation form
│   │   └── Confirmation.js # Component for displaying confirmation message
│   └── utils
│       └── googleSheetsAPI.js # Functions to interact with Google Sheets API
├── package.json          # Configuration file for npm
├── README.md             # Documentation for the project
└── .gitignore            # Files and directories to be ignored by Git
```

## Features

- Responsive design for mobile and desktop users.
- A confirmation form for guests to fill out their names and family members.
- Integration with Google Sheets API to store and manage guest responses.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd birthday-invitation-site
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the site.

## Usage

Guests can fill out the confirmation form with their names and the names of their family members. Upon submission, the data will be sent to a Google Spreadsheet for tracking attendance.

## License

This project is open-source and available under the MIT License.