# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /

# Copy producer.py and requirements.txt into the container
COPY producer.py /
COPY requirements.txt /

# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run producer.py when the container launches
CMD ["python", "producer.py"]
