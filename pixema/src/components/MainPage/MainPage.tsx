import { Link } from 'react-router-dom';
import { routes } from '../../router/AppRouter';



const MainPage = () => {
	return (
		//просто линк, чтобы переходить к формам
		<Link to={routes.SIGN_IN} title="sign-in">
			<button>Sign in</button>
		</Link>


	);
};

export default MainPage;
