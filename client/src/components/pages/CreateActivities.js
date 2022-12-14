import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivities } from '../../redux/actions/actions/activities';

export default function CreateActivities() {

    const dispatch = useDispatch()

    const [create, setCreate] = useState({
        name: "",
        schedule: "",
        price: 0,
        start_at: "",
        end_at: "",
        description: "",
        allowed_age: "",
        difficulty_level: "",
    })

    const handleChange = (e) => {
        const property = e.target.name
        const value = e.target.value

        setCreate({
            ...create,
            [property]: value
        })
    }

    const handleSubmit = (e) => {
        dispatch(postActivities(create))
        alert('New activity created!')
        setCreate({
            name: "",
            schedule: "",
            price: 0,
            start_at: "",
            end_at: "",
            description: "",
            allowed_age: "",
            difficulty_level: "",
        })
    }


    return (
        <div>
            <div className="w-75 mx-auto rounded bg-light mt-5">
                <div className='col-8 mx-auto pt-5 pb-5'>
                    <h4 className='mt-3 mb-3'>Create new activity</h4>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div class="col-lg-6">
                                <label className="labels">Name</label>
                                <input type="text" name='name' value={create.name} 
                                required onChange={handleChange} className="form-control" />
                            </div>

                            <div class="col-lg-6">
                                <label class="labels">Price</label>
                                <input type="number" name='price' value={create.price} 
                                required onChange={handleChange} min={0} max={200} className="form-control" />
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-12'>
                                <label className='labels'>Description</label>
                                <textarea name='description' value={create.description} 
                                required onChange={handleChange} class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-4'>
                                <label className='labels'>Schedule</label>
                                <textarea name='schedule' value={create.schedule} 
                                required onChange={handleChange} class="form-control" rows="3"></textarea>
                            </div>
                            <div className='col-4'>
                                <label class="labels">Allowed age</label>
                                <select name="allowed_age" onChange={handleChange} class="form-select" aria-label="Default select example">
                                    <option selected>select a valid option</option>
                                    <option value="under 13 years old">under 13 years old</option>
                                    <option value="everyone">everyone</option>
                                    <option value="teenagers">teenagers</option>
                                    <option value="over 18 years old">over 18 years old</option>
                                </select>
                            </div>
                            <div className='col-4'>
                                <label class="labels">Difficulty level</label>
                                <select name='difficulty_level' onChange={handleChange} class="form-select" aria-label="Default select example">
                                    <option selected>select a valid option</option>
                                    <option value="kids">kids</option>
                                    <option value="beginners">beginners</option>
                                    <option value="advanced">advanced</option>
                                    <option value="expert">expert</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div class="col-6">
                                <label className="labels">Start at</label>
                                <input type="date" id="start" className="form-control" name="start_at"
                                    min="2022-01-01" max="2022-12-31"
                                    value={create.start_at} onChange={handleChange} />
                            </div>
                            <div class="col-6">
                                <label class="labels">End at</label>
                                <input type="date" className="form-control" id="end" name="end_at"
                                    min="2022-01-01" max="2022-12-31"
                                    value={create.end_at} onChange={handleChange} />
                            </div>
                        </div>
                        <button className="btn border mt-3" type="submit">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}