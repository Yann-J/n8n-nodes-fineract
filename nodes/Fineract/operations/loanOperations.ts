import { INodeProperties } from 'n8n-workflow';

export const loanListOperation: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['loan'],
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
				resource: ['loan'],
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
				resource: ['loan'],
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

export const loanGetOperation: INodeProperties[] = [
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

export const loanCreateOperation: INodeProperties[] = [
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

export const loanUpdateOperation: INodeProperties[] = [
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

export const loanApproveOperation: INodeProperties[] = [
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

export const loanDisburseOperation: INodeProperties[] = [
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

export const loanRepayOperation: INodeProperties[] = [
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
