
export async function notFoundHandler(req, res) {
    res.status(404).json({
        message: 'Not found'
    })



}
