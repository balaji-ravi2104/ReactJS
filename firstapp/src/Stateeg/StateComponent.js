import React from 'react'
export default class StateComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            data: 'Data from db Soon...!',
            version: 18.2,
            flag: true,
            subs: ['ML', 'Maths', 'AI', 'IP', 'FSD'],
            obj: {
                fe: 'ReactJS',
                be: 'NodeJS',
                db: 'MongoDB'
            },
            products: [
                { "p_id": 111, "p_name": "P_one", "p_cost": 10000 },
                { "p_id": 222, "p_name": "P_two", "p_cost": 20000 },
                { "p_id": 333, "p_name": "P_three", "p_cost": 30000 },
                { "p_id": 444, "p_name": "P_four", "p_cost": 40000 },
                { "p_id": 555, "p_name": "P_five", "p_cost": 50000 }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome to State example</h1>
                <p style={{ color: 'red' }}>{this.state.data} </p>
                <p style={{ color: 'blue' }}>{this.state.version}</p>
                <p style={{ color: 'green' }}>{JSON.stringify(this.state.flag)}</p>
                <p style={{ color: 'maroon' }}>{this.state.subs} </p>
                <p style={{ color: 'gray' }}>{JSON.stringify(this.state.obj)} </p>
                <table cellPadding="5px"
                    cellSpacing="5px"
                    align='center'
                    border='1px'>
                    <thead>
                        <th>Sr no</th>
                        <th>P_id</th>
                        <th>P_name</th>
                        <th>P_cost</th>
                    </thead>
                    <tbody>
                        {this.state.products.map((e, i) => (
                            <tr>
                                <td>{i + 1} </td>
                                <td>{e.p_id} </td>
                                <td>{e.p_name} </td>
                                <td>{e.p_cost} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}