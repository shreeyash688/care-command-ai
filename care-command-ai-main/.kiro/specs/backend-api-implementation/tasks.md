# Implementation Plan: Healthcare Backend API

## Overview

This implementation plan focuses on building a minimal viable backend API for the healthcare application using Node.js, Express, and MongoDB. The implementation prioritizes the three core endpoints (POST /api/patient, GET /api/patient, POST /api/analysis) with proper project structure, error handling, and environment configuration.

## Tasks

- [-] 1. Initialize project and install dependencies
  - Create backend directory structure
  - Initialize npm project with TypeScript configuration
  - Install core dependencies: express, mongoose, cors, dotenv, bcrypt, jsonwebtoken
  - Install dev dependencies: @types/node, @types/express, typescript, ts-node, nodemon
  - Create tsconfig.json with appropriate compiler options
  - Set up .gitignore for node_modules, .env, and build artifacts
  - _Requirements: Project setup and dependency management_

- [ ] 2. Set up configuration and environment management
  - [ ] 2.1 Create environment configuration
    - Create .env.example with required variables (PORT, MONGODB_URI, JWT_SECRET)
    - Create src/config/env.ts to validate and export environment variables
    - _Requirements: Environment variable support_
  
  - [ ] 2.2 Create database configuration
    - Create src/config/database.ts with MongoDB connection logic
    - Implement connection error handling and retry logic
    - Export database connection function
    - _Requirements: MongoDB with Mongoose_
  
  - [ ] 2.3 Create CORS configuration
    - Create src/config/cors.ts with CORS options
    - Configure allowed origins, methods, and headers
    - _Requirements: Express server with CORS_

- [ ] 3. Implement data models with Mongoose schemas
  - [ ] 3.1 Create Patient model
    - Create src/models/Patient.ts with Mongoose schema
    - Define fields: name, age, medicalRecordNumber, gender, bloodType, allergies, conditions, vitals, riskScore, riskLevel
    - Add schema validation rules and indexes
    - Implement pre-save hook for medical record number generation
    - _Requirements: Patient data persistence_
  
  - [ ] 3.2 Create Analysis model
    - Create src/models/Analysis.ts with Mongoose schema
    - Define fields: patientId, type, results, timestamp, performedBy
    - Add schema validation and patient reference
    - _Requirements: Analysis data persistence_

- [ ] 4. Implement utility functions
  - [ ] 4.1 Create response utilities
    - Create src/utils/response.ts with standardized response format functions
    - Implement success and error response helpers
    - _Requirements: Consistent API responses_
  
  - [ ] 4.2 Create validation utilities
    - Create src/utils/validation.ts with input validation functions
    - Implement vital signs validation with medical ranges
    - Implement patient data validation
    - _Requirements: Schema validation_
  
  - [ ] 4.3 Create risk calculation utility
    - Create src/utils/riskCalculation.ts
    - Implement calculateRiskScore function based on vitals and conditions
    - Return risk score (0-100) and risk level (low/medium/high/critical)
    - _Requirements: Patient risk assessment_

- [ ] 5. Implement error handling middleware
  - Create src/middleware/errorHandler.ts
  - Implement global error handler with proper status codes
  - Handle validation errors, database errors, and generic errors
  - Return consistent error response format
  - _Requirements: Error handling middleware_

- [ ] 6. Implement patient endpoints
  - [ ] 6.1 Create patient controller
    - Create src/controllers/patientController.ts
    - Implement createPatient function with validation
    - Implement getPatient function with ID lookup
    - Implement getPatients function with optional filtering
    - Calculate and update risk score when creating/updating patients
    - _Requirements: POST /api/patient, GET /api/patient endpoints_
  
  - [ ] 6.2 Create patient routes
    - Create src/routes/patientRoutes.ts
    - Define POST /api/patients route
    - Define GET /api/patients/:id route
    - Define GET /api/patients route for listing
    - Wire routes to controller functions
    - _Requirements: Patient API routing_

- [ ] 7. Implement analysis endpoint
  - [ ] 7.1 Create analysis controller
    - Create src/controllers/analysisController.ts
    - Implement createAnalysis function
    - Validate patient exists before creating analysis
    - Store analysis results with timestamp
    - _Requirements: POST /api/analysis endpoint_
  
  - [ ] 7.2 Create analysis routes
    - Create src/routes/analysisRoutes.ts
    - Define POST /api/analysis route
    - Define GET /api/analysis/:patientId route for patient's analyses
    - Wire routes to controller functions
    - _Requirements: Analysis API routing_

- [ ] 8. Set up Express application
  - [ ] 8.1 Create Express app configuration
    - Create src/app.ts
    - Initialize Express application
    - Configure JSON body parser middleware
    - Configure CORS middleware
    - Mount patient and analysis routes
    - Mount error handler middleware (must be last)
    - _Requirements: Express server setup with middleware_
  
  - [ ] 8.2 Create server entry point
    - Create src/server.ts
    - Import database connection and Express app
    - Connect to MongoDB before starting server
    - Start Express server on configured port
    - Add graceful shutdown handling
    - _Requirements: Server initialization_

- [ ] 9. Create route aggregator
  - Create src/routes/index.ts
  - Import and export all route modules
  - Provide centralized route mounting point
  - _Requirements: Proper folder structure (routes)_

- [ ] 10. Add package.json scripts
  - Add "dev" script: nodemon with ts-node for development
  - Add "build" script: TypeScript compilation
  - Add "start" script: Run compiled JavaScript
  - Add "lint" script: ESLint for code quality (optional)
  - _Requirements: Development workflow_

- [ ] 11. Create project documentation
  - Create README.md with setup instructions
  - Document environment variables
  - Document API endpoints with example requests
  - Add instructions for running the server
  - _Requirements: Project documentation_

- [ ] 12. Checkpoint - Test core functionality
  - Ensure all TypeScript compiles without errors
  - Test MongoDB connection
  - Test POST /api/patients endpoint with sample data
  - Test GET /api/patients/:id endpoint
  - Test POST /api/analysis endpoint
  - Verify error handling for invalid inputs
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- This implementation focuses on the three core endpoints as specified by the user
- Authentication/authorization is intentionally excluded from this initial implementation
- The structure supports future expansion to include auth, tasks, equipment, and other features
- All code uses TypeScript for type safety
- Error handling is centralized through middleware
- Risk calculation is automatic when patient vitals are provided
- Medical record numbers are auto-generated with unique constraints
