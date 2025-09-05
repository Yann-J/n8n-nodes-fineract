import { INodeProperties } from 'n8n-workflow';

// Unified Fineract operations for both Client and Loan resources
export const fineractOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['client'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new client',
				action: 'Create a client',
				routing: {
					request: {
						method: 'POST',
						url: '/clients',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a client',
				action: 'Delete a client',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/clients/{{ $parameter.clientId }}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a specific client by ID',
				action: 'Get a client',
				routing: {
					request: {
						method: 'GET',
						url: '=/clients/{{ $parameter.clientId }}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List all clients',
				action: 'List all clients',
				routing: {
					request: {
						method: 'GET',
						url: '/clients',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing client',
				action: 'Update a client',
				routing: {
					request: {
						method: 'PUT',
						url: '=/clients/{{ $parameter.clientId }}',
					},
				},
			},
		],
		default: 'list',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['loan'],
			},
		},
		options: [
			{
				name: 'Approve',
				value: 'approve',
				description: 'Approve a loan',
				action: 'Approve a loan',
				routing: {
					request: {
						method: 'POST',
						url: '=/loans/{{ $parameter.loanId }}?command=approve',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new loan',
				action: 'Create a loan',
				routing: {
					request: {
						method: 'POST',
						url: '/loans',
					},
				},
			},
			{
				name: 'Disburse',
				value: 'disburse',
				description: 'Disburse a loan',
				action: 'Disburse a loan',
				routing: {
					request: {
						method: 'POST',
						url: '=/loans/{{ $parameter.loanId }}?command=disburse',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a specific loan by ID',
				action: 'Get a loan',
				routing: {
					request: {
						method: 'GET',
						url: '=/loans/{{ $parameter.loanId }}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List all loans',
				action: 'List all loans',
				routing: {
					request: {
						method: 'GET',
						url: '/loans',
					},
				},
			},
			{
				name: 'Repay',
				value: 'repay',
				description: 'Record a loan repayment',
				action: 'Record a loan repayment',
				routing: {
					request: {
						method: 'POST',
						url: '=/loans/{{ $parameter.loanId }}/transactions?command=repayment',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing loan',
				action: 'Update a loan',
				routing: {
					request: {
						method: 'PUT',
						url: '=/loans/{{ $parameter.loanId }}',
					},
				},
			},
		],
		default: 'list',
	},
];

// Client fields for different operations
const clientListOperation: INodeProperties[] = [
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
		displayName: 'Search Query',
		name: 'search',
		type: 'string',
		default: '',
		description: 'Search query to filter clients',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['list'],
			},
		},
		routing: {
			send: {
				property: 'search',
				type: 'query',
			},
		},
	},
];

const clientGetOperation: INodeProperties[] = [
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

const clientCreateOperation: INodeProperties[] = [
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

const clientUpdateOperation: INodeProperties[] = [
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

const clientDeleteOperation: INodeProperties[] = [
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

// Loan fields for different operations
const loanListOperation: INodeProperties[] = [
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
				resource: ['loan'],
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
				resource: ['loan'],
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
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		description: 'Filter loans by client ID',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['list'],
			},
		},
		routing: {
			send: {
				property: 'clientId',
				type: 'query',
			},
		},
	},
	{
		displayName: 'Loan Status',
		name: 'status',
		type: 'options',
		default: 'all',
		description: 'Filter loans by status',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['list'],
			},
		},
		options: [
			{
				name: 'Active',
				value: 'active',
			},
			{
				name: 'All',
				value: 'all',
			},
			{
				name: 'Approved',
				value: 'approved',
			},
			{
				name: 'Closed (Obligations Met)',
				value: 'closedObligationsMet',
			},
			{
				name: 'Closed (Rescheduled)',
				value: 'closedRescheduled',
			},
			{
				name: 'Closed (Written Off)',
				value: 'closedWrittenOff',
			},
			{
				name: 'Submitted and Pending Approval',
				value: 'submittedAndPendingApproval',
			},
		],
		routing: {
			send: {
				property: 'status',
				type: 'query',
			},
		},
	},
];

const loanGetOperation: INodeProperties[] = [
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the loan to retrieve',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['get'],
			},
		},
	},
];

const loanCreateOperation: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		description: 'Client ID for the loan',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'clientId',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		description: 'Loan product ID',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'productId',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Principal Amount',
		name: 'principal',
		type: 'number',
		default: 0,
		required: true,
		description: 'Principal loan amount',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'principal',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Loan Term Frequency',
		name: 'loanTermFrequency',
		type: 'number',
		default: 1,
		required: true,
		description: 'Loan term frequency (in months)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'loanTermFrequency',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Loan Term Frequency Type',
		name: 'loanTermFrequencyType',
		type: 'options',
		default: 'months',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Days',
				value: 'days',
			},
			{
				name: 'Weeks',
				value: 'weeks',
			},
			{
				name: 'Months',
				value: 'months',
			},
			{
				name: 'Years',
				value: 'years',
			},
		],
		routing: {
			send: {
				property: 'loanTermFrequencyType',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Repayment Every',
		name: 'repaymentEvery',
		type: 'number',
		default: 1,
		required: true,
		description: 'Repayment frequency (every X periods)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'repaymentEvery',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Repayment Frequency Type',
		name: 'repaymentFrequencyType',
		type: 'options',
		default: 'months',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Days',
				value: 'days',
			},
			{
				name: 'Weeks',
				value: 'weeks',
			},
			{
				name: 'Months',
				value: 'months',
			},
			{
				name: 'Years',
				value: 'years',
			},
		],
		routing: {
			send: {
				property: 'repaymentFrequencyType',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Interest Rate Per Period',
		name: 'interestRatePerPeriod',
		type: 'number',
		default: 0,
		required: true,
		description: 'Interest rate per period (as percentage)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'interestRatePerPeriod',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Expected Disbursement Date',
		name: 'expectedDisbursementDate',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'Expected disbursement date (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'expectedDisbursementDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Submitted On Date',
		name: 'submittedOnDate',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'Date when loan was submitted (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'submittedOnDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'External ID',
		name: 'externalId',
		type: 'string',
		default: '',
		description: 'External identifier for the loan',
		displayOptions: {
			show: {
				resource: ['loan'],
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

const loanUpdateOperation: INodeProperties[] = [
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the loan to update',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Principal Amount',
		name: 'principal',
		type: 'number',
		default: 0,
		description: 'Principal loan amount',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'principal',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Interest Rate Per Period',
		name: 'interestRatePerPeriod',
		type: 'number',
		default: 0,
		description: 'Interest rate per period (as percentage)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'interestRatePerPeriod',
				type: 'body',
			},
		},
	},
	{
		displayName: 'External ID',
		name: 'externalId',
		type: 'string',
		default: '',
		description: 'External identifier for the loan',
		displayOptions: {
			show: {
				resource: ['loan'],
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

const loanApproveOperation: INodeProperties[] = [
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the loan to approve',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['approve'],
			},
		},
	},
	{
		displayName: 'Approved On Date',
		name: 'approvedOnDate',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'Date when loan was approved (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['approve'],
			},
		},
		routing: {
			send: {
				property: 'approvedOnDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Approved Loan Amount',
		name: 'approvedLoanAmount',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['approve'],
			},
		},
		routing: {
			send: {
				property: 'approvedLoanAmount',
				type: 'body',
			},
		},
	},
];

