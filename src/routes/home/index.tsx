import {FunctionalComponent, h, RenderableProps} from 'preact';
import style from './style.css';

interface HomeProps {
    name: string
}
const Home: FunctionalComponent<HomeProps> = (props) => {
    console.log({props});
    debugger
    return (
        <div class={style.home}>
            <h1>{props.name}</h1>
            <p>This is the Home component.</p>
        </div>
    );
};

export default Home;
