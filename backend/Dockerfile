# Step 1: Use the official Python image
FROM python:3.9-slim

# Set the working directory for the backend
WORKDIR /app

# Copy requirements.txt to install dependencies
COPY backend/requirements.txt /app/

# Install backend dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the Django backend code
COPY backend/ /app/

# Set environment variable to prevent Python from buffering output
ENV PYTHONUNBUFFERED 1

# Expose the port for the Django app (default is 8000)
EXPOSE 8000

# Command to run Django application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]