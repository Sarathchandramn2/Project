import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '../error-boundary/error-boundary';
import Routes from '../route/route';
import { useSelector } from 'react-redux';
import { AppState, useAppThunkDispatch } from '../../redux/store';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
    const user = useSelector((state) => state.common.count);
    const dispatch = useAppThunkDispatch();

    return (
        <>
            <Router>
                <ErrorBoundary>
                    {/* <Header /> */}
                </ErrorBoundary>
                <div>
                    <div>
                        <div>
                            <ErrorBoundary>
                                <Routes />
                            </ErrorBoundary>
                        </div>
                        {/* {count}
                        <button onClick={() => dispatch(updateCount())}>Add</button>
                        <button onClick={() => dispatch(sampleApi())}>API Check</button> */}
                    </div>
                </div>
            </Router>
        </>
    );
};
export default App ;
