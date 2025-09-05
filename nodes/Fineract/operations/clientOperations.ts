import { INodeProperties } from 'n8n-workflow';

export const clientListOperation: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list'],
			},
		},
		default: false,
		description:
			'Whether to return all results or only up to a given limit (WARNING: This will increase the number of requests and may cause timeouts)',
		routing: {
			send: {
				paginate: '={{ $value }}',
			},
			operations: {
				pagination: {
					type: 'offset',
					properties: {
						limitParameter: 'limit',
						offsetParameter: 'offset',
						pageSize: 200,
						type: 'query',
					},
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list'],
				returnAll: [false],
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
				returnAll: [false],
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
				operation: ['list'],
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
				operation: ['list'],
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
				operation: ['list'],
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
				operation: ['list'],
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
				operation: ['list'],
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
				operation: ['list'],
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
				operation: ['list'],
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
				operation: ['list'],
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
				operation: ['list'],
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
				operation: ['list'],
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

// Client Command Operations
export const clientActivateOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to activate',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['activate'],
			},
		},
	},
	{
		displayName: 'Activation Date',
		name: 'activationDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the client should be activated (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['activate'],
			},
		},
		routing: {
			send: {
				property: 'activationDate',
				type: 'body',
			},
		},
	},
];

export const clientCloseOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to close',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['close'],
			},
		},
	},
	{
		displayName: 'Closure Date',
		name: 'closureDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the client should be closed (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['close'],
			},
		},
		routing: {
			send: {
				property: 'closureDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Closure Reason ID',
		name: 'closureReasonId',
		type: 'number',
		default: '',
		description: 'ID of the reason for closing the client',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['close'],
			},
		},
		routing: {
			send: {
				property: 'closureReasonId',
				type: 'body',
			},
		},
	},
];

export const clientRejectOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to reject',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['reject'],
			},
		},
	},
	{
		displayName: 'Rejection Date',
		name: 'rejectionDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the client should be rejected (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['reject'],
			},
		},
		routing: {
			send: {
				property: 'rejectionDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Rejection Reason ID',
		name: 'rejectionReasonId',
		type: 'number',
		default: '',
		description: 'ID of the reason for rejecting the client',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['reject'],
			},
		},
		routing: {
			send: {
				property: 'rejectionReasonId',
				type: 'body',
			},
		},
	},
];

export const clientWithdrawOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to withdraw',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['withdraw'],
			},
		},
	},
	{
		displayName: 'Withdrawal Date',
		name: 'withdrawalDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the client should be withdrawn (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['withdraw'],
			},
		},
		routing: {
			send: {
				property: 'withdrawalDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Withdrawal Reason ID',
		name: 'withdrawalReasonId',
		type: 'number',
		default: '',
		description: 'ID of the reason for withdrawing the client',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['withdraw'],
			},
		},
		routing: {
			send: {
				property: 'withdrawalReasonId',
				type: 'body',
			},
		},
	},
];

export const clientReactivateOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to reactivate',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['reactivate'],
			},
		},
	},
	{
		displayName: 'Reactivation Date',
		name: 'reactivationDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the client should be reactivated (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['reactivate'],
			},
		},
		routing: {
			send: {
				property: 'reactivationDate',
				type: 'body',
			},
		},
	},
];

export const clientUndoRejectionOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to undo rejection',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['undoRejection'],
			},
		},
	},
];

export const clientUndoWithdrawalOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to undo withdrawal',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['undoWithdrawal'],
			},
		},
	},
];

export const clientAssignStaffOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to assign staff to',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['assignStaff'],
			},
		},
	},
	{
		displayName: 'Staff ID',
		name: 'staffId',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the staff member to assign to the client',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['assignStaff'],
			},
		},
		routing: {
			send: {
				property: 'staffId',
				type: 'body',
			},
		},
	},
];

export const clientUnassignStaffOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to unassign staff from',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['unassignStaff'],
			},
		},
	},
];

export const clientProposeTransferOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to propose transfer for',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['proposeTransfer'],
			},
		},
	},
	{
		displayName: 'Destination Office ID',
		name: 'destinationOfficeId',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the office to transfer the client to',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['proposeTransfer'],
			},
		},
		routing: {
			send: {
				property: 'destinationOfficeId',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Transfer Date',
		name: 'transferDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the transfer should occur (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['proposeTransfer'],
			},
		},
		routing: {
			send: {
				property: 'transferDate',
				type: 'body',
			},
		},
	},
];

export const clientWithdrawTransferOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to withdraw transfer for',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['withdrawTransfer'],
			},
		},
	},
];

export const clientAcceptTransferOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to accept transfer for',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['acceptTransfer'],
			},
		},
	},
	{
		displayName: 'Transfer Date',
		name: 'transferDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the transfer should occur (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['acceptTransfer'],
			},
		},
		routing: {
			send: {
				property: 'transferDate',
				type: 'body',
			},
		},
	},
];

export const clientRejectTransferOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to reject transfer for',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['rejectTransfer'],
			},
		},
	},
];

export const clientUpdateSavingsAccountOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to update savings account for',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['updateSavingsAccount'],
			},
		},
	},
	{
		displayName: 'Savings Account ID',
		name: 'savingsAccountId',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the savings account to set as default',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['updateSavingsAccount'],
			},
		},
		routing: {
			send: {
				property: 'savingsAccountId',
				type: 'body',
			},
		},
	},
];

export const clientProposeAndAcceptTransferOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the client to propose and accept transfer for',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['proposeAndAcceptTransfer'],
			},
		},
	},
	{
		displayName: 'Destination Office ID',
		name: 'destinationOfficeId',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the office to transfer the client to',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['proposeAndAcceptTransfer'],
			},
		},
		routing: {
			send: {
				property: 'destinationOfficeId',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Transfer Date',
		name: 'transferDate',
		type: 'dateTime',
		default: '',
		description: 'Date when the transfer should occur (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['proposeAndAcceptTransfer'],
			},
		},
		routing: {
			send: {
				property: 'transferDate',
				type: 'body',
			},
		},
	},
];
