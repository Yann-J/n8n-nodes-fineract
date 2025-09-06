/* eslint-disable n8n-nodes-base/node-class-description-icon-not-svg */
import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { fineractOperations, fineractFields } from './FineractDescription';

export class Fineract implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Fineract',
		name: 'fineract',
		icon: 'file:fineract.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Fineract API to manage clients and loans',
		defaults: {
			name: 'Fineract',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'fineractApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{ $credentials.baseUrl }}/fineract-provider/api/v1',
			headers: {
				'Fineract-Platform-TenantId': '={{ $credentials.tenantId }}',
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Client',
						value: 'client',
					},
					{
						name: 'Loan',
						value: 'loan',
					},
				],
				default: 'client',
			},
			...fineractOperations,
			...fineractFields,
		],
	};
}
