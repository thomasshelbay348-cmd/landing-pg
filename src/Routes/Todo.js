import React, { useState } from 'react'

const Todo = () => {
    // Single state for both inputs
    const [user, setUser] = useState({ username: '', age: '' })
    const [data, setData] = useState([]);

    const handleAddUser = (e) => {
        e.preventDefault();
        // Check if both fields are filled
        if (!user.username.trim() || !user.age.trim()) return;

        setData([...data, user]) // Pura object array mein add kar rahe hain
        setUser({ username: '', age: '' }) // Inputs reset
    }

    const handleDelete = (index) => {
        const store = data.filter((v, i) => i !== index);
        setData(store);
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                {/* Left Side: Input Form */}
                <div className="col-md-5">
                    <form className="card p-4 shadow-sm" onSubmit={handleAddUser}>
                        <h4 className="mb-3">Add User Details</h4>

                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                className="form-control"
                                placeholder="Enter name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input
                                type="number"
                                value={user.age}
                                onChange={(e) => setUser({ ...user, age: e.target.value })}
                                className="form-control"
                                placeholder="Enter age"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Add User</button>
                    </form>
                </div>

                {/* Right Side: Output List */}
                <div className="col-md-7">
                    <div className="card p-4 shadow-sm">
                        <h4 className="mb-3">User Records</h4>
                        {data.length === 0 ? <p className="text-muted">No data available.</p> : null}

                        {data.map((item, index) => {
                            return (
                                <div key={index} className='bg-dark p-3 mb-2 text-white d-flex justify-content-between align-items-center rounded'>
                                    <div>
                                        <strong className="text-info">Name:</strong> {item.username} <br />
                                        <small className="text-warning">Age: {item.age}</small>
                                    </div>
                                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(index)}>
                                        Delete
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
