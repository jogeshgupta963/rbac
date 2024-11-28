# Role-Based Access Control (RBAC) System

This project implements a robust **Role-Based Access Control (RBAC)** system, enabling efficient management of roles and permissions. The system supports single roles per user, multiple permissions for a role, and dynamic access control for various routes.

## Features

-   **Single Role per User**: Each user is assigned one role.
-   **Multiple Permissions per Role**: Roles can have multiple permissions associated.
-   **Route-Based Access Control**: Permissions are used to determine access to specific routes.
-   **Dynamic Authorization**: The RBAC system ensures that roles and permissions dynamically control user actions.

## Prerequisites

-   Ensure you have [Postman](https://www.postman.com/) installed for testing the API.
-   Import the provided Postman collection (`.json` file) into Postman to test the routes directly.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-folder>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the server:

    ```bash
    npm run dev
    ```

4. Access the application at `http://localhost:<your-port(PORT in .env)>`.

## Roles and Permissions

### Roles

| Role        | Description                                         |
| ----------- | --------------------------------------------------- |
| **Guest**   | Basic role with minimal permissions.                |
| **User**    | Standard role with access to user-specific actions. |
| **Manager** | Elevated role with access to managerial actions.    |

### Example Permissions per Role

| Permission       | Guest | User | Manager |
| ---------------- | ----- | ---- | ------- |
| `view_profile`   | ✅    | ✅   | ✅      |
| `edit_profile`   | ❌    | ✅   | ✅      |
| `manage_users`   | ❌    | ❌   | ✅      |
| `access_reports` | ❌    | ✅   | ✅      |

## Routes

The API exposes several routes. Access control is enforced based on roles and permissions. Below is a summary of the main routes:

| HTTP Method | Route          | Description  | Required Permission |
| ----------- | -------------- | ------------ | ------------------- |
| `GET`       | `/api/profile` | View profile | `view_profile`      |
| `PUT`       | `/api/profile` | Edit profile | `edit_profile`      |

For a full list of routes, import the provided Postman collection.

## Using Postman

1. Import the Postman collection into your workspace:

    - **Option 1**: Use the `.json` file located in the project folder.
    - **Option 2**: Use the shared Postman link: `https://warped-rocket-408603.postman.co/workspace/My-Workspace~09f6a9bd-59b5-49c2-864e-a34fbd328147/collection/17180665-4554a595-6a48-42e4-8bd6-f9e5bc666821?action=share&creator=17180665`.

2. Test the routes:
    - Use the provided routes in the collection.
    - Ensure the appropriate role permissions are tested with valid tokens.
