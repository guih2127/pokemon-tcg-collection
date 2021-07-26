import Collection from './Collection';
import Footer from './Footer';

const CardListPage = ({ isCollection }) => {
    console.log(isCollection);
    return (
        <div>
            <Collection isCollection={isCollection} />
            <Footer />
        </div>
    );
}

export default CardListPage;