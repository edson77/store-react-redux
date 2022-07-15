import { connect } from "react-redux";
import App from "../../app";
import { saveCart } from "../../lib/actions";

//le hooks useSelector  acccede au state et à la propriete du state
export const AppContainer = connect(
    function mapStateToProps(state){
        return { items: state.items }
    },
    function mapDispatchToProps(dispatch){
        return {
            saveLocalStorage: (items) => dispatch(saveCart(items)),
        }
    }
)(App)