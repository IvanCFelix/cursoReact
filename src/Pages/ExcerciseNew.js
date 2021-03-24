import React from 'react'

class ExcerciseNew extends React.Component {

handleOnChange = (e) =>{
    console.log(`${e.target.name} ${e.target.value}`)
}

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"

                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"

                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"

                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary" >
                        Submit
            </button>
                </form>
            </div>

        )
    }
}

export default ExcerciseNew