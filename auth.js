
const auth = (req, res, next) => {
    console.log(req.headers)
    let authHeader = req.headers.authorization
    if(!authHeader) {
        let err = new Error('You are not authenticated!')
        rest.setHeader('WWW-Authenticate', )
    }
}