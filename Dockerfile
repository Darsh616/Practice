# Pull the Base image from Docker Hub
FROM --platform=$BUILDPLATFORM python:3.10-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy all the files needed
COPY Flask.py /app
COPY index.html /app
COPY requirements.txt /app

# Install the Python dependencies
RUN pip3 install -r requirements.txt

# Expose the port that Flask will run on
EXPOSE 8000

# Entry point for the container
ENTRYPOINT [ "python3" ]
CMD [ "Flask.py" ]

#Dockerfile
