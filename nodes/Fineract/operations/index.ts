import { INodeProperties } from 'n8n-workflow';
import {
	clientListOperation,
	clientGetAllOperation,
	clientGetOperation,
	clientCreateOperation,
	clientUpdateOperation,
	clientDeleteOperation,
} from './clientOperations';
import {
	loanListOperation,
	loanGetAllOperation,
	loanGetOperation,
	loanCreateOperation,
	loanUpdateOperation,
	loanApproveOperation,
	loanDisburseOperation,
	loanRepayOperation,
} from './loanOperations';

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
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many clients (Note: Limited to API max results per page)',
				action: 'Get many clients',
				routing: {
					request: {
						method: 'GET',
						url: '/clients',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'pageItems',
								},
							},
						],
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
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'pageItems',
								},
							},
						],
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
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many loans (Note: Limited to API max results per page)',
				action: 'Get many loans',
				routing: {
					request: {
						method: 'GET',
						url: '/loans',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'pageItems',
								},
							},
						],
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
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'pageItems',
								},
							},
						],
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

export const fineractFields: INodeProperties[] = [
	// Client operations
	...clientListOperation,
	...clientGetAllOperation,
	...clientGetOperation,
	...clientCreateOperation,
	...clientUpdateOperation,
	...clientDeleteOperation,
	// Loan operations
	...loanListOperation,
	...loanGetAllOperation,
	...loanGetOperation,
	...loanCreateOperation,
	...loanUpdateOperation,
	...loanApproveOperation,
	...loanDisburseOperation,
	...loanRepayOperation,
];
