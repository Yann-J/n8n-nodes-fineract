# n8n-nodes-fineract

![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

This package provides n8n nodes for integrating with the [Fineract API](https://mifosforge.jira.com/wiki/spaces/docs/pages/52096789/API+Documentation), enabling you to manage clients and loans in your microfinance operations through n8n workflows.

## Features

- **Unified Fineract Node**: Single node with Client and Loan resources for comprehensive Fineract API integration
- **Client Management**: List, create, update, retrieve, and delete client information
- **Loan Management**: Create, approve, disburse, repay, and manage loans throughout their lifecycle
- **Secure Authentication**: Support for Fineract's authentication system with tenant isolation
- **Comprehensive API Coverage**: Full support for Fineract's client and loan management APIs

## Installation

To use this package in your n8n instance:

1. Install the package:

   ```bash
   npm install n8n-nodes-fineract
   ```

2. Restart your n8n instance to load the new nodes.

## Configuration

### Fineract API Credentials

Before using the nodes, you need to configure your Fineract API credentials. The node supports two authentication methods:

#### Username/Password Authentication

1. **Base URL**: The URL of your Fineract instance (e.g., `https://your-fineract-instance.com`)
2. **Authentication Method**: Select "Username/Password"
3. **Username**: Your Fineract username
4. **Password**: Your Fineract password
5. **Tenant ID**: The tenant identifier (usually "default" for single-tenant setups)

#### OIDC Access Token Authentication

1. **Base URL**: The URL of your Fineract instance (e.g., `https://your-fineract-instance.com`)
2. **Authentication Method**: Select "OIDC Access Token"
3. **Access Token**: Your OIDC access token
4. **Tenant ID**: The tenant identifier (usually "default" for single-tenant setups)

> **Note**: For OIDC authentication, you'll need to obtain an access token from your Fineract instance's OIDC provider. The token should have the necessary scopes to access the Fineract API.

## Usage

### Fineract Node

The Fineract node provides two main resources:

#### Client Resource

The Client resource provides the following operations:

- **List**: Retrieve a list of clients with optional filtering
- **Get**: Retrieve a specific client by ID
- **Create**: Create a new client
- **Update**: Update an existing client's information
- **Delete**: Delete a client

#### Loan Resource

The Loan resource provides the following operations:

- **List**: Retrieve a list of loans with optional filtering
- **Get**: Retrieve a specific loan by ID
- **Create**: Create a new loan application
- **Update**: Update an existing loan
- **Approve**: Approve a loan application
- **Disburse**: Disburse an approved loan
- **Repay**: Record loan repayments

### Example Workflows

#### Creating a New Client

1. Add a "Fineract" node to your workflow
2. Select "Client" resource and "Create" operation
3. Configure the required fields:
   - First Name
   - Last Name
   - Office ID
   - Activation Date
4. Optionally configure additional fields like mobile number, email, etc.

#### Creating and Approving a Loan

1. Add a "Fineract" node to create a loan
2. Select "Loan" resource and "Create" operation
3. Configure the loan details (client ID, product ID, principal amount, etc.)
4. Add another "Fineract" node to approve the loan
5. Select "Loan" resource and "Approve" operation
6. Set the approval date and approved amount

## API Documentation

For detailed information about the Fineract API, refer to the [official documentation](https://mifosforge.jira.com/wiki/spaces/docs/pages/52096789/API+Documentation).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
