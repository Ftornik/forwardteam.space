import React, { Component } from 'react';
import svg from 'lib/svg';

@svg({
    width: 123,
    height: 117
})
export default class Star extends Component {
    render = () => {
        const st2Style = {
            opacity: '0.5'
        };

        /* eslint-disable */
        return (
            <g>
                <g>
                    <g>
                        <polygon fill={ '#FAC04A' } points="61.5,94.6 26.3,113.2 33,73.9 4.5,46.2 43.9,40.4 61.5,4.8 79.1,40.4 118.5,46.2 90,73.9 92.3,87.4
				93.5,94.4 94.6,100.6 95,102.9 96.7,113.2 			"/>
                    </g>
                    <g>
                        <path fill={ '#3A364D' } d="M61.5,9.5l16.2,32.9l36.3,5.3L87.8,73.2l1,5.8l1.5,8.8l1.2,7l0.3,1.7l0.2,1.4l0.5,3l0.4,2.3l0.7,3.8l0.4,2.2
				L61.5,92.3l-32.4,17.1l6.2-36.1L9,47.6l21.3-3.1l3.3-0.5l1.7-0.2l2.5-0.4l0.7-0.1l1.6-0.2l4.8-0.7l0.4-0.1l2.2-4.5L61.5,9.5
				 M61.5,0l-3.8,7.6L43.8,36l-1.3,2.6l-3,0.4L38,39.2l-0.7,0.1l-2.5,0.4l-1.7,0.2l-3.3,0.5L8.4,43.5L0,44.7l6.1,5.9l24.7,24
				l-5.8,33.9l-1.4,8.4l7.5-4l30.5-16L92,113l7.6,4l-1.5-8.4l-0.4-2.2l-0.7-3.8l-0.4-2.3l-0.5-3l-0.2-1.4l-0.3-1.7l-1.2-7l-1.5-8.8
				l-0.6-3.6l24.7-24l6.1-5.9l-8.4-1.2l-34.1-5L65.3,7.6L61.5,0L61.5,0z"/>
                    </g>
                </g>
                <g style={ st2Style }>
                    <polygon fill={ '#FFF' } points="88.7,79 90.3,87.8 50.7,48.2 44.9,42.4 45.3,42.4 47.5,37.8 61.5,9.5 77.7,42.4 114,47.6 87.7,73.2
					"/>
                </g>
                <g style={ st2Style }>
                    <polygon fill={ '#FFF' } points="93.6,107.1 30.4,44.5 33.7,44 35.4,43.8 37.9,43.4 92,97.9 92.5,100.9 92.9,103.3 		"/>
                </g>
            </g>
        );
    }
}
