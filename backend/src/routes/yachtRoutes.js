import { 
    addNewYacht,
    getYachts,
    getYachtById,
    updateYachtById,
    deleteYachtById
} from '../controllers/yachtController'

const routes = (app) => {
    app.route('/yacht')
    .get((req, res, next) => {

        // Middleware
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request from ${req.method}`);
        next();
    }, getYachts)

    .post(addNewYacht);

    app.route('/yacht/:yachtId')
    // Get specific yacht
    .get(getYachtById)
    .put(updateYachtById)
    .delete(deleteYachtById)
}

export default routes;