const loanDisburseOperation: INodeProperties[] = [
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the loan to disburse',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['disburse'],
			},
		},
	},
	{
		displayName: 'Actual Disbursement Date',
		name: 'actualDisbursementDate',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'Actual disbursement date (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['disburse'],
			},
		},
		routing: {
			send: {
				property: 'actualDisbursementDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Transaction Amount',
		name: 'transactionAmount',
		type: 'number',
		default: 0,
		description: 'Transaction amount for disbursement',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['disburse'],
			},
		},
		routing: {
			send: {
				property: 'transactionAmount',
				type: 'body',
			},
		},
	},
];

const loanRepayOperation: INodeProperties[] = [
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the loan to record repayment for',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['repay'],
			},
		},
	},
	{
		displayName: 'Transaction Date',
		name: 'transactionDate',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'Date of the repayment transaction (YYYY-MM-DD format)',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['repay'],
			},
		},
		routing: {
			send: {
				property: 'transactionDate',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Transaction Amount',
		name: 'transactionAmount',
		type: 'number',
		default: 0,
		required: true,
		description: 'Amount of the repayment',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['repay'],
			},
		},
		routing: {
			send: {
				property: 'transactionAmount',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Payment Type ID',
		name: 'paymentTypeId',
		type: 'string',
		default: '',
		description: 'Payment type ID for the repayment',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['repay'],
			},
		},
		routing: {
			send: {
				property: 'paymentTypeId',
				type: 'body',
			},
		},
	},
	{
		displayName: 'External ID',
		name: 'externalId',
		type: 'string',
		default: '',
		description: 'External identifier for the repayment transaction',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['repay'],
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

export const fineractFields: INodeProperties[] = [
	// Client operations
	...clientListOperation,
	...clientGetOperation,
	...clientCreateOperation,
	...clientUpdateOperation,
	...clientDeleteOperation,
	// Loan operations
	...loanListOperation,
	...loanGetOperation,
	...loanCreateOperation,
	...loanUpdateOperation,
	...loanApproveOperation,
	...loanDisburseOperation,
	...loanRepayOperation,
];
