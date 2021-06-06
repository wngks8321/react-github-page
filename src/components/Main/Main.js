import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        const contents = ['1', '2', '3', '4', '5', '6'];
        const contentsList = contents.map(content => <li>{content}</li>);
        return (
            <div>
                <div class="wrap_contents">
                    <ul class="list_contents">
                        {contentsList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Main;