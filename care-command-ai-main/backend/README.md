# Healthcare Backend API

A production-ready RESTful backend API for a healthcare application built with Node.js, Express, TypeScript, and MongoDB.

## Features

- **Role-Based Access Control**: Support for admin, doctor, nurse, patient, and technician roles
- **Patient Management**: Complete CRUD operations for patient records with vital signs tracking
- **Risk Assessment**: Automatic patient risk calculation based on vitals and conditions
- **Task Management**: Task assignment and tracking for healthcare staff
- **Equipment Tracking**: QR code-based equipment management
- **AI Insights**: Health insights and clinical recommendations
- **Appointment Scheduling**: Doctor appointment management
- **Real-time Notifications**: Event-driven notification system

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **CORS**: Configurable cross-origin resource sharing

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository and navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/healthcare-db
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRES_IN=24h
ALLOWED_ORIGINS=http://localhost:3000
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The server will start on `http://localhost:5000` with hot-reloading enabled.

### Production Build
```bash
npm run build
npm start
```

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files (database, env, cors)
│   ├── middleware/      # Express middleware (auth, error handling)
│   ├── models/          # Mongoose models
│   ├── controllers/     # Route controllers
│   ├── services/        # Business logic layer
│   ├── routes/          # API route definitions
│   ├── utils/           # Utility functions
│   ├── types/           # TypeScript type definitions
│   ├── app.ts           # Express app setup
│   └── server.ts        # Server entry point
├── tests/               # Test files
├── dist/                # Compiled JavaScript (generated)
├── .env                 # Environment variables (not in git)
├── .env.example         # Environment template
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

### Patients
- `POST /api/patients` - Create patient
- `GET /api/patients` - List patients (with filtering)
- `GET /api/patients/:id` - Get patient details
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient
- `POST /api/patients/:id/vitals` - Update vital signs
- `GET /api/patients/:id/timeline` - Get care timeline
- `GET /api/patients/:id/risk` - Get risk assessment

### Tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks` - List tasks (with filtering)
- `GET /api/tasks/:id` - Get task details
- `PUT /api/tasks/:id` - Update task
- `POST /api/tasks/:id/complete` - Complete task
- `DELETE /api/tasks/:id` - Delete task

### Analysis
- `POST /api/analysis` - Create analysis
- `GET /api/analysis/:patientId` - Get patient analyses

### Equipment
- `POST /api/equipment` - Register equipment
- `GET /api/equipment` - List equipment
- `GET /api/equipment/:id` - Get equipment details
- `PUT /api/equipment/:id` - Update equipment

### Appointments
- `POST /api/appointments` - Schedule appointment
- `GET /api/appointments` - List appointments
- `PUT /api/appointments/:id` - Update appointment

### Notifications
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/:id/read` - Mark as read
- `PUT /api/notifications/read-all` - Mark all as read

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment (development/production) | development |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/healthcare-db |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRES_IN` | Access token expiration | 24h |
| `JWT_REFRESH_SECRET` | Refresh token secret | - |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token expiration | 7d |
| `ALLOWED_ORIGINS` | CORS allowed origins | http://localhost:3000 |

## Development

### Code Style
The project uses ESLint for code quality. Run linting:
```bash
npm run lint
```

### TypeScript
All code is written in TypeScript with strict mode enabled. Type checking is performed during build.

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Role-based authorization
- Input validation and sanitization
- CORS protection
- Rate limiting (configurable)
- Environment variable validation

## Error Handling

The API uses a centralized error handling middleware that returns consistent error responses:

```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE",
    "statusCode": 400
  }
}
```

## Response Format

All successful API responses follow this format:

```json
{
  "success": true,
  "data": {
    // Response data
  }
}
```

## License

ISC

## Support

For issues and questions, please open an issue in the repository.
