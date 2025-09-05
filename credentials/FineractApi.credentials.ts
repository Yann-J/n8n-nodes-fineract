import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class FineractApi implements ICredentialType {
	name = 'fineractApi';
	displayName = 'Fineract API';
	documentationUrl =
		'https://mifosforge.jira.com/wiki/spaces/docs/pages/52096789/API+Documentation';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://your-fineract-instance.com',
			placeholder: 'https://your-fineract-instance.com',
			description: 'The base URL of your Fineract instance',
			required: true,
		},
		{
			displayName: 'Authentication Method',
			name: 'authenticationMethod',
			type: 'options',
			options: [
				{
					name: 'Username/Password',
					value: 'usernamePassword',
				},
				{
					name: 'OIDC Access Token',
					value: 'oidcToken',
				},
			],
			default: 'usernamePassword',
			description: 'Choose the authentication method to use',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			description: 'Your Fineract username',
			displayOptions: {
				show: {
					authenticationMethod: ['usernamePassword'],
				},
			},
			required: true,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Your Fineract password',
			displayOptions: {
				show: {
					authenticationMethod: ['usernamePassword'],
				},
			},
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'OIDC access token for authentication',
			displayOptions: {
				show: {
					authenticationMethod: ['oidcToken'],
				},
			},
			required: true,
		},
		{
			displayName: 'Tenant ID',
			name: 'tenantId',
			type: 'string',
			default: 'default',
			description: 'The tenant identifier (usually "default" for single-tenant setups)',
			required: true,
		},
	];

	// Authentication configuration for Fineract API
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			// auth: {
			// 	username:
			// 		'={{ $credentials.authenticationMethod === "usernamePassword" ? $credentials.username : "" }}',
			// 	password:
			// 		'={{ $credentials.authenticationMethod === "usernamePassword" ? $credentials.password : "" }}',
			// },
			headers: {
				'Fineract-Platform-TenantId': '={{ $credentials.tenantId }}',
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization:
					'={{ $credentials.authenticationMethod === "oidcToken" ? "Bearer " + $credentials.accessToken : $credentials.authenticationMethod === "usernamePassword" ? "Basic " + Buffer.from($credentials.username + ":" + $credentials.password).toString("base64") : "" }}',
			},
		},
	};

	// Test the credentials by making a request to the tenants endpoint
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{ $credentials.baseUrl }}/fineract-provider/api/v1',
			url: '/permissions',
			method: 'GET',
		},
	};
}
