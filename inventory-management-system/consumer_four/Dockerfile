# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /

# Copy order_processing.py and requirements.txt into the container
COPY order_processing.py /
COPY requirements.txt /

# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8002 available to the world outside this container
EXPOSE 8004

# Run order_processing.py when the container launches
CMD ["python", "order_processing.py"]
