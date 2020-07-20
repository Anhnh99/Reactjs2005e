import React, { Component } from 'react';
const MyHoc = MyInput => class extends Component {
    state = {
        bg: 'red'
    }
    render() {
        const { bg } = this.state
        return (
            <>
                <div style={{ background: bg }}>
                    <MyInput type="radio" />
                </div>
            </>
        )
    }
}
export default MyHoc