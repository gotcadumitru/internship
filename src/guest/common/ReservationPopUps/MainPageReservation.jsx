import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import ReserveTable from '../ReserveTable/ReserveTable';
import FormInput from '../../../common/form-input/FormInput';
import * as Yup from 'yup';
import CustomButton from '../../../common/custom-button/CustomButton';
import { Container } from 'react-bootstrap';
import { getDateTodayForInputDate } from '../../../common/helpers/data.helper';

const MainPageReservation = ({companyWithService,handleSubmitTableReservation, isPopUpOpen,setPopUpForUserInfo,trigger, setPopUpOpen,...props}) =>{
    
    const initialValues = {
        selectedDay: new Date().toISOString().split("T")[0],
        guestNumber: 1,
    }
    const validationSchema = Yup.object().shape({
        guestNumber: Yup.number().min(1, 'Min number of clinets is 1').required('This field is required'),
    })
    const [periodReservedTime,setPeriodReservedTime] = useState(-1);



    return (

        <Container fluid>
            {companyWithService && <Formik onSubmit={(val,formProps)=>handleSubmitTableReservation({guestNumber:val.guestNumber,time:periodReservedTime},formProps)} validationSchema={validationSchema} initialValues={initialValues}>
                {
                    formProps =>{
                         
                        return (

                            <Form >
                            <div className="main_date_picker">

                                <Field
                                    component={FormInput}
                                    type="date"
                                    name="selectedDay"
                                    min={getDateTodayForInputDate()}
                                    inputname="Chose a date"
                               />

                                <Field
                                    component={FormInput}
                                    inputname="Number of clients"
                                    type="number"
                                    min="1"
                                    max="10"
                                    name="guestNumber"
                               />
                            </div>
                            <ReserveTable formProps={formProps} nrOfGuestsSelectedFromClient={formProps.values.guestNumber} periodReservedTime={periodReservedTime} setPeriodReservedTime={setPeriodReservedTime} selectedDay={formProps.values.selectedDay} companyWithService={companyWithService}/>
                            
                            { formProps.errors.time && <div className="error_message_reservation">{formProps.errors.time}</div>}
                            <div className="book_btns">
                            <CustomButton onClick={()=>{setPopUpOpen(false)}}>Go Back</CustomButton>

                            <CustomButton type="submit">Send Booking</CustomButton>

                           
                            </div>
                            </Form>
                        )
                    }
                }
            </Formik>}
        </Container>

    )
}

export default MainPageReservation;