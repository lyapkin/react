class CustomError extends Error {
	constructor(message) {
		super(message)
		this.name = this.constructor.name
	}
}

export class ServerProblemError extends CustomError {
	
}

 export class ResponseError extends CustomError {

}