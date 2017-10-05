import React from 'react';
import {Link} from 'react-router-dom';
const AppItm1 = () => {
    return (
        <div>"Hello App Item1"
            <div className="text-xs-right">
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
            </div>

        </div>
    );
}
export default AppItm1;