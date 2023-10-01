import React from 'react';
import { UserContext, SecondContext } from '../App';

// Without useContext hook code loos like this
const ComponentsC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    firstname => {
                        return (
                            <SecondContext.Consumer>
                                {
                                    lastname => {
                                        return (
                                        <div>
                                            {firstname}{lastname}
                                        </div>
                                        )
                                    }
                                }
                            </SecondContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentsC;
