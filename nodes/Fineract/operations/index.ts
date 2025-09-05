/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import { INodeProperties } from 'n8n-workflow';
import {
	clientListOperation,
	clientGetOperation,
	clientCreateOperation,
	clientUpdateOperation,
	clientDeleteOperation,
	clientActivateOperation,
	clientCloseOperation,
	clientRejectOperation,
	clientWithdrawOperation,
	clientReactivateOperation,
	clientUndoRejectionOperation,
	clientUndoWithdrawalOperation,
	clientAssignStaffOperation,
	clientUnassignStaffOperation,
	clientProposeTransferOperation,
	clientWithdrawTransferOperation,
	clientAcceptTransferOperation,
	clientRejectTransferOperation,
	clientUpdateSavingsAccountOperation,
	clientProposeAndAcceptTransferOperation,
} from './clientOperations';
import {
	loanListOperation,
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
			{
				name: 'Activate',
				value: 'activate',
				description: 'Activate a client',
				action: 'Activate a client',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=activate',
					},
				},
			},
			{
				name: 'Close',
				value: 'close',
				description: 'Close a client',
				action: 'Close a client',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=close',
					},
				},
			},
			{
				name: 'Reject',
				value: 'reject',
				description: 'Reject a client application',
				action: 'Reject a client',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=reject',
					},
				},
			},
			{
				name: 'Withdraw',
				value: 'withdraw',
				description: 'Withdraw a client application',
				action: 'Withdraw a client',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=withdraw',
					},
				},
			},
			{
				name: 'Reactivate',
				value: 'reactivate',
				description: 'Reactivate a closed client',
				action: 'Reactivate a client',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=reactivate',
					},
				},
			},
			{
				name: 'Undo Rejection',
				value: 'undoRejection',
				description: 'Undo rejection of a client',
				action: 'Undo client rejection',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=UndoRejection',
					},
				},
			},
			{
				name: 'Undo Withdrawal',
				value: 'undoWithdrawal',
				description: 'Undo withdrawal of a client',
				action: 'Undo client withdrawal',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=UndoWithdrawal',
					},
				},
			},
			{
				name: 'Assign Staff',
				value: 'assignStaff',
				description: 'Assign staff to a client',
				action: 'Assign staff to client',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=assignStaff',
					},
				},
			},
			{
				name: 'Unassign Staff',
				value: 'unassignStaff',
				description: 'Unassign staff from a client',
				action: 'Unassign staff from client',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=unassignStaff',
					},
				},
			},
			{
				name: 'Propose Transfer',
				value: 'proposeTransfer',
				description: 'Propose transfer of a client to another office',
				action: 'Propose client transfer',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=proposeTransfer',
					},
				},
			},
			{
				name: 'Withdraw Transfer',
				value: 'withdrawTransfer',
				description: 'Withdraw a proposed client transfer',
				action: 'Withdraw client transfer',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=withdrawTransfer',
					},
				},
			},
			{
				name: 'Accept Transfer',
				value: 'acceptTransfer',
				description: 'Accept a proposed client transfer',
				action: 'Accept client transfer',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=acceptTransfer',
					},
				},
			},
			{
				name: 'Reject Transfer',
				value: 'rejectTransfer',
				description: 'Reject a proposed client transfer',
				action: 'Reject client transfer',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=rejectTransfer',
					},
				},
			},
			{
				name: 'Update Savings Account',
				value: 'updateSavingsAccount',
				description: 'Update default savings account for a client',
				action: 'Update client savings account',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=updateSavingsAccount',
					},
				},
			},
			{
				name: 'Propose and Accept Transfer',
				value: 'proposeAndAcceptTransfer',
				description: 'Propose and accept client transfer in one step',
				action: 'Propose and accept client transfer',
				routing: {
					request: {
						method: 'POST',
						url: '=/clients/{{ $parameter.clientId }}?command=proposeAndAcceptTransfer',
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
	...clientGetOperation,
	...clientCreateOperation,
	...clientUpdateOperation,
	...clientDeleteOperation,
	...clientActivateOperation,
	...clientCloseOperation,
	...clientRejectOperation,
	...clientWithdrawOperation,
	...clientReactivateOperation,
	...clientUndoRejectionOperation,
	...clientUndoWithdrawalOperation,
	...clientAssignStaffOperation,
	...clientUnassignStaffOperation,
	...clientProposeTransferOperation,
	...clientWithdrawTransferOperation,
	...clientAcceptTransferOperation,
	...clientRejectTransferOperation,
	...clientUpdateSavingsAccountOperation,
	...clientProposeAndAcceptTransferOperation,
	// Loan operations
	...loanListOperation,
	...loanGetOperation,
	...loanCreateOperation,
	...loanUpdateOperation,
	...loanApproveOperation,
	...loanDisburseOperation,
	...loanRepayOperation,
];
