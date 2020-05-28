import React, {Fragment} from "react";

export const ContactForm = () => {
    return (
        <Fragment>
            <h4 className="text-center">Contact Form</h4>
            <form>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationDefault01">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" value="Mark" required/>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationDefault02">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" value="Otto" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationDefault03">City</label>
                        <input type="text" className="form-control" id="validationDefault03" required/>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationDefault04">State</label>
                        <select className="custom-select" id="validationDefault04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationDefault05">Zip</label>
                        <input type="text" className="form-control" id="validationDefault05" required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                        <label className="form-check-label" htmlFor="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
        </Fragment>
    )
}