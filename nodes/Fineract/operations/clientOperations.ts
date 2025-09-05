import { INodeProperties } from 'n8n-workflow';

export const clientListOperation: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list'],
			},
		},
		routing: {
			send: {
				property: 'limit',
				type: 'query',
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		default: 0,
		description: 'Number of records to skip',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list'],
			},
		},
		routing: {
			send: {
				property: 'offset',
				type: 'query',
			},
		},
	},
	{
		displayName: 'Display Name',
		name: 'displayName',
		type: 'string',
		default: '',
		description: 'Filter clients by display name (partial match)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		routing: {
			send: {
				property: 'displayName',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'Office ID',
		name: 'officeId',
		type: 'number',
		default: '',
		description: 'Filter clients by office ID',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		routing: {
			send: {
				property: 'officeId',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'Under Hierarchy',
		name: 'underHierarchy',
		type: 'string',
		default: '',
		description: 'Filter clients under a specific hierarchy (office hierarchy path)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		routing: {
			send: {
				property: 'underHierarchy',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'External ID',
		name: 'externalId',
		type: 'string',
		default: '',
		description: 'Filter clients by external ID',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		routing: {
			send: {
				property: 'externalId',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		default: '',
		description: 'Filter clients by first name',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		routing: {
			send: {
				property: 'firstName',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		default: '',
		description: 'Filter clients by last name',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		routing: {
			send: {
				property: 'lastName',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'Orphans Only',
		name: 'orphansOnly',
		type: 'boolean',
		default: false,
		description: 'Whether to show only orphaned clients (clients without groups)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		routing: {
			send: {
				property: 'orphansOnly',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'SQL Search',
		name: 'sqlSearch',
		type: 'string',
		default: '',
		description: 'Custom SQL search query for advanced filtering',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		routing: {
			send: {
				property: 'sqlSearch',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		type: 'options',
		default: 'accountNo',
		description: 'Order results by field',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		options: [
			{
				name: 'Display Name',
				value: 'displayName',
			},
			{
				name: 'Account No',
				value: 'accountNo',
			},
			{
				name: 'Office ID',
				value: 'officeId',
			},
			{
				name: 'Office Name',
				value: 'officeName',
			},
		],
		routing: {
			send: {
				property: 'orderBy',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'Sort Order',
		name: 'sortOrder',
		type: 'options',
		default: 'ASC',
		description: 'Sort order for results',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list', 'getAll'],
			},
		},
		options: [
			{
				name: 'Ascending',
				value: 'ASC',
			},
			{
				name: 'Descending',
				value: 'DESC',
			},
		],
		routing: {
			send: {
				property: 'sortOrder',
				type: 'query',
				value: '={{ $value || undefined }}',
			},
		},
	},
];

export const clientGetAllOperation: INodeProperties[] = [];

export const clientGetOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to retrieve',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['get'],
			},
		},
	},
];

export const clientCreateOperation: INodeProperties[] = [
	{
		displayName: 'First Name',
		name: 'firstname',
		type: 'string',
		default: '',
		required: true,
		description: 'Client first name',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'firstname',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastname',
		type: 'string',
		default: '',
		required: true,
		description: 'Client last name',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'lastname',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Office ID',
		name: 'officeId',
		type: 'number',
		default: 1,
		required: true,
		description: 'Office ID where the client belongs',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'officeId',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Active',
		name: 'active',
		type: 'boolean',
		default: true,
		description: 'Whether the client is active',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'active',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Activation Date',
		name: 'activationDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the client was activated (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'activationDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Mobile Number',
		name: 'mobileNo',
		type: 'string',
		default: '',
		description: 'Client mobile number',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'mobileNo',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Email Address',
		name: 'emailAddress',
		type: 'string',
		default: '',
		description: 'Client email address',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'emailAddress',
				type: 'body',
			},
		},
	},
	{
		displayName: 'External ID',
		name: 'externalId',
		type: 'string',
		default: '',
		description: 'External identifier for the client',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'externalId',
				type: 'body',
			},
		},
	},
];

export const clientUpdateOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to update',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'firstname',
		type: 'string',
		default: '',
		description: 'Client first name',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'firstname',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastname',
		type: 'string',
		default: '',
		description: 'Client last name',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'lastname',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Office ID',
		name: 'officeId',
		type: 'number',
		default: 1,
		description: 'Office ID where the client belongs',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'officeId',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Active',
		name: 'active',
		type: 'boolean',
		default: true,
		description: 'Whether the client is active',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'active',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Mobile Number',
		name: 'mobileNo',
		type: 'string',
		default: '',
		description: 'Client mobile number',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'mobileNo',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Email Address',
		name: 'emailAddress',
		type: 'string',
		default: '',
		description: 'Client email address',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'emailAddress',
				type: 'body',
			},
		},
	},
	{
		displayName: 'External ID',
		name: 'externalId',
		type: 'string',
		default: '',
		description: 'External identifier for the client',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'externalId',
				type: 'body',
			},
		},
	},
];

export const clientDeleteOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to delete',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['delete'],
			},
		},
	},
];
