# User List App

This is a **React** application that fetches and displays a list of users from the **JSONPlaceholder API**. The app is containerized using **Docker** and can be easily run either locally or via Docker.
![image](https://github.com/user-attachments/assets/07c1f136-1949-4f3a-817d-cd27fc6ddb1e)

## Features
- Built with **React** and **Material-UI** for a modern UI.
- Fetches user data from the **JSONPlaceholder API**.
- Supports **dark** and **light** themes.
- Runs seamlessly in a **Docker container**.
- Exposed on **port 3000** for easy access.

## How to Run the App

You can run the app **locally** or via **Docker**. Below are the instructions for both methods:

<details>
  <summary><h2>Running Locally</h2></summary>

1. Clone the repository:
    ```bash
    git clone https://github.com/hristianivanov/xtrmnd-user-list-app.git
    ```
2. Navigate to the project directory and install the dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

   The app will now run locally, and you can access it at `http://localhost:5174` by default.
</details>

<details>
  <summary><h2>Running Through Docker</h2></summary>

The Docker image is available on Docker Hub: [hristianfancha/user-list-app](https://hub.docker.com/r/hristianfancha/user-list-app)

1. Pull the Docker image:
    ```bash
    docker pull hristianfancha/user-list-app:latest
    ```
2. Run the Docker container:
    ```bash
    docker run -p 3000:80 hristianfancha/user-list-app:latest
    ```
3. Access the app in your browser at:
    ```bash
    http://localhost:3000
    ```
</details>
