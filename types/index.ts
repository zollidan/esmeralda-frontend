export interface Task {
	uuid: string
	name: string
	state: 'STARTED' | 'FAILURE' | 'SUCCESS'
}
