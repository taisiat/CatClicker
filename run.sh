#!/bin/bash

# Run frontend
npm install
npm start &

# Run server
cd backend
npm install
node server.js
